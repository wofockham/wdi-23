import React, { Component } from 'react';
import axios from 'axios';

// rails server -p 5000
const SERVER_URL = 'http://localhost:5000/secrets.json';

class SecretsForm extends Component {
  constructor(props) {
    /* oh */ super(props);
    this.state = { content: '' };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(e) {
    this.setState( { content: e.target.value } );
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit( this.state.content );
    this.setState( { content: '' } ); // Clear the form for the next secret.
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <textarea value={this.state.content} onChange={this._handleChange}/>
        <br />
        <input type="submit" value="Tell" />
      </form>
    );
  }
}

class SecretsGallery extends Component {
  render() {
    return (
      <div>
        { this.props.secrets.map( (s) => <p key={s.id}>{s.content}</p> ) }
      </div>
    );
  }
}

class Secrets extends Component {
  constructor(props) {
    /* oh */ super(props);
    this.state = { secrets: [] };
    this.saveSecret = this.saveSecret.bind(this);

    // Fat arrow function to preserve the value of `this`.
    const fetchSecrets = () => {
      axios.get(SERVER_URL).then(function (results) {
        this.setState({secrets: results.data});
      }.bind(this));
      setTimeout( fetchSecrets, 5000 );
    }

    fetchSecrets();
  }

  saveSecret(content) {
    // Save the secret to the server using AJAX
    axios.post(SERVER_URL, { content: content }).then(function (result) {
      this.setState({secrets: [result.data, ...this.state.secrets]});
    }.bind(this));
  }

  render() {
    return (
      <div>
        <h1>Tell Us All Your Secrets</h1>
        <SecretsForm onSubmit={this.saveSecret} />
        <SecretsGallery secrets={ this.state.secrets } />
      </div>
    );
  }
}

export default Secrets;
