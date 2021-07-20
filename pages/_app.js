import { wrapper } from "../src/store";
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Head>
          <title>Skillhub - Сравниваем курсы в сфере IT</title>
        </Head>
        <Component {...pageProps} />
      </>
  )
}

export default wrapper.withRedux(MyApp);
