import ReactModal from "react-modal";

ReactModal.setAppElement("#__next");

const PostModal = props => {
  const { sentTo_1, sentTo_2, message } = props.post;
  const sentTo = sentTo_1 + sentTo_2;

  return (
    <div>
      <ReactModal
        isOpen
        style={modalStyle}
        closeTimeoutMS={300}
        onRequestClose={props.hideModal}
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
    backgroundColor : "rgba(50,50,50,0.8)",
  },

  content : {
    top           : '20%',
    left          : '6%',
    padding       : '0',
    border        : '0',
    width         : '88%',
    height        : '62%',
    borderRadius  : '10px',
  }
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
  flex       : '1',
  color      : '#7C7C7C',
  fontSize   : '26px',
  fontWeight : 'bold'
}

export default PostModal;