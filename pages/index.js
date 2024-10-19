import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState('');

  // Handle login by redirecting to the Instagram OAuth page
  const handleLogin = () => {
    window.location.href = '/api/auth/login';
  };

  // If there is a query string (callback from Instagram), fetch user info
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      // Exchange the code for user info
      axios
        .get(`/api/auth/callback?code=${code}`)
        .then((response) => {
          setUserInfo(response.data.userInfo);
        })
        .catch((error) => {
          setError('Error fetching user info 1111111');
        });
    }
  }, []);

  return (
    <div>
      <h1>Instagram OAuth with Next.js</h1>
      {!userInfo && (
        <button onClick={handleLogin} style={{ padding: '10px', fontSize: '16px' }}>
          Login with Instagram
        </button>
      )}

      {userInfo && (
        <div>
          <h2>User Info:</h2>
          <p>ID: {userInfo.id}</p>
          <p>Username: {userInfo.username}</p>
          <p>Account Type: {userInfo.account_type}</p>
          <p>Media Count: {userInfo.media_count}</p>
        </div>
      )}

      {error && <p>{error}</p>}
    </div>
  );
}
