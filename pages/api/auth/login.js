

export default function handler(req, res) {
  const instagramAuthUrl = `https://www.instagram.com/oauth/authorize?enable_fb_login=0&force_authentication=1&client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&redirect_uri=https://instamate-git-main-kapilgahlot1998s-projects.vercel.app/api/auth/callback&response_type=code&scope=instagram_business_basic%2Cinstagram_business_manage_messages%2Cinstagram_business_manage_comments%2Cinstagram_business_content_publish`;
  
  res.redirect(instagramAuthUrl);
}
