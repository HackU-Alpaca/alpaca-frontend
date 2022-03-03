import Image from "next/image";

const CommentList = props => {
  const images = props.images;
  const comment = "アルパカ食べたいアルパカ食べたいアルパカ食べたい"
  const sentTo = "医療従事者";

  const image_width = 250;

  return (
    <ul>
      {images.map( image => {
        return (
          <li key={image.id}>
            <div>
              To <span>{sentTo}</span>
            </div>
            <Image
              src={image.webformatURL}
              alt={image.tags}
              width={image_width}
              height={image.webformatHeight*image_width/image.webformatWidth}
            />
            <p>{comment}</p>
          </li>
        )
      })}
    </ul>
  );
}

export default CommentList;