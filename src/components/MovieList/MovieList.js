import { Component } from 'react';
import { Spin, Alert, Pagination } from 'antd';

import Movie from '../Movie';
import './MovieList.css';
import MovieApi from '../../services/MovieApi';

export default class MovieList extends Component {
  movies = new MovieApi();

  state = {
    data: [],
    tagList: [],
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.movies
      .getMovieList('return')
      .then((movies) => {
        this.setState({ data: movies, loading: false });
      })
      .catch(this.onError);
    this.movies.getTagList().then((tags) => {
      this.setState({ tagList: tags });
    });
  }

  onError = () => {
    this.setState({ error: true, loading: false });
  };

  render() {
    const { data, tagList, loading, error } = this.state;
    const errorMessage = error ? (
      <Alert message="Ошибка" description="Что-то пошло не так. Исправим в ближайшее время." type="error" showIcon />
    ) : null;
    return (
      <div>
        {errorMessage}
        {loading ? (
          <Spin size="large" />
        ) : (
          <>
            <ul className="movieList">
              {data.map((movie) => {
                return (
                  <Movie
                    key={movie.id}
                    title={movie.title}
                    releaseDate={movie.release_date}
                    overview={movie.overview}
                    poster={movie.poster_path}
                    tagID={movie.genre_ids}
                    tagList={tagList}
                    rating={movie.vote_average}
                  />
                );
              })}
            </ul>
            <Pagination defaultCurrent={1} total={50} />
          </>
        )}
      </div>
    );
  }
}
