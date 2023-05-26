import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

// export const getTrandingMoviesapi = (page) => {
//   return axios
//     .get('/trending/movie/day', {
//       params: {
//         page,
//         api_key: API_KEY,
//       },
//     })
//     .then(res => res.data);
// };