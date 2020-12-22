import { useEffect } from 'react';
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
      <Component {...pageProps} />
      <iframe
        src="https://naozhong.tw/embed/jishiqi/#date=2020-12-31T15:00:00&title=%E6%97%A9%E9%B3%A5%E5%84%AA%E6%83%A0%F0%9F%94%A5%E6%8F%AA%E5%9C%98%E7%8F%BE%E7%9C%81+%24+12%2C000%EF%BC%81&showmessage=0&theme=0&color=2&ampm=1&sound=custom"
        width="360"
        height="180"
        allowFullScreen
      >
      </iframe>
    </UserProvider>
  )
}
