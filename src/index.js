import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Room extends Component {
  state = {
    isLit: true,
    celsius: 22
  };

  switchLight = () => {
    this.setState({
      isLit: !this.state.isLit
    });
  };

  moreHot = () => {
    this.setState({
      celsius: this.state.celsius + 1
    });
  };

  moreCold = () => {
    this.setState({
      celsius: this.state.celsius - 1
    });
  };

  render() {
    const brightness = this.state.isLit ? "lit box-lit" : "dark box-dark";
    const btnColor = this.state.isLit ? "lit" : "dark";
    const tempColor = this.state.celsius * 4;

    return (
      <div className={`uBox-flex room ${brightness}`}>
        <div className="uBox-flex">
          The room is {this.state.isLit ? "lit" : "dark"}.
          <br />
          <div className="margin-topBottom">
            <label className="switch">
              <input onClick={this.switchLight} type="checkbox" />
              <span className="slider round" />
            </label>
          </div>
        </div>
        <div className="uBox-flex">
          The temperature of the room is {this.state.celsius}°.
          <br />
          <div className="margin-topBottom btn-box">
            <button className={`btn-temp ${btnColor}`} onClick={this.moreHot}>
              +
            </button>
            <button className={`btn-temp ${btnColor}`} onClick={this.moreCold}>
              -
            </button>
          </div>
          <div className="temperature-box">
            <div
              style={{ top: `-${tempColor}px` }}
              className="temperature-content"
            />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Room />, document.getElementById("root"));
