import ReactModal from "react-modal";
import PostList from "../index/PostList";
import Footer from "../layouts/Footer";
import NormalHeader from "../layouts/NormalHeader";

import styles from "../../styles/modal/ReadMoreModal.module.css"

ReactModal.setAppElement("#__next");

const ReadMoreModal = props => {
  const { posts, sentToList } = props;

  return (
    <div>
      <ReactModal isOpen
        style={modalStyle}
        closeTimeoutMS={300}
      >
        <div className={styles.contents}>
          <NormalHeader hideModal={props.hideModal} />
          <PostList posts={posts} sentToList={sentToList} display={"all"}/>
          <Footer />
        </div>

      </ReactModal>
    </div>
  );
}

const modalStyle = {
  overlay: {
    position        : "fixed",
    top             : 0,
    left            : 0,
    backgroundColor : "rgba(50,50,50,0.8)",
    transition      : 'margin-top 300ms ease-in-out'
  },

  content : {
    top        : '0',
    left       : '0',
    padding    : '0',
    border    : '0',
    width      : '100%',
    height     : '100%',
  }
}

export default ReadMoreModal;