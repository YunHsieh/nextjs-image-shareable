import '../static/scss/style.scss'

import Head from 'next/head';
import App, { Container } from 'next/app'
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import withReduxStore from '../store/with-redux-store'

class MyApp extends App {
  render () {
    const { Component, pageProps, reduxStore } = this.props;
    const test = {};
    return (
      <>
      <Container>
        <Head>
          <title>GrandureSeason</title>
        </Head>
        <ThemeProvider theme={test}>
          <Provider store={reduxStore}>
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
        </Container>
      </>
    )
  }
}

export default withReduxStore(MyApp)
