
import { setCookie } from 'cookies-next';

export default function handler(req, res) {
    const CLIENT_KEY = process.env.CLIENT_KEY // this value can be found in app's developer portal
    const SERVER_ENDPOINT_REDIRECT = process.env.SERVER_ENDPOINT_REDIRECT
    const csrfState = Math.random().toString(36).substring(2);
    // res.cookie('csrfState', csrfState, { maxAge: 60000 });
    setCookie('csrfState', csrfState, { maxAge: 60000 });

    let url = 'https://www.tiktok.com/auth/authorize/';

    url += `?client_key=${CLIENT_KEY}`;
    url += '&scope=user.info.basic,video.list';
    url += '&response_type=code';
    url += `&redirect_uri=${SERVER_ENDPOINT_REDIRECT}`;
    url += '&state=' + csrfState;

    res.redirect(url);
    // res.status(200).json({ name: 'John Doe' })
  }
  