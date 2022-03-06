import Stories from "react-insta-stories"
import ReactModal from "react-modal";
import useSWR from "swr";
import { fetcher } from '../pixabay';

ReactModal.setAppElement("#__next");

const Modal = props => {
  const window_width = window.innerWidth;
  const window_height = window.innerHeight;

  const { data: image_posts, error: image_error } = useSWR("images", fetcher)
  const stories = image_posts.map( post => post.webformatURL )

  return (
    <div>
      <ReactModal isOpen
        style={modalStyle}
        closeTimeoutMS={300}
      >
        <span>
          <img
            src="/icons/cancel_icon.svg"
            alt="戻る"
            className="cancel-icon"
            onClick={props.hideModal}
          />
          <h3 className="flower-butterfly">{props.target}</h3>
        </span>

        <Stories
          stories={stories}
          defaultInterval={1500}
          width={window_width}
          height={window_height}
        />


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
    top        : '50%',
    left       : '50%',
    right      : 'auto',
    bottom     : 'auto',
    marginRight: '-50%',
    width      : '100%',
    height     : '100%',
    transform  : 'translate(-50%, -50%)'
  }
}

export default Modal;