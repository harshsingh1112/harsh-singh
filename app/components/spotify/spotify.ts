import { cache } from 'react';

const client_id = process.env.5e4fb1101d4e415d818af8e39a392066 || '';
const client_secret = process.env.2bb2c2ea1c624bb7b68703d720b4cca3 || '';
const refresh_token = process.env.AQDXAuoTJQzriwX_IrnRhsnK60GcvuqA9gt_bjpF6BJhCyOEGK1_e7WB4GGj6UGpfvtMZfkFdUozbBwLJujkDop7H46-qsUhOHUukLCs2Ve1DoeTE8z7Room-M1yGqZcmnU
 || '';

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=short_term`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  try {
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
    });

    if (!response.ok) {
      throw new Error('Failed to get access token');
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching access token:', error);
    throw error;
  }
};

export const getNowPlaying = cache(async () => {
  try {
    const { access_token } = await getAccessToken();
    const nowPlayingResponse = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      next: {
        revalidate: 30,
      },
    });

    if (!nowPlayingResponse.ok) {
      throw new Error('Failed to fetch now playing data');
    }

    return nowPlayingResponse.json();
  } catch (error) {
    console.error('Error fetching now playing:', error);
    throw error;
  }
});

export const getTopTracks = cache(async () => {
  try {
    const { access_token } = await getAccessToken();
    const topTracksResponse = await fetch(TOP_TRACKS_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (!topTracksResponse.ok) {
      throw new Error('Failed to fetch top tracks');
    }

    return topTracksResponse.json();
  } catch (error) {
    console.error('Error fetching top tracks:', error);
    throw error;
  }
});
