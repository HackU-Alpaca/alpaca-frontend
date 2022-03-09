import styles from "../../styles/index/PostList.module.css";
import { useState } from "react";
import { useModal } from "react-modal-hook";
import { PostModal, ReadMoreModal, TagModal, SortModal } from "../modals";
import TagList from "./TagList";
import SearchBox from "./SearchBox";
import { sorter } from "./sort_functions";

const PostList = props => {
  const { posts, sentToList } = props;
  const num = (props.display === "all") //* 一回で表示されるpostの数
    ? posts.length : props.display;
  const cantReadMoreFlag = (props.display === "all");
  posts.map(post => Object.assign(post, relations[post.sentTo]));
  const [query, setQuery] = useState("");
  const [targetPost, setTargetPost] = useState("");
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
      post={targetPost}
    />
  ), [targetPost])
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
    const target_node = event.currentTarget;
    const idx = Array.from(target_node.parentNode.children).indexOf(target_node);
    setTargetPost(shown_posts[idx]);
    showPostModal();
  }

  const openSortModals = () => {
    const { left, bottom } = document.getElementsByClassName("sort-icon")[0].getBoundingClientRect();
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
            <li key={i} onClick={openPostModal}>
              <span className="shelby">Dear</span>
              <h3 className="flower-butterfly">
                {sentTo_1}<br />{sentTo_2}
              </h3>
              <p>{post.message}</p>
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
}

export default PostList;