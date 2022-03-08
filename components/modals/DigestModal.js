import Stories from "react-insta-stories"
import ReactModal from "react-modal";
import { closeModal } from "./functions";

ReactModal.setAppElement("#__next");

const DigestModal = props => {
  const { sentTo_1, sentTo_2, messages } = props.digest;
  const sentTo = sentTo_1 + sentTo_2;

  const window_width = window.innerWidth;
  const window_height = window.innerHeight;

  const createStory = (message) => {
    const story = {
      content: (props) => (
        <div style={container_styles}>
          <p style={message_styles}>{message}</p>
        </div>
      ),
    }
    return story;
  }
  const stories = messages.map( message => createStory(message) );

  return (
    <div>
      <ReactModal isOpen
        style={modalStyle}
        closeTimeoutMS={300}
      >

        <Stories
          stories={stories}
          defaultInterval={3000}
          width={window_width}
          height={window_height}
          storyStyles={story_styles}
          onAllStoriesEnd={() => closeModal(props.hideModal)}
        />

        <span>
          <img
            src="/icons/cancel_icon.svg"
            alt="戻る"
            className="cancel-icon"
            onClick={() => closeModal(props.hideModal)}
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

export default DigestModal;