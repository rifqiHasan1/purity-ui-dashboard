import axios from "axios";

const BASE_URL = "http://localhost:5000/";
const token = localStorage.getItem("token")

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

  function getApi(path_url, token ) {
    return new Promise((resolve, reject) => {
      var config = {
        headers: {
          'Authorization' : `Bearer ` + token
        }
      }
      axios
        .get(BASE_URL + path_url, config)
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

  function hapus(path_url, token ) {
    return new Promise((resolve, reject) => {
      var config = {
        headers: {
          'Authorization' : `Bearer ` + token
        }
      }
      axios
        .delete(BASE_URL + path_url, config)
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

  function create(path_url, param) {
    
    return new Promise((resolve, reject) => {
      var config = {
        headers: {
          'Authorization' : `Bearer ` + token
        }
      }
      axios
        .post(BASE_URL + path_url, param, config)
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

  function edit(path_url, param, token) {
    console.log(param);
    return new Promise((resolve, reject) => {
      var config = {
        headers: {
          'Authorization' : `Bearer ` + token
        }
      }
      axios
        .put(BASE_URL + path_url, param, config)
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
  
  

export { login, register1, getApi, hapus, create, edit };
