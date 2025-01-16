import { cache } from 'react';

const client_id = process.env.5e4fb1101d4e415d818af8e39a392066 || '';
const client_secret = process.env.2bb2c2ea1c624bb7b68703d720b4cca3 || '';
const refresh_token = process.env.AQDXAuoTJQzriwX_IrnRhsnK60GcvuqA9gt_bjpF6BJhCyOEGK1_e7WB4GGj6UGpfvtMZfkFdUozbBwLJujkDop7H46-qsUhOHUukLCs2Ve1DoeTE8z7Room-M1yGqZcmnU || '';

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=short_term`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token,
    }),
    next: {
      revalidate: 3600,
    },
  });

  return response.json();
};

export const getNowPlaying = cache(async () => {
  const { access_token } = await getAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    next: {
      revalidate: 30,
    },
  });
});

export const getTopTracks = cache(async () => {
  const { access_token } = await getAccessToken();

  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
});
