export default class MovieApi {
  _apiBase = 'https://api.themoviedb.org/3/search/movie?api_key=c2143fc2f39f8d18b2cff64a7be9b0e4';

  _apiTag = 'https://api.themoviedb.org/3/genre/movie/list?api_key=c2143fc2f39f8d18b2cff64a7be9b0e4';

  async getMovieList(search, page = 1) {
    const res = await fetch(`${this._apiBase}&query=${search}&page=${page}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${this._apiBase}, received ${res.status}`);
    }
    const data = await res.json();
    return data;
  }

  async getTagList() {
    const res = await fetch(this._apiTag);
    if (!res.ok) {
      throw new Error(`Could not fetch ${this._apiTag}, received ${res.status}`);
    }
    const result = await res.json();
    return result.genres;
  }
}
