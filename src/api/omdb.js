import axios from "axios";

export default axios.create({
  baseURL: "http://www.omdbapi.com/?apikey=846fe7b4&"
});
