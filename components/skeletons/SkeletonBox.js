import SkeletonList from "./SkeletonList";
import SkeletonElement from "./SkeletonElement";

const SkeletonBox = ({ type }) => {
  if (type === "post") {
    return (
      <div className="skeleton post">
        <SkeletonList type="text" num={6} />
      </div>
    );
  } else (
    <SkeletonElement type="box" />
  )
}

export default SkeletonBox;