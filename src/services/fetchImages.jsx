import axios from "axios";

const BASE_URL = "https://pixabay.com/api"
const KEY = "29263852-decd32d0e53d5fbdcdddbb078"
const perPage = 12;

// const instance = axios.create({
//     url: BASE_URL,
//     params: {
//         key: KEY,
//         image_type: "photo",
//         orientation: "horizontal",
//         per_page: perPage,
//     }
// });

// export const fetchImages = async (q, page = 1) => {
//     const { data } = await instance.get("/", {
//         params: {
//             page,
//             q,
//         }
//     });
//     return data;
// }


export const fetchImages = async (inputName, page) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?key=${KEY}&q=${inputName}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
    );
    //console.log(response.data.hits);
    return response.data.hits;
  } catch (error) {
    console.log(error);
  }
};

