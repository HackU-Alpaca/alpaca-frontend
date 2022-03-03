import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/index/ImageList.module.css";

const PostList = props => {
  const posts = props.posts;
  const image_width = 250;

  const comment = "アルパカ食べたいアルパカ食べたいアルパカ食べたい"
  const sentTo = "医療従事者";

  return (
    <ul className={styles.container}>
      {posts.map( post => {
        return (
          <li key={post.id}>
            <div>
              <span>{sentTo}</span>の方へ
            </div>
            <Image
              src={post.webformatURL}
              alt={post.tags}
              width={image_width}
              height={post.webformatHeight*image_width/post.webformatWidth}
            />
            <p>{comment}</p>
          </li>
        )
      })}
    </ul>
  );
}

export default PostList;