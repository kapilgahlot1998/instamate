import axios from 'axios';

export default async function handler(req, res) {
  const { code } = req.query;

  console.log("Callback received");

  if (!code) {
    return res.status(400).json({ error: 'Authorization code is missing' });
  }

  try {

    // Exchange authorization code for an access token
    // const tokenResponse = await axios.post('https://api.instagram.com/oauth/access_token', null, {
    //   params: {
    //     app_id: '6833791376744849',
    //     app_secret: 'f567cfc2bad52e26afab25e403597149',
    //     grant_type: 'authorization_code',
    //     redirect_uri: 'https://instamate-v1-ipsmuv14w-kapilgahlot1998s-projects.vercel.app/api/auth/callback',
    //     code: code,
    //   },
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    // });

//https://api.instagram.com/oauth/access_token?
    
    //console.log(tokenResponse);
    
    const accessToken = 'IGQWRPT0R2UjhScEtLSVQwR25VdDduUjM4QTR4MXFNMHFudzZAqY3dmMUthcE5nRUczVWkybDdWMEhycWRWUzVLLVF2LWtTZA1l2WEtNZAUc4TkYwZAHVrY0NFMFZA6WjBwU3p4dWdXT09UZAVgwTGRQVzNGRkpkNW92TWMZD';
    // Fetch Instagram Basic Info using the access token
    const userInfoResponse = await axios.get('https://graph.instagram.com/me', {
      params: {
        fields: 'id,username,account_type,media_count',
        access_token: accessToken,
      },
    });



    // Send user info as response
    res.status(200).json({ userInfo: userInfoResponse.data });
    console.log(JSON.stringify(userInfoResponse.data));
    
  } catch (error) {
    console.error('Error fetching access token or user info:', error);
    res.status(500).json({ error: 'Error fetching user info' });
  }
}
