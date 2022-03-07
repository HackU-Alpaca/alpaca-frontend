import ReactModal from "react-modal";
import PostList from "../index/PostList";
import Footer from "../layouts/Footer";
import NormalHeader from "../layouts/NormalHeader";

ReactModal.setAppElement("#__next");

const ReadMoreModal = props => {
  const posts = props.posts;

  return (
    <div>
      <ReactModal isOpen
        style={modalStyle}
        closeTimeoutMS={300}
      >
        <NormalHeader hideModal={props.hideModal} />
        <PostList posts={posts} display={"all"}/>
        <Footer />

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

const story_styles = {
  width           : 'auto',
  maxWidth        : '100%',
  maxHeight       : '100%',
  margin          : '0'
}

const container_styles = {
  backgroundColor : '#E1FFFA',
  width           : '100%',
  height          : '100%',
  display         : 'flex',
  alignItems      : 'center',
  textAlign       : 'center',
  background      : '#E1FFE8',
  background      : '-webkit-linear-gradient(to bottom, #E1FFFE, #E1FFF2, #E1FFE8)',
  background      : 'linear-gradient(to bottom, #E1FFFE, #E1FFF2, #E1FFE8)'
}

const message_styles = {
  margin     : '0 20px',
  fontSize   : '24px',
  flex       : "1",
  color      : '#7C7C7C',
  fontSize   : '26px',
  fontWeight : 'bold'

}

export default ReadMoreModal;