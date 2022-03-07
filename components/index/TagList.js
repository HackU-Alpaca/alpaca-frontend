import styles from "../../styles/index/TagList.module.css";

const TagList = props => {
  const tags = props.tags
  return (
    <div className={styles.container}>
      <ul>
        {tags.map( (tag, i) => {
          return (
            <li key={i} className="flower-butterfly">
              {tag}
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default TagList;