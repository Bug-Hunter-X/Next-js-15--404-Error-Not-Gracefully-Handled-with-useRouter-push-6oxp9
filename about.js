```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();
  const handleClick = () => {
    // Simulate a redirect to a non-existent page
    router.push('/nonexistent');
  };
  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go to Nonexistent Page</button>
    </div>
  );
}
```