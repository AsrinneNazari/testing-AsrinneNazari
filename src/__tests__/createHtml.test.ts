import { createHtml } from "../ts/createHtml";
import { IMovie } from "../ts/models/Movie";

describe("createHtml testing", () =>{
    test("just testing", ()=>{
        document.body.innerHTML = `
        <div id="app">
        <form id="searchForm">
          <input type="text" id="searchText" placeholder="Skriv titel här"/>
          <button type="submit" id="search">Sök</button>
        </form>
        <div id="movie-container"></div>
      </div> 
      `;   

      const movie: IMovie[] = [];
      const movieContainer = document.createElement("div");
      movieContainer.innerHTML = ""

      createHtml(movie, movieContainer);
      expect().toContain();
    })
}) 