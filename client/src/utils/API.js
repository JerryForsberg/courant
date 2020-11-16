// This is where all of our API calls go, to connect back end to front end
import axios from "axios";

export default {
  // USER ROUTES
  login: (username, password) => {
    return axios.post("/api/user/login", {
      username,
      password,
    });
  },

  logout: () => axios.get("http://localhost:3001/api/user/logout"),

  homeLoginCheck: () => {
    return axios.get("api/user/isAuthenticated");
  },

  getUser: function () {
    return axios.get("/api/user/info");
  },

  signup: (userInfo) => {
    // console.log(userInfo);
    return axios.post("http://localhost:3001/api/user/signup", userInfo);
  },

  // addStory: function (author, title, textUpload, imageUpload) {
  //   return axios.post("/api/story", { author, title, textUpload, imageUpload });
  // },

  addStory: function(textUpload) {
    return axios.post("http://localhost:3001/api/story", textUpload)
  },

  deleteStory: function (id) {
    return axios.delete(`/api/story/${id}`);
  },

  // get all stories by user is
  findAllStories: () => {
    return axios.get("http://localhost:3001/api/story");
  }
}