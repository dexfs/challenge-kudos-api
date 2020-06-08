import FormData from 'form-data';
import axios from 'axios';
import fetch from 'node-fetch';
import * as UsersService from './users-service';

export const authenticate = async (req, res) => {
  try {
    const { client_id, client_secret, redirect_uri, code } = req.body;

    const bodyFormData = new FormData();
    bodyFormData.append('client_id', client_id);
    bodyFormData.append('client_secret', client_secret);
    bodyFormData.append('redirect_uri', redirect_uri);
    bodyFormData.append('code', code);
    const { githubUserInfo, accessToken } = await getAccessTokenAndUserInfo({
      client_id,
      client_secret,
      redirect_uri,
      code,
    });

    const user = await UsersService.findOrCreate(githubUserInfo);
    console.log({ user });

    return user;
  } catch (error) {
    console.error('authenticate', error);
    throw error;
  }
};

const getAccessTokenAndUserInfo = async (data) => {
  const responseAccessToken = await fetch(
    `https://github.com/login/oauth/access_token`,
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }
  ).then((response) => response.json());

  const { access_token } = responseAccessToken;

  const githubUserInfo = await fetch(`https://api.github.com/user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `token ${access_token}`,
    },
  }).then((response) => response.json());

  return { accessToken: access_token, githubUserInfo };
};
