import App from "../../pages/_app";
import Head from 'next/head';
import AddDescModal from "../modals/AddDescModal";
import { useModal } from "react-modal-hook";

const IndexHeader = () => {

  const [showAddDescModal, hideAddDescModal] = useModal(() => (
    <AddDescModal hideModal={hideAddDescModal} />
  ))

  return (
    <>
      <Head>
        <title>{App.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={App.title}
        />
      </Head>

      <header>
        <a>
          <img
            src="/icons/add_icon.svg"
            alt="投稿"
            className="add-icon"
            onClick={showAddDescModal}
          />
        </a>

        <div>
          <h1 className="shelby">{App.title}</h1>
          <p className="flower-butterfly">その思い、届けてみませんか？</p>
        </div>

      </header>
    </>
  );
}

export default IndexHeader;