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
    tagList: [],
  };

  componentDidMount() {
    this.movies.getMovieList('return').then((movies) => {
      this.setState({ data: movies });
    });
    this.movies.getTagList().then((tags) => {
      this.setState({ tagList: tags });
    });
  }

  render() {
    const { data, tagList } = this.state;
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
                tagID={movie.genre_ids}
                tagList={tagList}
              />
            );
          })}
        </Space>
      </ul>
    );
  }
}
