import Image from "next/image";

const CommentList = props => {
  const image_width = 300;
  const url = "https://cdn.pixabay.com/photo/2022/02/26/16/48/flag-7036018_150.jpg"
  const images = [
    {id: 0, url: url},
    {id: 1, url: url},
  ]

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
              src={image.url}
              alt={""}
              width={image_width}
              height={image_width}
            />
            <p>{comment}</p>
          </li>
        )
      })}
    </ul>
  );
}

export default CommentList;