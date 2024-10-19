import axios from 'axios';

export default async function handler(req, res) {
  const { code } = req.query;

  console.log("Callback received");
  

  //git remote add origin https://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@github.com/kapilgahlot1998/instamate.git

  if (!code) {
    return res.status(400).json({ error: 'Authorization code is missing' });
  }

  try {
    // Exchange authorization code for an access token
    const tokenResponse = await axios.post('https://api.instagram.com/oauth/access_token', null, {
      params: {
        client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        grant_type: 'authorization_code',
        redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI,
        code: code,
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const accessToken = tokenResponse.data.access_token;

    // Fetch Instagram Basic Info using the access token
    const userInfoResponse = await axios.get('https://graph.instagram.com/me', {
      params: {
        fields: 'id,username,account_type,media_count',
        access_token: accessToken,
      },
    });

    // Send user info as response
    res.status(200).json({ userInfo: userInfoResponse.data });
  } catch (error) {
    console.error('Error fetching access token or user info:', error);
    res.status(500).json({ error: 'Error fetching user info' });
  }
}
