import styles from "../../styles/modal/TagModal.module.css";
import ReactModal from "react-modal";

ReactModal.setAppElement("#__next");

const TagModal = props => {
  const { tagInfo } = props;

  const toggleColor = event => {
    event.currentTarget.classList.toggle(styles.active);
    event.currentTarget.classList.toggle(styles.inactive);
  }

  const closeModal = () => {
    const tag_nodes = document.getElementsByClassName(styles.container)[0].getElementsByTagName("li");
    const tagInfo = {};
    Array.from(tag_nodes).map(tag => {
      tagInfo[tag.innerText] = (tag.className.indexOf("inactive") !== -1)
        ? "inactive" : "active";
    });
    props.updateTagInfo(tagInfo)
    props.hideModal();
  }

  return (
    <div>
      <ReactModal
        isOpen
        style={modalStyle}
        closeTimeoutMS={300}
        onRequestClose={closeModal}
      >
        <div style={container_styles}>
          <div className={styles.container}>
            <h3 className="flower-butterfly">
              タグを選んでください
            </h3>
            <div>
              <ul>
                {Object.keys(tagInfo).map( (tag, i) => {
                  const style = (tagInfo[tag] === "active")
                    ? styles.active : styles.inactive;
                  return (
                    <li
                      key={i}
                      className={`flower-butterfly ${style}`}
                      onClick={toggleColor}
                    >
                      <p>{tag}</p>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
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
    backgroundColor : "rgba(50,50,50,0.2)",
  },

  content : {
    top           : '40%',
    left          : '6%',
    padding       : '0',
    border        : '0',
    width         : '88%',
    height        : '20%',
    borderRadius  : '10px',
  }
}

const container_styles = {
  backgroundColor : '#E1FFFA',
  width           : '100%',
  height          : '100%',
  padding         : '20px 10px 15px',
  textAlign       : 'center',
  background      : '#E1FFE8',
  background      : '-webkit-linear-gradient(to bottom, #E1FFFE, #E1FFF2, #E1FFE8)',
  background      : 'linear-gradient(to bottom, #E1FFFE, #E1FFF2, #E1FFE8)'
}

export default TagModal;