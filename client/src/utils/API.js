// This is where all of our API calls go, to connect back end to front end
import axios from "axios";

export default {
    // USER ROUTES
    login: (email, password) => {
        return axios.post("/api/user/login", {
          name,
          password,
        });
      },

    logout: () => axios.get("/api/user/logout"),

    getUser: function () {
        return axios.get("/api/user/info");
    },

    signup: (userInfo) => {
        return axios.post("/api/user/signup", userInfo);
    }


}