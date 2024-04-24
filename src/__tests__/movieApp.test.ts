import * as displaynoresult from "../ts/displayNoResult";
import { IMovie } from "../ts/models/Movie";
import { handleSubmit } from "../ts/movieApp";
import * as movieService from "../ts/services/movieService";
import * as createHtml from "../ts/createHtml";

jest.mock("./../ts/services/movieService.ts");

describe("Testing handleSubmit", () => {
  let mockeddisplayNoResult: jest.SpyInstance<void>;
  let mockedcreateHtml: jest.SpyInstance<void>;

  beforeEach(() => {
    mockedcreateHtml = jest.spyOn(createHtml, "createHtml");
    mockeddisplayNoResult = jest.spyOn(displaynoresult, "displayNoResult");
  });

  afterEach(() => {
    mockedcreateHtml.mockReset();
    mockeddisplayNoResult.mockReset();
  });

  test("It should call createHtml", async () => {
    document.body.innerHTML = `
      <div id="app">
      <form id="searchForm">
      <input type="text" id="searchText" placeholder="Skriv titel här"/>
      <button type="submit" id="search">Sök</button>
      </form>
      <div id="movie-container"></div>
      </div> 
      `;

    await handleSubmit();
    const moviesinContainer = document.getElementsByClassName("movie");

    expect(mockedcreateHtml).toHaveBeenCalled();
    expect(moviesinContainer).toHaveLength(3);
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

  test("It should call displayNoResult", async () => {
    const mockedgetData = jest.spyOn(movieService, "getData");
    mockedgetData.mockImplementation((): Promise<IMovie[]> => {
      return Promise.resolve([]);
    });

    await handleSubmit();
    expect(mockeddisplayNoResult).toHaveBeenCalled();
    const moviesinContainer = document.getElementsByClassName("movie");
    expect(moviesinContainer).toHaveLength(0);
  });
});
