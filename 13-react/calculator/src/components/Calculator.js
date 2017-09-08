import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    /* oh */ super(props);
    this.state = { a: 0, b: 0 };
    this._updateA = this._updateA.bind(this);
    this._updateB = this._updateB.bind(this);
  }

  _updateA(e) {
    const a = parseFloat( e.target.value ) || 0;
    this.setState({a});
    console.log( this.state );
  }

  _updateB(e) {
    const b = parseFloat( e.target.value ) || 0;
    this.setState({b: b});
    console.log( this.state );
  }

  render() {
    const {a, b} = this.state; // Destructuring.
    return (
      <div>
        <h1>Calculator</h1>
        <input type="number" value={a} onChange={this._updateA} />
        <input type="number" value={b} onChange={this._updateB} />

        <h2>Results</h2>
        <p>{a} + {b} = { a + b }</p>
        <p>{a} - {b} = { a - b }</p>
        <p>{a} * {b} = { a * b }</p>
        <p>{a} / {b} = { a / b }</p>
      </div>
    );
  }
}

export default Calculator;
