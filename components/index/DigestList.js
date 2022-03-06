import styles from "../../styles/index/StoryList.module.css";
import DigestModal from "../modals/DigestModal";
import { useModal } from "react-modal-hook";
import { useState } from "react";

const DigestList = props => {
  // const posts = props.posts;
  const digest_list = [
    {id: 1, sentTo_1: "医療従事者の", sentTo_2: "皆さん", target: "doctor"},
    {id: 2, sentTo_1: "コロナに", sentTo_2: "感染した皆さん", target: "pacient"},
    {id: 3, sentTo_1: "飲食店で", sentTo_2: "働く皆さん", target: "chef"},
  ]

  const [targetDigest, setTargetDigest] = useState("")

  const [showModal, hideModal] = useModal(() => (
    <DigestModal hideModal={hideModal} digest={targetDigest}/>
  ), [targetDigest])

  const showDigest = event => {
    event.preventDefault();
    const cls = event.currentTarget.childNodes[0].className;
    const target_digest = digest_list.find( digest => digest.target === cls );
    setTargetDigest(target_digest)
    showModal();
  }

  return (
    <div className={styles.container}>
      <div>
        <h2 className="shelby">Digest</h2>
        <ul>
          {digest_list.map( digest => {
            return (
                <a key={digest.id} onClick={showDigest}>
                  <li className={digest.target}>
                    <p>{digest.sentTo_1}</p>
                    <p>{digest.sentTo_2}</p>
                  </li>
                </a>
            )
          })}
        </ul>
      </div>
    </div>

  )

}


export default DigestList;