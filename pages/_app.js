import Layout from '../components/Layout';
import '../styles/globals.css';
import { inter } from '@next/font/google';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});
function MyApp({ Component, pageProps }) {
  return (
    <Layout className={inter.className}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
