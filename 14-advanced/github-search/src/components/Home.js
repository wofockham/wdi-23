import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this._randomUser = this._randomUser.bind(this);
  }

  _randomUser() {
    const names = [ "serenezhuang", "AmandaKitSam", "Minaparnian", "jheepark", "JoshuaMcEvoy", "mack0101", "newplasticideas", "KatrinaFrost", "miriambej", "mbackhouse", "reetaa", "bourkison", "tomlau1968" ];
    const index = Math.floor( Math.random() * names.length );
    const user = names[index];
    this.props.history.push( `/details/${ user }` );
  }

  render() {
    return (
      <div>
        <h1>Github Search</h1>
        <Link to="/search">
          <button>Search for a user</button>
        </Link>
        <button onClick={this._randomUser}>Random</button>
      </div>
    );
  }
}
