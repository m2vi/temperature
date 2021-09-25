import { AppProps } from 'next/app';
import '../styles/globals.css';
import Head from 'next/head';
import Favicon from '../components/Favicon';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <Favicon />
      <title>Temperature</title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
