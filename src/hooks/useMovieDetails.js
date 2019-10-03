import { useState } from "react";
import omdb from "../api/omdb";

const useMovieDetails = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [details, setDetails] = useState([]);
  const getDetails = async id => {
    try {
      const results = await omdb.get("", {
        params: {
          i: id
        }
      });
      setDetails(results.data);
    } catch (err) {
      console.error(err);
      setErrorMessage("Error retrieving details, please try again");
    }
  };
  return [details, getDetails, errorMessage];
};

export default useMovieDetails;
