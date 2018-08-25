import React, { Component } from "react";
import App from "./App";

class Change extends Component {
  constructor() {
    super();
    this.state = {
      name: "Fullname",
      valid: "****",
      number: "****************",
      banc: "banc name"
    };
  }

  changeCardNumber(event) {
    this.setState({ number: event.target.value });
  }
  changeCardValid(event) {
    this.setState({ valid: event.target.value });
  }
  changeCardHolder(event) {
    this.setState({ name: event.target.value });
  }
  changeBanc(event) {
    this.setState({ banc: event.target.value });
  }

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            className="card-banc-put"
            onChange={this.changeBanc.bind(this)}
            maxLength="20"
          />

          <br />

          <input
            type="number"
            className="card-number-put"
            onChange={this.changeCardNumber.bind(this)}
            maxLength="16"
          />
          <br />

          <input
            type="number"
            className="card-valid-put"
            onChange={this.changeCardValid.bind(this)}
            max="9999"
          />
          <br />

          <input
            type="text"
            className="card-holder-put"
            onChange={this.changeCardHolder.bind(this)}
            max="20"
          />
          <br />
        </div>
        <App
          name={this.state.name}
          valid={this.state.valid}
          number={this.state.number}
          banc={this.state.banc}
        />
      </div>
    );
  }
}
export default Change;
