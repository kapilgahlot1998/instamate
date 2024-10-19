import axios from 'axios';

export default async function handler(req, res) {
  const { code } = req.query;

  console.log("Callback received");

  if (!code) {
    return res.status(400).json({ error: 'Authorization code is missing' });
  }

  try {
    
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
    
    console.error('Kapil is the error :', error);
    res.status(500).json({ error: 'Error fetching user info' });
  }
}
