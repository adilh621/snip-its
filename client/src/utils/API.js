import axios from "axios";

export default {
  // Gets all comments
  getSnipits: function() {
    return axios.get("/api/snipits");
  },
  // Gets the comment with the given id
  getSnipit: function(id) {
    return axios.get("/api/snipits/" + id);
  },
  getSnipitCategory: function(category) {
    return axios.get("/api/snipits/" + category);
  },
  // Deletes the comment with the given id
  deleteSnipit: function(id) {
    return axios.delete("/api/snipits/" + id);
  },
  // Saves a comment to the database
  saveSnipit: function(snipitData) {
    console.log("created snipit")
    return axios.post("/api/snipits", snipitData);
  }
};
