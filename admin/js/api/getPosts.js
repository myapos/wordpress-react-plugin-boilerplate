import * as constants from '../constants/constants';

export default async () => {
  const url = `${document.location.protocol}//${constants.SERVER_BASE_URL}/posts`;
  try {
    const res = await fetch(url, {
      method: 'GET',
    });

    return res.json();
  } catch (e) {
    console.error(e);
  }
};
