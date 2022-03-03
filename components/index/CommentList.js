import Image from "next/image";

const CommentList = props => {
  const posts = props.posts;
  const image_width = 250;

  const comment = "アルパカ食べたいアルパカ食べたいアルパカ食べたい"
  const sentTo = "医療従事者";

  return (
    <ul>
      {posts.map( post => {
        return (
          <li key={post.id}>
            <div>
              To <span>{sentTo}</span>
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

export default CommentList;