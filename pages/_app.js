import Head from 'next/head';
import UserProvider from '../context/userContext'

// Custom App to wrap it with context provider
export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Head>
        <script data-consolejs-channel="35ed2630-b859-b295-c7e6-f4c7a362d668" src="https://remotejs.com/agent/agent.js"></script>
      </Head>
      <Component {...pageProps} />
    </UserProvider>
  )
}
