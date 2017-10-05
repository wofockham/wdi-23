import React, { Component } from 'react';
import GithubHelpers from '../utils';

export default class GithubUser extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null, repos: null };
  }

  // React Component life cycle methods.
  componentWillMount() {
    const username = this.props.match.params.username;
    GithubHelpers.getUserInfo(username).then( (info) => {
      console.log( 'user info', info );
      // TODO: Add this info to the state
    });

    GithubHelpers.getUserRepos(username).then( (info) => {
      console.log( 'repos', info );
      // TODO: Add this info to the state
    })
  }

  render() {
    return (
      <div>
        <h1>User Info</h1>
        <Profile />
        <Repositories />
      </div>
    );
  }
}

class Profile extends Component {
  render () {
    return (
      <h2>Profile Coming Soon</h2>
    );
  }
}

class Repositories extends Component {
  render() {
    return (
      <h2>Repositories Coming Soon</h2>
    );
  }
}
