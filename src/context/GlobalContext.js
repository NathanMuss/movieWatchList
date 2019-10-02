import React, { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  // TODO: Get saved movies from AsyncStorage instead of using hard coded default data
  const [savedMovies, setSavedMovies] = useState([
    {
      Title: "Swiss Army Man",
      Year: "2016",
      Rated: "R",
      Released: "01 Jul 2016",
      Runtime: "97 min",
      Genre: "Comedy, Drama, Fantasy, Romance",
      Director: "Dan Kwan, Daniel Scheinert",
      Writer: "Daniel Scheinert, Dan Kwan",
      Actors:
        "Paul Dano, Daniel Radcliffe, Mary Elizabeth Winstead, Antonia Ribero",
      Plot:
        "A hopeless man stranded on a deserted island befriends a dead body and together they go on a surreal journey to get home.",
      Language: "English",
      Country: "USA, Sweden",
      Awards: "6 wins & 28 nominations.",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTk0OTEyMjM1OF5BMl5BanBnXkFtZTgwMzMzODM4ODE@._V1_SX300.jpg",
      Ratings: [
        { Source: "Internet Movie Database", Value: "7.0/10" },
        { Source: "Rotten Tomatoes", Value: "71%" },
        { Source: "Metacritic", Value: "64/100" }
      ],
      Metascore: "64",
      imdbRating: "7.0",
      imdbVotes: "93,708",
      imdbID: "tt4034354",
      Type: "movie",
      DVD: "04 Oct 2016",
      BoxOffice: "$4,208,879",
      Production: "Blackbird Films",
      Website: "http://swissarmyman.com/",
      Response: "True"
    }
  ]);

  return (
    <GlobalContext.Provider value={{ savedMovies, setSavedMovies }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
