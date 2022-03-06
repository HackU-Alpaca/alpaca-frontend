import Layout from '../components/layouts/Layout';
import '../styles/globals.css'
import "../styles/Modal.css"

import { ModalProvider } from "react-modal-hook"

function App({ Component, pageProps }) {
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
