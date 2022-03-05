import styles from "../../styles/index/StoryList.module.css";
import Image from "next/image";

const StoryList = props => {
  const posts = props.posts;
  const src = "https://cdn.pixabay.com/user/2022/03/02/14-36-31-529_250x250.jpg";
  const image_width = 100;
  const sentTo = "医療従事者";
  return (

    <ul className={styles.container}>
      {posts.map( post => {
        return (
          <li key={post.id}>
            <div>
              <Image
                src={src}
                width={image_width}
                height={image_width}
              />
            </div>
            <p><span>{sentTo}</span>の方へ</p>
          </li>
        )
      })}
    </ul>
  )

}


export default StoryList;