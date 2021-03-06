import styles from "../../styles/index/StoryList.module.css";
import { DigestModal } from "../modals/";
import { useModal } from "react-modal-hook";
import { useState } from "react";

const DigestList = props => {
  let digests = props.digests;
  digests.map( digest => {
    Object.assign(digest, relations[digest.sentTo])
  });

  const [chosenDigest, setChosenDigest] = useState("")

  const [showModal, hideModal] = useModal(() => (
    <DigestModal hideModal={hideModal} digest={chosenDigest}/>
  ), [chosenDigest])

  const showDigest = event => {
    event.preventDefault();
    const cls = event.currentTarget.childNodes[0].className;
    const digest = digests.find( digest => digest.name === cls );
    setChosenDigest(digest)
    showModal();
  }
  return (
    <div className={styles.container}>
      <div>
        <h2 className="shelby">Digest</h2>
        <div>
          <ul>
            {digests.map( digest => {
                return (
                  <a
                  key={digest.name}
                  onClick={showDigest}
                  className={`${digest.name}-bg`}
                  >
                    <li className={`${digest.name}`}>
                      <p>{digest.sentTo_1}<br />
                          {digest.sentTo_2}</p>
                    </li>
                  </a>
                )
              })}
          </ul>
        </div>
      </div>
    </div>
  )
}

const relations = {
  "医療従事者": {
    name: "doctor",
    sentTo_1: "医療従事者の",
    sentTo_2: "皆さん",
    url : "/images/doctor.jpg"
  },
  "コロナ感染者": {
    name: "patient",
    sentTo_1: "コロナに",
    sentTo_2: "感染した皆さん",
    url : "/images/patient.jpg"
  },
  "飲食店従業員": {
    name: "chef",
    sentTo_1: "飲食店で",
    sentTo_2: "働く皆さん",
    url : "/images/chef.jpg"
  },
  "主婦": {
    name: "housewife",
    sentTo_1: "主婦の方",
    sentTo_2: "",
    url : "/images/housewife.jpg"
  },
  "サラリーマン": {
    name: "office_worker",
    sentTo_1: "サラリーマン",
    sentTo_2: "の方",
    url : "/images/office_worker.jpg"
  },
  "受験生": {
    name: "candidate",
    sentTo_1: "受験生",
    sentTo_2: "の方",
    url : "/images/candidate.jpg"
  },
  "学生": {
    name: "student",
    sentTo_1: "学生の方",
    sentTo_2: "",
    url : "/images/student.jpg"
  },
  // "アルパカ": {
  //   name: "alpaca",
  //   sentTo_1: "アルパカの",
  //   sentTo_2: "皆さん",
  //   url : "/images/alpaca.jpg"
  // },
}

export default DigestList;