import Head from 'next/head';
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Apollo 21</title>
        <link rel="icon" type="image/png" href="/images/astronautfavicon.png"/>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
