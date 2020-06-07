import FormData from 'form-data';
import axios from 'axios';
import fetch from 'node-fetch';

export const authenticate = (req, res) => {
  console.log('GITHUB', req.body);
  const { client_id, client_secret, redirect_uri, code } = req.body;

  const bodyFormData = new FormData();
  bodyFormData.append('client_id', client_id);
  bodyFormData.append('client_secret', client_secret);
  bodyFormData.append('redirect_uri', redirect_uri);
  bodyFormData.append('code', code);
  // axios({
  //   debug: true,
  //   method: 'post',
  //   url: 'https://github.com/login/oauth/access_token',
  //   data: bodyFormData,
  //   headers: { 'Content-Type': 'application/json' },
  // })
  fetch(`https://github.com/login/oauth/access_token`, {
    method: 'POST',
    body: bodyFormData,
  })
    .then((response) => response.text())
    .then((paramsString) => {
      let params = new URLSearchParams(paramsString);
      const access_token = params.get('access_token');
      const scope = params.get('scope');
      const token_type = params.get('token_type');

      // Request to return data of a user that has been authenticated
      return axios.get(
        `https://api.github.com/user?access_token=${access_token}&scope=${scope}&token_type=${token_type}`
      );
    })
    // .then((response) => response.json())
    .then((response) => {
      console.log({ response });
      return res.status(200).json(response.data);
    })
    .catch((error) => {
      console.log('github', { error });
      return res.status(400).json(error);
    });
};
