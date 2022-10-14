import { Component } from 'react';
import { Card, Tag } from 'antd';
import 'antd/dist/antd.min.css';
import './Movie.css';
import { format } from 'date-fns';

import Rating from '../Rating';
import Stars from '../Stars';

export default class Movie extends Component {
  tagNames = () => {
    const arr = [];
    const { tagList, tagID } = this.props;
    tagList.forEach(({ id, name }) => {
      tagID.forEach((elem) => {
        if (id === elem) {
          arr.push(name);
        }
      });
    });
    return arr;
  };

  render() {
    const { title, releaseDate, poster, overview, rating } = this.props;
    const cutOverview = overview.slice(0, overview.lastIndexOf(' ', 130));

    return (
      <li className="item">
        <Card
          hoverable
          cover={<img alt="movie poster" src={`https://image.tmdb.org/t/p/original${poster}`} className="item__img" />}
        >
          <Rating rating={rating} />
          <h1>{title}</h1>

          <div className="date">{format(new Date(releaseDate), 'MMMM dd, yyyy')}</div>
          {this.tagNames().map((tag) => {
            return (
              <Tag style={{ opacity: 0.65 }} key={tag}>
                {tag}
              </Tag>
            );
          })}
          <p className="description">{`${cutOverview} ...`}</p>
          <Stars stars={rating} />
        </Card>
      </li>
    );
  }
}
