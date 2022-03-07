import App from "../../pages/_app";
import Head from 'next/head';
import { useRouter } from 'next/router';
import { closeModal } from "../modals/functions";


const NormalHeader = props => {
  const router = useRouter();

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
        <h1>
          <a
            onClick={titleClicked}
            className="shelby"
          >{App.title}</a>
        </h1>
      </header>
    </>
  );
}

export default NormalHeader;