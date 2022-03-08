import styles from "../../styles/index/TagList.module.css";

const TagList = props => {
  const tagInfo = props.tagInfo;
  const removeThisTag = event => {
    const tag = event.currentTarget.parentNode.innerText;
    tagInfo[tag] = "inactive";
    props.updateTagInfo(tagInfo);
  }

  return (
    <div className={styles.container}>
      <div>
        <ul>
          {Object.keys(tagInfo).map( (tag, i) => {
            if (tagInfo[tag] === "inactive") return ;
            return (
              <li
                key={i}
                className={`flower-butterfly ${styles.active}`}
              >
                <p className="tags">{tag}</p>
                <img
                  src="/icons/cancel_icon.svg"
                  alt="タグ消去"
                  className="tag-icon"
                  onClick={removeThisTag}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default TagList;