import { useState } from "react";
import omdb from "../api/omdb";

const useMovieSearch = () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const getResults = async searchTerm => {
    if (!searchTerm) {
      setErrorMessage("You need to provide a search term!");
    } else {
      try {
        const response = await omdb.get("", {
          params: {
            s: searchTerm
          }
        });
        setResults(response.data.Search);
      } catch (err) {
        console.log(err);
        setErrorMessage("Something went wrong with the OMDB API call");
      }
    }
  };

  return [getResults, results, errorMessage];
};

export default useMovieSearch;
