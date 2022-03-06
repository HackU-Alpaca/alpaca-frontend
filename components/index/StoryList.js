import styles from "../../styles/index/StoryList.module.css";

const StoryList = props => {
  // const posts = props.posts;
  const story_list = [
    {id: 1, sentTo_1: "医療従事者の", sentTo_2: "皆さん", img: "doctor"},
    {id: 2, sentTo_1: "コロナに", sentTo_2: "感染した皆さん", img: "doctor"},
    {id: 3, sentTo_1: "飲食店で", sentTo_2: "働く皆さん", img: "doctor"},
  ]
  return (
    <div className={styles.container}>
      <div>
        <h2 className="shelby">Digest</h2>
        <ul>
          {story_list.map( story => {
            return (
              <li key={story.id} className={story.img}>
                <p>{story.sentTo_1}</p>
                <p>{story.sentTo_2}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>

  )

}


export default StoryList;