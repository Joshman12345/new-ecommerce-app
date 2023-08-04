import axios from "axios";

const API_URL = 'https://fakestoreapi.com'


// API CALLS: GET, PUT, PATCH, POST, DELETE
export const get = async (url) => {
    let result;
 await axios
    .get(`${API_URL}/${url}`)
    .then((response) => {
        result = response;
      // handle success
    //   console.log(response);
    })
    .catch((error) => {
        result = error;
      // handle error
    //   console.log(error);
    })
    .finally(() => {
      // always executed
    });
    return result;
};

