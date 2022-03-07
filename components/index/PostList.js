import styles from "../../styles/index/PostList.module.css";
import { useState } from "react";
import { useModal } from "react-modal-hook";
import PostModal from "../modals/PostModal";
import ReadMoreModal from "../modals/ReadMoreModal";

const PostList = props => {
  const posts = props.posts;
  //* 一回で表示されるpostの数
  const num = (props.display === "all")
    ? posts.length : props.display;
  const cantReadMoreFlag = (props.display === "all");

  posts.map( post => {
    Object.assign(post, relations[post.sentTo])
  });

  const [targetPost, setTargetPost] = useState("")

  const [showPostModal, hidePostModal] = useModal(() => (
    <PostModal hideModal={hidePostModal} post={targetPost}/>
  ), [targetPost])
  const [showReadMoreModal, hideReadMoreModal] = useModal(() => (
    <ReadMoreModal hideModal={hideReadMoreModal} posts={posts}/>
  ), [posts])

  const openPostModal = event => {
    event.preventDefault();
    const target_node = event.currentTarget;
    const idx = Array.from(target_node.parentNode.children).indexOf(target_node);
    setTargetPost(posts[idx]);
    showPostModal();
  }

  return (
    <div className={styles.container}>
      <h2 className="shelby">Messages</h2>
      <ul>
        {posts.slice(0, num).map( (post, i) => {
          const { sentTo_1, sentTo_2 } = relations[post.sentTo];
          return (
            <a key={i} onClick={openPostModal}>
              <li>
                <span className="shelby">Dear</span>
                <h3 className="flower-butterfly">
                  {sentTo_1}<br />{sentTo_2}
                </h3>
                <p>{post.message}</p>
              </li>
            </a>
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