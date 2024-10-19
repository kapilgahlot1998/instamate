

export default function handler(req, res) {
  const instagramAuthUrl = `https://www.instagram.com/oauth/authorize?enable_fb_login=0&force_authentication=1&client_id=6833791376744849&redirect_uri=https://instamate-v1-6ghiy2okl-kapilgahlot1998s-projects.vercel.app/api/auth/callback&response_type=code&scope=instagram_business_basic%2Cinstagram_business_manage_messages%2Cinstagram_business_manage_comments%2Cinstagram_business_content_publish`;
  
  res.redirect(instagramAuthUrl);
}
