import { IMovie } from "../../models/Movie";

export const movies: IMovie[] = [
  {
    Title: "En Harry Potter film",
    Year: "2011",
    imdbID: "tt1201607",
    Type: "movie",
    Poster:
      "https://en.wikipedia.org/wiki/Harry_Potter_%28character%29#/media/File:Harry_Potter_character_poster.jpg",
  },
  {
    Title: "Dune: Part ten",
    Year: "2035",
    imdbID: "tt15239678",
    Type: "movie",
    Poster:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/08/dune-2021-poster.jpg?q=49&fit=crop&w=480&dpr=2",
  },
  {
    Title: "Bladerunner15",
    Year: "2034",
    imdbID: "tt15239678",
    Type: "movie",
    Poster:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/08/dune-2021-poster.jpg?q=49&fit=crop&w=480&dpr=2",
  },
];

export const getData = async (searchText: string): Promise<IMovie[]> => {
  if (searchText) {
  }
  return new Promise((resolve) => {
    resolve(movies);
  });
};