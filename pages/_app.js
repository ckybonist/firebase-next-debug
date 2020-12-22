import { useEffect } from 'react';
import Head from 'next/head'
import UserProvider from '../context/userContext'

// Custom App to wrap it with context provider
export default function App({ Component, pageProps }) {
  useEffect(() => {
    import('vconsole').then(({ default: VConsole }) => {
      const vConsole = new VConsole();
      console.log('Hello v');
    })
  }, []);

  return (
    <UserProvider>
      <Head>
      </Head>
      <Component {...pageProps} />
    </UserProvider>
  )
}
