import styles from "../../styles/modal/SortModal.module.css";
import ReactModal from "react-modal";
import { useState } from "react";

ReactModal.setAppElement("#__next");

const SortModal = props => {
  const { sortInfo, setSortInfo, sortModalStyle } = props;

  const sorting_method = [
    "人気順", "日付（新しい順）", "日付（古い順）"
  ]
  let method;
  if (sortInfo.order_by === "likes") {
    method = "人気順";
  } else {
    method = (sortInfo.ascending) ? "日付（古い順）" : "日付（新しい順）";
  }

  const closeModal = method => {
    let newSortInfo;
    if (sorting_method.indexOf(method) === 0) {
      newSortInfo = {order_by: "likes", ascending: false}
    } else {
      newSortInfo = (sorting_method.indexOf(method) === 1)
        ? {order_by: "createdAt", ascending: false}
        : {order_by: "createdAt", ascending: true};
    }
    setSortInfo(newSortInfo);
    props.hideModal();
  }

  modalStyle.content = {...originalContent, ...sortModalStyle};


  return (
    <div>
      <ReactModal
        isOpen
        style={modalStyle}
        closeTimeoutMS={300}
        onRequestClose={closeModal}
      >
        <div className={styles.container}>
          <ul>
            {sorting_method.map( (elem, i) => {
              const style = (elem === method)
                ? styles.chosen : "";
              return (
                <li
                  key={i}
                  className={`flower-butterfly ${style}`}
                  onClick={() => closeModal(elem)}
                >
                  <p>{elem}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </ReactModal>
    </div>
  );
}

const originalContent = {
  padding       : '0',
  border        : '0',
  borderRadius  : '10px',
}

const modalStyle = {
  overlay: {
    position        : "fixed",
    top             : 0,
    left            : 0,
    backgroundColor : "rgba(50,50,50,0)",
  },

  content: {}
}

const relations = {
  "人気順": {order_by: "likes", ascending: true},
  "日付（新しい順）": {order_by: "createdAt", ascending: true} ,
  "日付（古い順）": {order_by: "createdAt", ascending: false}
}

export default SortModal;