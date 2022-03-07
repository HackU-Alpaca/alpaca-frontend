import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";

// スタイリング
// const customStyles = {
//   overlay: {
//     position: "fixed",
//     top: 0,
//     left: 0,
//     backgroundColor: "rgba(0,0,0,0.3)"
//   },

//   content : {
//     top                   : '50%',
//     left                  : '50%',
//     right                 : 'auto',
//     bottom                : 'auto',
//     marginRight           : '-50%',
//     width                 : '100%',
//     height                : '100%',
//     transform             : 'translate(-50%, -50%)'
//   }
// };

const Digest = () => {
  const [showModal, hideModal] = useModal( () => {
    <Modal hideModal={hideModal}>
      <h1>Childrenです</h1>
    </Modal>
  })

  return <button onClick={showModal}>Show modal</button>
}

export default Digest;