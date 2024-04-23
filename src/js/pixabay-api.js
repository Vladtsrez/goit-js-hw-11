export function searchImages(q) {
  const API_KEY = '43518191-3e4362bb1fc47484118bdfa22';
  const BASE_URL = `https://pixabay.com/api/`;

  const params = new URLSearchParams({
    key: API_KEY,
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${params}`).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }

    return res.json();
  });
}
