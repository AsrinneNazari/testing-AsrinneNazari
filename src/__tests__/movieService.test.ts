import { getData } from "../ts/services/movieService";

//jest.mock("./../services/movieService.ts");

jest.mock("axios", ()=>{
  get:{
    Title: "Dune5"
  }
});

describe("MovieService", () => {
  test("it should work", async () => {
    
    const movies= await getData("Dune5");
    
    expect(movies).toBe("Dune5");
  });
});
