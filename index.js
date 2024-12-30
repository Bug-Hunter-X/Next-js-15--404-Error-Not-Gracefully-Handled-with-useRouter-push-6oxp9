```javascript
// pages/_app.js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const handleRouteChange = (url) => {
      // Check if the route exists in your app
      // Replace this logic with your actual route checking strategy
      if (!['/', '/about'].includes(url)) {
        setNotFound(true);
      }
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  if (notFound) {
    return (
      <div>
        <h1>404 - Page Not Found</h1>
        <Link href="/">
          <a>Go Home</a>
        </Link>
      </div>
    );
  }
  return <Component {...pageProps} />;
}

export default MyApp;
```