import IndexLayout from '../components/layouts/IndexLayout';
import NormalLayout from '../components/layouts/NormalLayout';
import ErrorLayout from '../components/layouts/ErrorLayout';
import '../styles/globals.css';
import "../styles/modal/Modal.css";
import "../styles/skeleton/skeleton.css";

import { ModalProvider } from "react-modal-hook"

const layouts = {
  "index": IndexLayout,
  "normal": NormalLayout,
  "error": ErrorLayout,
}

function App({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || layouts["normal"];

  return (
    <ModalProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ModalProvider>
  )
}

App.title = "Alpaca";

export default App
