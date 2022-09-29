import axios from "axios";

const BASE_URL = "https://pixabay.com/api/"
const KEY = "29263852-decd32d0e53d5fbdcdddbb078"
const perPage = 12;
const imageType = "photo";
const orientation = "horizontal";

export const fetchImages = async (inputValue, page) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?key=${KEY}&q=${inputValue}&image_type=${imageType}&orientation=${orientation}&safesearch=true&page=${page}&per_page=${perPage}`
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

