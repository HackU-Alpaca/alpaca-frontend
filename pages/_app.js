import IndexLayout from '../components/layouts/IndexLayout';
import NormalLayout from '../components/layouts/NormalLayout';
import '../styles/globals.css'
import "../styles/modal/Modal.css"

import { ModalProvider } from "react-modal-hook"

const layouts = {
  "index": IndexLayout,
  "normal": NormalLayout
}

function App({ Component, pageProps }) {
  console.log(Component.layout);
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
