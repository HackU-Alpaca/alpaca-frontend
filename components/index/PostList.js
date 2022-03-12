import styles from "../../styles/index/PostList.module.css";
import { useState } from "react";
import { useModal } from "react-modal-hook";
import { PostModal, ReadMoreModal, TagModal, SortModal } from "../modals";
import TagList from "./TagList";
import SearchBox from "./SearchBox";
import { sorter } from "./sort_functions";
import { add_like } from "../../functions/";
import { id_tag_relations } from "../../constants/tagConstants";

const PostList = props => {
  const { sentToList } = props;
  const [ posts, setPosts ] = useState(props.posts);
  const num = (props.display === "all") //* 一回で表示されるpostの数
    ? posts.length : props.display;
  const cantReadMoreFlag = (props.display === "all");
  posts.map(post => Object.assign(post, relations[post.sentTo]));
  const [query, setQuery] = useState("");
  const [targetPostIdx, setTargetPostIdx] = useState("");
  const [searching, setSearching] = useState(false);
  let tag_info = {};
  for (const key in id_tag_relations) tag_info[key] = "active";
  const [tagInfo, setTagInfo] = useState(tag_info);
  const [sortInfo, setSortInfo] = useState({
    order_by: "createdAt", ascending: false
  });
  const [sortModalStyle, setSortModalStyle] = useState({});

  //* モーダル設定
  const [showPostModal, hidePostModal] = useModal(() => (
    <PostModal
      hideModal={hidePostModal}
      posts={shown_posts}
      idx={targetPostIdx}
      updatePosts={updatePosts}
    />
  ), [shown_posts, targetPostIdx])
  const [showReadMoreModal, hideReadMoreModal] = useModal(() => (
    <ReadMoreModal
      hideModal={hideReadMoreModal}
      posts={posts}
      sentToList={sentToList}
    />
  ), [posts])
  const [showTagModal, hideTagModal] = useModal(() => (
    <TagModal
      hideModal={hideTagModal}
      tagInfo={tagInfo}
      updateTagInfo={updateTagInfo}
    />
  ), [tagInfo])
  const [showSortModal, hideSortModal] = useModal(() => (
    <SortModal
      hideModal={hideSortModal}
      sortInfo={sortInfo}
      setSortInfo={setSortInfo}
      sortModalStyle={sortModalStyle}
    />
  ), [sortInfo, sortModalStyle])

  const openPostModal = event => {
    if (event.target.className.includes("like-icon")) return null;
    const target_node = event.currentTarget;
    const idx = Array.from(target_node.parentNode.children).indexOf(target_node);
    setTargetPostIdx(idx);
    showPostModal();
  }

  const openSortModals = event => {
    const { left, bottom } = event.target.getBoundingClientRect();
    setSortModalStyle({
      top           : bottom+'px',
      left          : (left-80)+'px',
      width         : '120px',
      height        : '75px',
    })
    showSortModal()
  }

  //* タグ設定
  const updateTagInfo = TagInfo => {
    setTagInfo( prevTagInfo => {
      const newTagInfo = {...prevTagInfo, ...TagInfo};
      if (!Object.values(newTagInfo).includes("active")) {
        return tag_info;
      }
      return newTagInfo;
    } );
  }

  const updatePosts = newPosts => {
    const newLikes = {};
    newPosts.map(post => {
      newLikes[post.message_id] = post.isLiked;
    })
    const savedLikes = JSON.parse(localStorage.getItem("Likes"));
    localStorage.setItem("Likes", JSON.stringify({
      ...savedLikes, ...newLikes
    }))
    setPosts(newPosts);
  }

  //* Likeボタン設定
  const toggleHeartBtn = event => {
    const isLiked = event.target.src.includes("filled");
    const message_id = event.target.parentNode.parentNode.className;
    const doc = posts.find(post=>post.message_id===message_id);
    const idx = posts.indexOf(doc);
    posts[idx] = {...posts[idx], ...{isLiked: !isLiked}}
    updatePosts(posts)
    if (isLiked) {
      event.target.classList.remove("liked");
      event.target.src = "/icons/empty-heart.svg";
    } else {
      event.target.classList.add("liked");
      // add_like(message_id);
      event.target.src = "/icons/filled-heart.svg";
    }
  }
  //* LocalStorageからlikeを取得
  const savedLikes = JSON.parse(localStorage.getItem("Likes"));
  if (savedLikes) {
    posts.map(post => {
      post.isLiked = savedLikes[post.message_id]
    })
  } else {
    posts.map(post => post.isLiked = false)
  }

  //* "active"なタグでソート
  const active_tags = Object.keys(tagInfo).filter( tag => {
    return tagInfo[tag] === "active";
  })
  let shown_posts = posts.filter( post => active_tags.includes(post.tagKey) );
  //* 検索ワードでフィルター
  shown_posts = shown_posts.filter(post => {
    const sentTo = post.sentTo_1 + post.sentTo_2;
    return (sentTo.indexOf(query) >= 0)
      || (post.sentTo.indexOf(query) >= 0)
      || (post.message.indexOf(query) >= 0)
  })
  //* createdAt or likesでソート
  shown_posts = sorter(shown_posts, sortInfo.order_by, sortInfo.ascending)
  const order = (sortInfo.ascending) ? "ascending" : "descending";
  const sort_icon_url = `/icons/sort_by_${sortInfo.order_by}_${order}.svg`;

  return (
    <div className={styles.container}>
      <div>
        <h2 className="shelby">Messages</h2>
        <div>
          {!searching && (
            <img
              src="/icons/tag_setting_icon.svg"
              alt="タグ追加"
              className="messages-setting-icon"
              onClick={showTagModal}
            />
          )}
          {!searching && (
            <img
              src="/icons/search_icon.svg"
              alt="検索"
              className="messages-setting-icon"
              onClick={() => setSearching(true)}
            />
          )}
          {searching && (
            <SearchBox
              close={() => setSearching(false)}
              setQuery={setQuery}
              query={query}
            />
          )}
          {!searching && (
            <img
              src={sort_icon_url}
              alt="ソート"
              className="sort-icon"
              onClick={openSortModals}
            />
          )}
        </div>
      </div>

      {/* タグ表示 */}
      {(props.display === "all") && Object.values(tagInfo).includes('active') && (
        <TagList
          tagInfo={tagInfo}
          updateTagInfo={updateTagInfo}
        />
      )}

      <ul>
        {shown_posts.slice(0, num).map( (post, i) => {
          const { sentTo_1, sentTo_2 } = relations[post.sentTo];
          return (
            <li key={i} onClick={openPostModal} className={post.message_id}>
              <span className="shelby">Dear</span>
              <h3 className="flower-butterfly">
                {sentTo_1}<br />{sentTo_2}
              </h3>
              <div>
                <p>{post.message}</p>
              </div>
              <div>
                <img
                  src={(post.isLiked)
                    ? "/icons/filled-heart.svg"
                    : "/icons/empty-heart.svg"
                  }
                  alt="Likeボタン"
                  className="like-icon heart"
                  onClick={toggleHeartBtn}
                />
              </div>
            </li>
          )
        })}
      </ul>
      {!cantReadMoreFlag && (
        <div align="right">
          <button
            className="flower-butterfly strong-gray"
            onClick={showReadMoreModal}
          >
            もっと見る
          </button>
        </div>
      )}
    </div>
  );
}

const relations = {
  "医療従事者": {
    sentTo_1: "医療従事者", sentTo_2: "の方"
  },
  "コロナ感染者": {
    sentTo_1: "コロナに", sentTo_2: "感染した方"
  },
  "飲食店従業員": {
    sentTo_1: "飲食店に", sentTo_2: "勤務の方"
  },
  "アルパカ": {
    sentTo_1: "アルパカ", sentTo_2: "の方"
  },
  "主婦": {
    sentTo_1: "主婦の方",
    sentTo_2: "",
  },
  "サラリーマン": {
    sentTo_1: "サラリーマン",
    sentTo_2: "の方",
  },
  "受験生": {
    sentTo_1: "受験生",
    sentTo_2: "の方",
  },
  "学生": {
    sentTo_1: "学生の方",
    sentTo_2: "",
  },
}

export default PostList;