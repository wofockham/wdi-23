import React, { Component } from 'react';

export default class GithubUser extends Component {
  render() {
    return (<h2>{this.props.match.params.username}</h2>);
  }
}
