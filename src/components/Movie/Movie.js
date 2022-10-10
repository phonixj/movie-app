import { Component } from 'react';
import { Card, Tag } from 'antd';
import 'antd/dist/antd.min.css';
import './Movie.css';
import { format } from 'date-fns';

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
    const { title, releaseDate, poster, overview } = this.props;
    const cutOverview = overview.slice(0, overview.lastIndexOf(' ', 170));

    return (
      <li className="item">
        <Card
          hoverable
          style={{
            width: 454,
            display: 'flex',
            minHeight: 281,
          }}
          cover={
            <img
              alt="movie poster"
              src={`https://image.tmdb.org/t/p/original${poster}`}
              style={{ height: 281, width: 183 }}
            />
          }
        >
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
        </Card>
      </li>
    );
  }
}
