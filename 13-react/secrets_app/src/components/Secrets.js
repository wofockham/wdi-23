import React, { Component } from 'react';

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
      <h2>Actual Secrets Coming Soon</h2>
    );
  }
}

class Secrets extends Component {
  saveSecret(content) {
    console.log( content );
    // Save the secret to the server using AJAX
  }

  render() {
    return (
      <div>
        <h1>Tell Us All Your Secrets</h1>
        <SecretsForm onSubmit={this.saveSecret}/>
        <SecretsGallery />
      </div>
    );
  }
}

export default Secrets;
