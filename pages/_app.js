import Layout from '../components/layouts/Layout';
import '../styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

App.title = "App Title";

export default App