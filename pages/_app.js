// import "../styles/globals.css";
// import Layout from "./components/layout";
// import Head from 'next/head'

// function MyApp({ Component, pageProps }) {
//   console.log(pageProps);
//   return (
//     <Layout>
//     <Head>
//       <title>Title component</title> 
//     </Head>     
//       <Component {...pageProps} />
//     </Layout>
//   );
// }

// export default MyApp;


import "../styles/globals.css";
import Layout from "./components/layout";

import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import { Provider } from 'react-redux'
import store from '../store/config.store'
import theme from '../conf/them';
import createEmotionCache from '../createEmotionCache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <Provider store={store}>
      <Layout>
        <CacheProvider value={emotionCache}>
          <Head>
            <title>My homework</title>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
          </Head>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </CacheProvider>
      </Layout>
    </Provider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};