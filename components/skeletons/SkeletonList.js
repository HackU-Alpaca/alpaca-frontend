import SkeletonElement from "./SkeletonElement";
import SkeletonBox from "./SkeletonBox";

import styles from "../../styles/skeleton/SkeletonIndex.module.css";

const SkeletonList = ({ type, num }) => {
  return (
    <div>
      <ul>
        {Array(num).fill(null).map( (_, i) => {
          if (type === "post") {
            return (
              <li className={styles.each_post} key={i}>
                <SkeletonBox type="post" />
              </li>
            )
          } else {
            return (
              <li key={i}>
                <SkeletonElement type={type} />
              </li>
            )
          }
        })}
      </ul>
    </div>
  );
}

export default SkeletonList;