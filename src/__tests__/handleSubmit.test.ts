import * as createHtml from "../ts/createHtml"; 
import * as displaynoresult from "../ts/displayNoResult"; 
import { IMovie } from "../ts/models/Movie";
import { handleSubmit } from "../ts/movieApp";
import * as movieService from "../ts/services/movieService";  


describe("Testing handleSubmit", () => {
  
    let mockedgetData: jest.SpyInstance<Promise<IMovie[]>>;
    let mockedcreateHtml: jest.SpyInstance<void>;
    let mockeddisplayNoResult: jest.SpyInstance<void>;
  
    beforeEach(() => {
      mockedgetData = jest.spyOn(movieService, "getData");
      mockedcreateHtml = jest.spyOn(createHtml, "createHtml");
      mockeddisplayNoResult = jest.spyOn(displaynoresult, "displayNoResult");
    });

    afterEach(() => {
      mockedgetData.mockReset();
      mockedcreateHtml.mockReset();
      mockeddisplayNoResult.mockReset();
    });

    test("It should call handleSubmit", async() =>{
      document.body.innerHTML = `
      <div id="app">
      <form id="searchForm">
      <input type="text" id="searchText" placeholder="Skriv titel här"/>
      <button type="submit" id="search">Sök</button>
      </form>
      <div id="movie-container"></div>
      </div> 
      `; 
    
    mockedgetData.mockResolvedValueOnce([]); //jag behöver hjälp här!
    
    await handleSubmit(); 

    const movieContainer = document.getElementById("movie-container");
    expect(movieContainer).toBeDefined(); 
    
    expect(mockedcreateHtml).toHaveBeenCalled();
    expect(mockeddisplayNoResult).toHaveBeenCalled();
    expect(mockedgetData).toHaveBeenCalled();
    })
  });