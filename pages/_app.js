import { RecoilRoot } from "recoil";
import "../styles/globals.css";
import Layout from '@/components/layout/layout';

export default function App({ Component, pageProps }) {
  return(
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  ); 
}
