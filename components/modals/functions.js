const closeModal = hideModal => {
  const modalOverlay_cls = document.getElementsByClassName("ReactModal__Overlay--after-open")[0].classList;
  modalOverlay_cls.remove("ReactModal__Overlay--after-open");
  modalOverlay_cls.add("ReactModal__Overlay--before-close");
  setTimeout( hideModal, 300 );
}

export { closeModal };