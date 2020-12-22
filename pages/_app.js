import { useEffect } from 'react';
import { useRouter } from 'next/router'

const getFrameSrc = (frame) => {
  if (frame === 'true') {
    return "https://naozhong.tw/embed/jishiqi/#date=2020-12-31T15:00:00&title=%E6%97%A9%E9%B3%A5%E5%84%AA%E6%83%A0%F0%9F%94%A5%E6%8F%AA%E5%9C%98%E7%8F%BE%E7%9C%81+%24+12%2C000%EF%BC%81&showmessage=0&theme=0&color=2&ampm=1&sound=custom";
  } else if (frame === 'icook') {
    return 'https://plugins.icook.tw/video-player?vid=1010';
  }
  return '';
}

// Custom App to wrap it with context provider
export default function App({ Component, pageProps }) {
  const router = useRouter()
  const { frame } = router.query;

  useEffect(() => {
    import('vconsole').then(({ default: VConsole }) => {
      const vConsole = new VConsole();
      console.log('Hello v');
    })
  }, []);


  return (
    <div>
      {frame && frame !== 'yt' ? (
        <iframe
          style={{
            position: 'absolute',
            top: 50,
            left: 80
          }}
          src={getFrameSrc(frame)}
          width="360"
          height="180"
          frameborder="0"
          allowFullScreen
        >
        </iframe>) : null}
      {frame === 'yt' && (
        <iframe width="560" height="315" src="https://www.youtube.com/embed/RUQl6YcMalg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      )}
      <Component {...pageProps} />
    </div>
  )
}
