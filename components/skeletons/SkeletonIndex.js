import SkeletonElement from "./SkeletonElement";
import SkeletonList from "./SkeletonList";

import styles from "../../styles/skeleton/SkeletonIndex.module.css";

const SkeletonIndex = () => {

  return (
    <div className={styles.container}>
      <SkeletonElement type="title" />
      <SkeletonList type="digest" num={5} />

      <div className={styles.posts_title}>
        <SkeletonElement type="title" />
        <SkeletonList type="box" num={3} />
      </div>
      <SkeletonList type="post" num={6} />
    </div>
  );
}

SkeletonIndex.layout = "skeleton-index";

export default SkeletonIndex;