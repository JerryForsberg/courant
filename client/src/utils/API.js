// This is where all of our API calls go, to connect back end to front end
import axios from "axios";
var apiBaseUrl = "http://localhost:3001"

export default {
  // USER ROUTES
  login: (username, password) => {
    return axios.post(apiBaseUrl + "/api/user/login", {
      username,
      password,
    });
  },

  logout: () => axios.get(apiBaseUrl + "/api/user/logout"),

  getUser: function () {
    return axios.get(apiBaseUrl + "/api/user/info");
  },

  signup: (userInfo) => {
    // console.log(userInfo);
    return axios.post(apiBaseUrl + "/api/user/signup", userInfo);
  },

  addStory: function (storyData) {
    return axios.post(apiBaseUrl + "/api/story", storyData);
  },

  deleteStory: function (id) {
    return axios.delete(apiBaseUrl + `/api/story/${id}`);
  },

  // get all stories by user is
  findAllStories: () => {
    return axios.get(apiBaseUrl + "/api/story");
  },
  
  // Gets the book with the given id
  getStory: (id) => {
    return axios.get(apiBaseUrl + "/api/story/" + id)
  },

  
}