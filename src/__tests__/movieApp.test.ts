import * as displaynoresult from "../ts/displayNoResult"; 
import { IMovie } from "../ts/models/Movie";
import { handleSubmit } from "../ts/movieApp";
import * as movieService from "../ts/services/movieService";  

describe("Testing handleSubmit", () => {
  
  let mockedgetData: jest.SpyInstance<Promise<IMovie[]>>;
  let mockeddisplayNoResult: jest.SpyInstance<void>;
  
  beforeEach(() => {
    mockedgetData = jest.spyOn(movieService, "getData");
    mockeddisplayNoResult = jest.spyOn(displaynoresult, "displayNoResult");
  });
      afterEach(() => {
        mockedgetData.mockReset();
        mockeddisplayNoResult.mockReset();
      });
      
    document.body.innerHTML = `
    <div id="app">
    <form id="searchForm">
    <input type="text" id="searchText" placeholder="Skriv titel här"/>
    <button type="submit" id="search">Sök</button>
    </form>
    <div id="movie-container"></div>
    </div> 
    `;  
    
    test("It should test displayNoResult function", async () =>{
      mockedgetData.mockImplementation((): Promise<IMovie[]> => {
        return Promise.resolve([]);
      });
      
      await handleSubmit();
      expect(mockeddisplayNoResult).toHaveBeenCalled();
      const moviesinContainer = document.getElementsByClassName("movie");
      expect(moviesinContainer).toHaveLength(0);
    })
  });