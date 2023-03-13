import axios from "axios";

const BASE_URL = "http://localhost:5000/";

function login(path_url, param) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${BASE_URL}login`, param)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error.response);
      });
  });
}

function register1(path_url, param) {
    console.log(param);
    return new Promise((resolve, reject) => {
      axios
        .post(`${BASE_URL}create/users`, param)
        .then(function (response) {
          console.log("response", response);
          resolve(response);
        })
        .catch(function (error) {
            console.log(error);
          reject(error.response);
        });
    });
  }

export { login, register1 };
