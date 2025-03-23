import.meta.env;
import axios from 'axios';


const API_KEY = import.meta.env.VITE_API_KEY;console.log(API_KEY);
const BASE_URL = 'https://pixabay.com/api/';
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal';
const SAFESEARCH = true;

export async function fetchImages(query) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
    query
  )}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFESEARCH}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch images');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return { hits: [] };
  }
}

export async function fetchImagesAxios(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: IMAGE_TYPE,
        orientation: ORIENTATION,
        safesearch: SAFESEARCH,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    return { hits: [] };
  }
}
