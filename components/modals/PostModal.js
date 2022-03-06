import Stories from "react-insta-stories"
import ReactModal from "react-modal";

ReactModal.setAppElement("#__next");

const PostModal = props => {
  const { sentTo_1, sentTo_2, message } = props.post;
  const sentTo = sentTo_1 + sentTo_2;

  return (
    <div>
      <ReactModal isOpen
        style={modalStyle}
        closeTimeoutMS={300}
      >
        <div style={container_styles}>
          <p style={message_styles}>{message}</p>
        </div>

        <span>
          <img
            src="/icons/cancel_icon.svg"
            alt="戻る"
            className="cancel-icon"
            onClick={props.hideModal}
          />
          <h3 className="flower-butterfly strong-gray">
            {sentTo}
          </h3>
        </span>

      </ReactModal>
    </div>
  );
}

const modalStyle = {
  overlay: {
    position        : "fixed",
    top             : 0,
    left            : 0,
    backgroundColor : "rgba(0,0,0,0.3)"
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
  textAlign       : 'center'
}

const message_styles = {
  margin     : '0 20px',
  fontSize   : '24px',
  flex       : "1"

}

export default PostModal;