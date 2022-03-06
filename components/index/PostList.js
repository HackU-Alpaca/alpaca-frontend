import styles from "../../styles/index/PostList.module.css";
import { useState } from "react";

const PostList = props => {
  // const posts = props.posts;
  const posts = [...Array(20)].map((_, i) => i); //TODO delete

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

  // TODO delete
  const comment = "アルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたい"
  const post_list = [
    {sentTo_1: "医療従事者", sentTo_2: "の方", message: "いつも私たちのために最前線で働いてくださり、ありがとうございます！"},
    {sentTo_1: "コロナに", sentTo_2: "感染した方", message: "はやく治りますように！"},
    {sentTo_1: "飲食店に", sentTo_2: "勤務の方", message: "いつも美味しいご飯をありがとうございます。"},
    {sentTo_1: "アルパカ", sentTo_2: "の方", message: comment},
  ]
  const shown_post = posts.slice(0, readMoreCount*num);

  return (
    <div className={styles.container}>
      <h2 className="shelby">Messages</h2>
      <ul>
        {shown_post.map( num => {
          //TODO Delete these lines -------
          const i = Math.floor(Math.random() * post_list.length);
          const post = post_list[i];
          post.id = num;
          //TODO---------------------------
          return (
            <li key={post.id}>
              <span className="shelby">Dear</span>
              <h3 className="flower-butterfly">
                {post.sentTo_1}<br />{post.sentTo_2}
              </h3>
              <p>{post.message}</p>
            </li>
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