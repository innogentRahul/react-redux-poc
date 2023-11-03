import axios from "axios";

const User = {
  getUsers: () => {
    const options = {
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/users',
      headers: {
        'X-RapidAPI-Key': '21c7e66e50msh54fef3c94c1ca61p1eae09jsnaeb43e157f15',
        'X-RapidAPI-Host': 'tiktok-tops.p.rapidapi.com'
      }
    };
    return axios.request(options)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  },
};


export default { User };
