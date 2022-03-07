import App from "../../pages/_app";
import Head from 'next/head';
import { useRouter } from 'next/router'

const NormalHeader = props => {
  const router = useRouter();

  const hideModal = event => {
    event.preventDefault();

    switch ( props.hideModal ) {
      case undefined:
        router.push("/")
        break;

      default:
        const modalOverlay_cls = document.getElementsByClassName("ReactModal__Overlay--after-open")[0].classList;
        modalOverlay_cls.remove("ReactModal__Overlay--after-open");
        modalOverlay_cls.add("ReactModal__Overlay--before-close");
        setTimeout( props.hideModal, 300 );
        break;
    }
  }

  const titleClicked = event => { hideModal(event) };

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