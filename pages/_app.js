import Layout from '../components/layouts/Layout';
import '../styles/globals.css'
<<<<<<< HEAD
import "../styles/Modal.css"

import { ModalProvider } from "react-modal-hook"

function App({ Component, pageProps }) {
  return (
    <ModalProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ModalProvider>
=======

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
>>>>>>> 5f18e993937504b1fc893f19a2c967b614ac1a5a
  )
}

App.title = "Alpaca";

export default App
