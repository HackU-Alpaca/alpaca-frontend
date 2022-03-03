import Image from "next/image";

const CommentList = props => {
  const images = props.images;
  const image_width = 300;

  const comment = "アルパカ食べたいアルパカ食べたいアルパカ食べたい"

  return (
    <ul>
      {images.map( image => {
        return (
          <li key={image.id}>
            <div>
              To <span>医療従事者</span>
            </div>
            <Image
              src={image.previewURL}
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