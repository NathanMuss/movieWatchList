import axios from "axios";

export default axios.create({
  // Yes, I know my API keys are publicly stored here.  I wanted to make this a complete, working repo that is easily run when cloned.
  // Please do not abuse my poor little API keys...
  baseURL: "http://www.omdbapi.com/?apikey=846fe7b4&"
});
