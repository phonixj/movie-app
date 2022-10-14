import { Tabs, Alert } from 'antd';
import { Component } from 'react';
import { Offline, Online } from 'react-detect-offline';

import './App.css';
import 'antd/dist/antd.min.css';

import MovieList from '../MovieList';
import SearchLine from '../SearchLine';

export default class App extends Component {
  render() {
    return (
      <>
        <Online>
          <Tabs
            defaultActiveKey="1"
            centered
            items={[
              {
                label: 'Search',
                key: 1,
                children: (
                  <>
                    <SearchLine />
                    <MovieList />
                  </>
                ),
              },
              { label: 'Rated', key: 2, children: 'Content of Tab Pane 2' },
            ]}
          />
        </Online>
        <Offline>
          <Alert
            message="Warning"
            description="Нет соединения с сетью. Попробуйте переподключиться"
            type="warning"
            showIcon
          />
        </Offline>
      </>
    );
  }
}
