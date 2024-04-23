import { displayNoResult } from "../ts/displayNoResult";

describe("Testing displayNoResult", () => {
  test("It should show ´inga sökresultat att visa´", () => {
    document.body.innerHTML = `
    <div id="app">
    <form id="searchForm">
      <input type="text" id="searchText" placeholder="Skriv titel här" />
      <button type="submit" id="search">Sök</button>
    </form>
    <div id="movie-container"></div>
  </div> 
  `;   

const container = document.getElementById("movie-container") as HTMLDivElement
displayNoResult(container)

expect(container.innerHTML).toContain("Inga sökresultat att visa")
  });
});
