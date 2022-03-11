import styles from "../../styles/index/PostList.module.css";
import { useEffect, useState } from "react";
import { useModal } from "react-modal-hook";
import { PostModal, ReadMoreModal, TagModal, SortModal } from "../modals";
import TagList from "./TagList";
import SearchBox from "./SearchBox";
import { sorter } from "./sort_functions";
import { update_like } from "../../functions/";

const PostList = props => {
  const { posts, sentToList } = props;
  const num = (props.display === "all") //* 一回で表示されるpostの数
    ? posts.length : props.display;
  const cantReadMoreFlag = (props.display === "all");
  posts.map(post => Object.assign(post, relations[post.sentTo]));
  const [query, setQuery] = useState("");
  const [targetPostIdx, setTargetPostIdx] = useState("");
  const [searching, setSearching] = useState(false);
  let tag_info = {};
  sentToList.map( sentTo => tag_info[sentTo] = "active" );
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
    if (event.target.className === "like-icon") return null;
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

  //* Likeボタン設定
  const toggleHeartBtn = event => {
    const isLiked = event.target.src.includes("filled");
    const message_id = event.target.parentNode.parentNode.parentNode.className;
    if (isLiked) {
      // update_like(false);
      event.target.src = "/icons/empty-heart.svg";
    } else {
      // update_like(true);
      event.target.src = "/icons/filled-heart.svg";
    }
  }

  //* "active"なタグでソート
  const active_tags = Object.keys(tagInfo).filter( tag => {
    return tagInfo[tag] === "active";
  })
  let shown_posts = posts.filter( post => active_tags.includes(post.sentTo) );
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
          <img
            src={sort_icon_url}
            alt="ソート"
            className="sort-icon"
            onClick={openSortModals}
          />
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
              <p>{post.message}</p>
              <div>
                <img
                  src={(post.isLiked)
                    ? "/icons/filled-heart.svg"
                    : "/icons/empty-heart.svg"
                  }
                  alt="Likeボタン"
                  className="like-icon"
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