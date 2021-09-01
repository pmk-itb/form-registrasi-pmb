import ky from 'ky';

const client = ky.extend({
  prefixUrl: process.env.API_BASE_URL,
  headers: { Authorization: `Bearer ${process.env.API_KEY as string}` },
});

export default client;
