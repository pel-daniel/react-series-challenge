import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import gifActions from '../actions/gifActions';
import GifGrid from '../components/GifGrid';
import SearchBar from '../components/SearchBar';

class AppContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(gifActions.creators.getTrendingGifs());
  }

  render() {
  const { gifs, favorites } = this.props;

  return (
    <div className="AppContainer mt">
      <SearchBar />

      <Route
        exact
        path="/"
        render={({ match }) => (
          <GifGrid gifs={ gifs } />
        )}
      />
      <Route
        path="/favorites"
        render={({ match }) => (
          <GifGrid gifs={ favorites } />
        )}
      />
    </div>
  );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(AppContainer);
