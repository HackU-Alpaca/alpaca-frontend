import { useState } from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#__next");

const PostModal = props => {
  const { posts, idx } = props;
  const [shownIdx, setShownIdx] = useState(idx);
  const [random, setRandom] = useState(false);
  const { sentTo_1, sentTo_2, message } = posts[shownIdx];
  const sentTo = sentTo_1 + sentTo_2;
  console.log(shownIdx, posts);

  const shiftPost = which => {
    if (random) {
      setShownIdx(Math.floor(Math.random()*posts.length));
    } else {
      //* 端から端もいける
      setShownIdx(prevIdx => (posts.length+prevIdx+which)%posts.length)
    }
  }

  return (
    <div>
      <ReactModal
        isOpen
        style={modalStyle}
        closeTimeoutMS={300}
        onRequestClose={props.hideModal}
      >
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

        <div style={container_styles}>
          <p style={message_styles}>{message}</p>
        </div>

      </ReactModal>

      {/* post modal表示のときのみ表示 */}
      <img
        src="icons/shift-left.svg"
        alt="前"
        style={left_btn}
        onClick={() => shiftPost(-1)}
      />
      <img
        src={`icons/${(random) ? "random-active" : "random"}.svg`}
        alt="ランダム"
        style={random_btn}
        onClick={() => setRandom(prevState => !prevState)}
      />
      <img
        src="icons/shift-right.svg"
        alt="次"
        style={right_btn}
        onClick={() => shiftPost(1)}
      />

    </div>

  );
}

const modalStyle = {
  overlay: {
    position        : "fixed",
    top             : "0",
    left            : "0",
    width           : '101%',
    height          : '100%',
    backgroundColor : "rgba(50,50,50,0.8)",
  },

  content : {
    top           : '10%',
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

const btn_styles = {
  display         : "block",
  position        : "fixed",
  top             : '80%',
  width           : "60px",
  height          : "60px",
  zIndex          : "15000"
}

const left_btn = {
  ...btn_styles, ...{
    left : "10%"
  }
}
const right_btn = {
  ...btn_styles, ...{
    right : "10%"
  }
}
const random_btn = {
  ...btn_styles, ...{
    left : "calc(50% - 30px)"
  }
}

export default PostModal;