import React, { Component } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { ExtraButton } from "./components/ExtraButton";
import { Output } from "./components/Output";
import * as math from "mathjs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      output: ""
    };

    this.addToInput = this.addToInput.bind(this);
    this.handleEqual = this.handleEqual.bind(this);
    this.resetScreen = this.resetScreen.bind(this);
    this.DeleteButton = this.DeleteButton.bind(this);
    this.AnsButton = this.AnsButton.bind(this);
    this.clearScreen = this.clearScreen.bind(this);
  }

  AnsButton() {
    this.setState({
      input: this.state.input + this.state.output
    });
  }

  DeleteButton() {
    this.setState({
      input: this.state.input.substring(0, this.state.input.length - 1)
    });
  }

  handleEqual() {
    this.setState({
      output: math.eval(this.state.input)
    });
  }

  addToInput(val) {
    this.setState({
      input: this.state.input + val
    });
  }

  resetScreen() {
    this.setState({
      input: "",
      output: ""
    });
  }

  clearScreen() {
    this.setState({
      input: ""
    });
  }

  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input input={this.state.input} />
          <Output input={this.state.output} />
          <div className="row">
            <ExtraButton handleExtra={this.resetScreen}>Reset</ExtraButton>
            <ExtraButton handleExtra={this.clearScreen}>Clear</ExtraButton>
            <ExtraButton handleExtra={this.DeleteButton}>Delete</ExtraButton>
            <ExtraButton handleExtra={this.AnsButton}>Ans</ExtraButton>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={this.handleEqual}>=</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
