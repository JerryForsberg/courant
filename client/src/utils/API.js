// This is where all of our API calls go, to connect back end to front end
import axios from "axios";

export default {
  // USER ROUTES
  login: (username, password) => {
    // had to add entire url, will it work on deployed version?
    return axios.post("http://localhost:3001/api/user/login", {
      username,
      password
    });
  },

  logout: () => axios.get("http://localhost:3001/api/user/logout"),

  getUser: function () {
    return axios.get("http://localhost:3001/api/user/info");
  },

  signup: (userInfo) => {
    // console.log(userInfo);
    return axios.post("http://localhost:3001/api/user/signup", userInfo);
  },

  addStory: function (author, title, textUpload, imageUpload) {
    return axios.post("/api/story", { author, title, textUpload, imageUpload });
  },

  deleteStory: function (id) {
    return axios.delete(`/api/story/${id}`);
  },

  getAllStories: () => {
    return axios.get("/api/story");
  }
}