import '../styles/globals.css'
import { useEffect } from 'react';
import Layout from '../component/Layout';
import { StoreProvider } from '../utils/store';
import { SnackbarProvider } from 'notistack';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    // <Layout><Component {...pageProps} /></Layout>
    <SnackbarProvider anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
      <StoreProvider><
        Component {...pageProps} />
      </StoreProvider>

    </SnackbarProvider>

  )

}

export default MyApp
