import Stories from "react-insta-stories"
import ReactModal from "react-modal";

ReactModal.setAppElement("#__next");

const Modal = props => {
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

  // TODO delete 機能確認
  const messages = [
    "いつも私たしのために最前線で働いてくださり、ありがとうございます！",
    "アルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたい"
  ]

  const stories = Array(5).fill(0).map( () => {
    const message = messages[Math.floor(Math.random()*messages.length)];
    return createStory(message);
  })

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
          onAllStoriesEnd={props.hideModal}
        />

        <span>
          <img
            src="/icons/cancel_icon.svg"
            alt="戻る"
            className="cancel-icon"
            onClick={props.hideModal}
          />
          <h3 className="flower-butterfly strong-gray">
            {props.target}
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
  alignItems      : 'center'
}

const message_styles = {
  margin     : '0 20px',
  fontSize   : '24px',
  flex       : "1"

}

export default Modal;