import App from "../../pages/_app";
import ReactModal from "react-modal";
import Footer from "../layouts/Footer";
import Link from "next/link";
import { useRouter } from 'next/router';
import { closeModal } from "./functions";
import Image from 'next/image';

import styles from "../../styles/modal/AddDescModal.module.css";

ReactModal.setAppElement("#__next");

const AddDescModal = props => {
  const router = useRouter();

  const line_href = "https://line.me/R/ti/p/%40044efyoc"
  const qrcode_width = 145;

  const titleClicked = event => {
    event.preventDefault();
    switch ( props.hideModal ) {
      case undefined:
        router.push("/")
        break;
      default:
        closeModal(props.hideModal)
        break;
    }
  };

  return (
    <div>
      <ReactModal isOpen
        style={modalStyle}
        closeTimeoutMS={300}
      >
        <div className={styles.container}>
          <div>
            <header>
              <h1>
                <a
                  onClick={titleClicked}
                  className="shelby"
                >{App.title}</a>
              </h1>
            </header>

            <div>
              <p className="flower-butterfly">
                あなたの気持ちをお届けします。<br />
                メッセージは、LINEより承っております。
              </p>
              <div>
                <a href={line_href} target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/images/QR-code.png"
                    alt={"LINE QRコード"}
                    width={qrcode_width}
                    height={qrcode_width}
                  />
                </a>
                <p>
                  <span>QR</span>
                  <span className="flower-butterfly">コードをタッチ</span>
                </p>
              </div>
            </div>

            <div className={styles.how_to}>
              <div>
                <h2 className="shelby">How to send messages?</h2>
              </div>
              <div>
                <p>Tutorial here!</p>
              </div>
            </div>
          </div>

        </div>
        <Footer />

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
    border     : '0',
    width      : '100%',
    height     : '100%',
  }
}

export default AddDescModal;