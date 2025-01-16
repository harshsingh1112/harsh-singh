import { getTopTracks } from 'app/components/spotify/spotify';
import Track from './track';
import { Song, TrackInfo } from './types';

async function fetchTopTracks(): Promise<Song[] | null> {
  try {
    const response = await getTopTracks();

    if (!response.ok) {
      throw new Error('Failed to fetch top tracks');
    }

    const { items } = await response.json();

    const tracks = items.slice(0, 5).map((track: TrackInfo) => ({
      artist: track.artists.map((_artist) => _artist.name).join(', '),
      songUrl: track.external_urls.spotify,
      title: track.name,
    }));

    return tracks;
  } catch (e) {
    if (e instanceof Error) {
      console.error('Error fetching top tracks:', e.message);
    }
    return null; // Ensure the function returns null in case of an error
  }
}

export default async function TopTracks() {
  const topTracks = await fetchTopTracks();

  if (!topTracks) {
    return (
      <div className="py-7 text-center text-gray-500 dark:text-gray-300">
        Unable to fetch top tracks
      </div>
    );
  }

  return (
    <section className="py-7">
      <p className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
        Spotify Top Songs
      </p>
      {topTracks.map((track, index) => (
        <Track ranking={index + 1} key={track.songUrl} track={track} />
      ))}
    </section>
  );
}
