import styles from "../../styles/index/PostList.module.css";
import { useEffect, useState } from "react";
import { useModal } from "react-modal-hook";
import PostModal from "../modals/PostModal";


const PostList = props => {
  // const posts = props.posts;
   //TODO delete
  const message = "アルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたい"
  const post_list = [
    {sentTo_1: "医療従事者", sentTo_2: "の方", message: "いつも私たちのために最前線で働いてくださり、ありがとうございます！"},
    {sentTo_1: "コロナに", sentTo_2: "感染した方", message: "はやく治りますように！"},
    {sentTo_1: "飲食店に", sentTo_2: "勤務の方", message: "いつも美味しいご飯をありがとうございます。"},
    {sentTo_1: "アルパカ", sentTo_2: "の方", message: message},
  ]
  const posts = [...Array(20)].map((_, i) => {
    const j = Math.floor(Math.random() * post_list.length);
    return post_list[j];
  });
  // TODO -------------------------

  const [targetPost, setTargetPost] = useState("")
  const [readMoreCount, setReadMoreCount] = useState(1);
  const [cantReadMore, setCantReadMore] = useState(false);
  const num = 6; //* 一回で表示されるpostの数
  const readMoreBtnClicked = event => {
    event.preventDefault();
    setReadMoreCount( prevCount => {
      const newCount = prevCount + 1;
      if (posts.length/num < newCount) setCantReadMore(true);
      return newCount;
    } );
  }

  const [showModal, hideModal] = useModal(() => (
    <PostModal hideModal={hideModal} post={targetPost}/>
  ), [targetPost])

  const showDigest = event => {
    event.preventDefault();
    const target_node = event.currentTarget;
    const idx = Array.from(target_node.parentNode.children).indexOf(target_node);
    console.log(idx);
    setTargetPost(posts[idx]);
    showModal();
  }

  return (
    <div className={styles.container}>
      <h2 className="shelby">Messages</h2>
      <ul>
        {posts.slice(0, readMoreCount*num).map( (post, i) => {
          return (
            <a key={i} onClick={showDigest}>
              <li>
                <span className="shelby">Dear</span>
                <h3 className="flower-butterfly">
                  {post.sentTo_1}<br />{post.sentTo_2}
                </h3>
                <p>{post.message}</p>
              </li>
            </a>
          )
        })}
      </ul>
      {!cantReadMore && (
        <div align="right">
          <button
            className="flower-butterfly"
            onClick={readMoreBtnClicked}
          >
            もっと見る
          </button>
        </div>
      )}
    </div>
  );
}

export default PostList;