import { Space } from 'antd';
import { Component } from 'react';

import Movie from '../Movie';
import 'antd/dist/antd.min.css';
import './MovieList.css';
import MovieApi from '../../services/MovieApi';

export default class MovieList extends Component {
  movies = new MovieApi();

  state = {
    data: [],
    genreList: [],
  };

  // constructor() {
  //   super();
  //   this.movies.getMovieList('return').then((movies) => {
  //     this.setState({ data: movies });
  //   });
  // }

  componentDidMount() {
    this.movies.getMovieList('return').then((movies) => {
      this.setState({ data: movies });
    });
    this.movies.getGenreList().then((genre) => {
      this.setState({ genreList: genre });
    });
  }

  render() {
    const { data, genreList } = this.state;
    return (
      <ul>
        <Space wrap>
          {data.map((movie) => {
            return (
              <Movie
                key={movie.id}
                title={movie.title}
                releaseDate={movie.release_date}
                overview={movie.overview}
                poster={movie.poster_path}
                genreID={movie.genre_ids}
                genreList={genreList}
              />
            );
          })}
        </Space>
      </ul>
    );
  }
}
