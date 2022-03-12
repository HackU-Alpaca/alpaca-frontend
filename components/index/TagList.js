import styles from "../../styles/index/TagList.module.css";
import { id_tag_relations } from "../../constants/tagConstants";

const TagList = props => {
  const { tagInfo } = props;
  const removeThisTag = event => {
    const tag = event.currentTarget.parentNode;
    const tagKey = tag.classList[0].split("_")[1];
    tagInfo[tagKey] = "inactive";
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
                className={`tagKey_${tag} flower-butterfly ${styles.active}`}
              >
                <p className="tags">{id_tag_relations[tag]}</p>
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