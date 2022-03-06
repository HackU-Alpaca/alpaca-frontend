import styles from "../../styles/index/StoryList.module.css";
import Modal from "../modals/DigestModal";
import { useModal } from "react-modal-hook";

const StoryList = props => {
  // const posts = props.posts;
  const story_list = [
    {id: 1, sentTo_1: "医療従事者の", sentTo_2: "皆さん", target: "doctor"},
    {id: 2, sentTo_1: "コロナに", sentTo_2: "感染した皆さん", target: "pacient"},
    {id: 3, sentTo_1: "飲食店で", sentTo_2: "働く皆さん", target: "chef"},
  ]

  const [showDoctorModal, hideDoctorModal] = useModal( () => (
    <Modal hideModal={hideDoctorModal} target={"医療従事者の皆さん"} />
  ))
  const [showPacientModal, hidePacientModal] = useModal( () => (
    <Modal hideModal={hidePacientModal} target={"コロナに感染した皆さん"} />
  ))
  const [showChefModal, hideChefModal] = useModal( () => (
    <Modal hideModal={hideChefModal} target={"飲食店で働く皆さん"} />
  ))
  const showModal = [
    showDoctorModal, showPacientModal, showChefModal
  ]

  const showDigest = event => {
    event.preventDefault();
    const cls = event.currentTarget.childNodes[0].className;
    const chosen_story = story_list.find( story => story.target === cls
    );
    showModal[chosen_story.id-1]();
  }

  return (
    <div className={styles.container}>
      <div>
        <h2 className="shelby">Digest</h2>
        <ul>
          {story_list.map( story => {
            return (
                <a key={story.id} onClick={showDigest}>
                  <li className={story.target}>
                    <p>{story.sentTo_1}</p>
                    <p>{story.sentTo_2}</p>
                  </li>
                </a>
            )
          })}
        </ul>
      </div>
    </div>

  )

}


export default StoryList;