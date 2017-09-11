import React, { Component } from 'react';

class FlickrSearchForm extends Component {
  render () {
    return (<h3>Form coming soon</h3>);
  }
}

class FlickrSearchGallery extends Component {
  render () {
    return (<h3>Gallery coming soon</h3>);
  }
}

class FlickrSearch extends Component {
  render () {
    return (
      <div>
        <h2>Image search</h2>
        <FlickrSearchForm />
        <FlickrSearchGallery />
      </div>
    );
  };
}

export default FlickrSearch;
