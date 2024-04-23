import { movieSort } from "../ts/functions";
import { IMovie } from "../ts/models/Movie";

describe("Testing movieSort function", () =>{
    test("It should sort the movies", () =>{
        
const sortMovie: IMovie[] = [
{Title: 'Harry Potter and the Deathly Hallows: Part 2', Year: '2011', imdbID: 'tt1201607', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMGVmMWNiMD…2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg'},
{Title: 'Dune: Part Two', Year: '2024', imdbID: 'tt15239678', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BN2QyZGU4ZD…mY5YzAwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg'}
]
     
movieSort(sortMovie);
        
expect(sortMovie[0].Title).toBe('Dune: Part Two');
    })
})