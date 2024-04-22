import axios from "axios";
import { getData } from "../ts/services/movieService";
import { movies } from "../ts/services/__mocks__/movieService";

//jest.mock("./../services/movieService.ts");

jest.mock("axios");

const mockResponse = {
  data: {
    Search:movies,
  }
}

describe("testing getData", () => {
  test("it should give a resolve", async () => {
    axios.get = jest.fn().mockResolvedValue(mockResponse);
    const movies = await getData("");
    expect(movies).toHaveLength(3);
  });

  test("it should give a reject", async () => {
    axios.get = jest.fn().mockRejectedValue(mockResponse);
    const movies = await getData("");
    expect(movies).toHaveLength(0);
  });
});