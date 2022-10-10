export default class MovieApi {
  _apiBase = 'https://api.themoviedb.org/3/search/movie?api_key=c2143fc2f39f8d18b2cff64a7be9b0e4';

  _apiGenre = 'https://api.themoviedb.org/3/genre/movie/list?api_key=c2143fc2f39f8d18b2cff64a7be9b0e4';

  async getMovieList(search) {
    const res = await fetch(`${this._apiBase}&query=${search}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${this._apiBase}, received ${res.status}`);
    }
    const data = await res.json();
    return data.results;
  }

  async getGenreList() {
    const res = await fetch(this._apiGenre);
    if (!res.ok) {
      throw new Error(`Could not fetch ${this._apiGenre}, received ${res.status}`);
    }
    const result = await res.json();
    return result.genres;
  }
}
