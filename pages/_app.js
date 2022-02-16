import '../styles/globals.css'
import { useEffect } from 'react';
import Layout from '../component/Layout';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <Layout><Component {...pageProps} />);</Layout>
    )
    
}

export default MyApp
