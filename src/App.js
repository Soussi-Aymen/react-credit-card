import React, { Component } from "react";
import "./App.css";

class App extends Component {
  handelCardNumber = num => {
    let resultStr = "";
    for (let i = 0; i <= 12; i += 4) {
      resultStr += num.slice(i, i + 4) + " ";
    }
    return resultStr;
  };

  handelValid = number => {
    number = number.toString();
    return number.slice(0, 2) + "/" + number.slice(2);
  };
  handelCardName(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    return (
      <div className="App">
        <h3 className="card-header">{this.props.banc.toUpperCase()}</h3>

        <div className="icon">
          <img
            src={require("./img/chip.png")}
            alt="sorry there is a problem"
            width="42"
            height="42"
          />
        </div>
        <div className="number">
          {this.handelCardNumber(this.props.number.padEnd(16, "*"))}
        </div>
        <div className="footer">
          <h3 className="card-holder">
            {this.handelCardName(this.props.name)}
          </h3>

          <div className="footer-content">
            <h4 className="reference">{this.handelValid(this.props.valid)}</h4>

            <div className="visa-mastercard">
              <div>
                <img
                  src={require("./img/Mastercard.png")}
                  alt="sorrry there is a problem"
                  width="42"
                  height="42"
                />
              </div>

              <div>
                <img
                  src={require("./img/visa.png")}
                  alt="sorrry there is a problem"
                  width="42"
                  height="42"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
