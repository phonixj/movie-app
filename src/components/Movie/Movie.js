import { Component } from 'react';
import { Card, Tag } from 'antd';
import 'antd/dist/antd.min.css';
import './Movie.css';
import { format } from 'date-fns';

export default class Movie extends Component {
  genreNames = () => {
    const arr = [];
    const { genreList, genreID } = this.props;
    genreList.forEach(({ id, name }) => {
      genreID.forEach((elem) => {
        if (id === elem) {
          arr.push(name);
        }
      });
    });
    return arr;
  };

  // trimText = () => {
  //   const { overview } = this.props;
  //   const split = overview.split(' ');
  //   const sliced = split.slice(0, 50);
  //   return `${sliced.join(' ')} ...`;
  // };

  render() {
    const { title, releaseDate, poster, overview } = this.props;
    // const { Paragraph } = Typography;

    return (
      <li className="item">
        <Card
          hoverable
          style={{
            width: 454,
            display: 'flex',
            height: 281,
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
          {this.genreNames().map((tag) => {
            return (
              <Tag style={{ opacity: 0.65 }} key={tag}>
                {tag}
              </Tag>
            );
          })}
          <p className="description">{`${overview.slice(0, overview.lastIndexOf(' ', 170))} ...`}</p>
          {/* <Paragraph
            className='description'
            ellipsis={{
              rows: 4,
            }}
          >
            {overview}
          </Paragraph> */}
        </Card>
      </li>
    );
  }
}
