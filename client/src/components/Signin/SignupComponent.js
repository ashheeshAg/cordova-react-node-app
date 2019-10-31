import { Button } from "@blueprintjs/core";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import "./SignupComponen.scss";
class SignupComponent extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.toggleLoading = this.toggleLoading.bind(this);
    this.state = {
      name: "",
      redirectToTrade: false,
      startLoading: false,
      percent: 0,
      status: 'default'
    };
  }

  
  handleInput = event => {
    this.setState({ name: event.target.value });
  };
  toggleLoading = () => {
    this.setState({ startLoading: false, redirectToTrade: true });
  };
  tick = (updatePercent) => {
      console.log(this.state.percent)
      if(this.state.percent === 100) {
        clearInterval(updatePercent)
          this.updateStatus('success')
      }
      this.setState({percent: this.state.percent + 10})
  }
  updateStatus = (status) => {
      this.setState({status})
  }
  handleClick = () => {
    let updatePercent = setInterval(() => this.tick(updatePercent), 500);
    this.setState({ startLoading: true });
    this.updateStatus('active')
      setTimeout(() => {
        this.toggleLoading();
      }, 8000);
  };
  render() {
    if (this.state.startLoading) {
      return (
        <React.Fragment>
        <Progress
          type="circle"
          percent={this.state.percent}
          status={this.state.status}
          width={this.props.width}
          strokeWidth={4}
          style={{ margin: "70px 0 0 0px" }}
          theme={{
            success: {
              color: 'rgb(223, 105, 180)'
            },
            active: {
              symbol: this.state.percent + '%',
              color: '#fbc630'
            },
            default: {
              symbol: this.state.percent + '%',
              color: '#fbc630'
            }
          }}
        />
        {this.state.status === 'active' && <h3>Checking your profile ...</h3>}
        {this.state.status === 'success' && <h3 id='ready-heading'> You're now successfully onboarded!</h3>}
        </React.Fragment>
      );
    }
    if (this.state.redirectToTrade) {
      return <Redirect push to={`/trade`} />;
    }
    return (
      <div className="signin">
        <input
          className="signin__name bp3-input bp3-large bp3-intent-primary modifier"
          type="text"
          placeholder="Enter your name"
          dir="auto"
          onChange={this.handleInput}
        />

        <Button
          className="signin__submit"
          rightIcon="arrow-right"
          intent="success"
          text="Sign in"
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default SignupComponent;
