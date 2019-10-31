import {
  Button,
  Intent,
  NumericInput,
  Overlay,
  Radio,
  RadioGroup
} from "@blueprintjs/core";
import React, { Component } from "react";
import consciousness from "../../consciousness.svg";
import heart from "../../heart.svg";
import soul from "../../soul.svg";
import india from "../../india.svg";
import uae from "../../uae.svg";
import southafrica from "../../south-africa.svg";
import socketIOClient from "socket.io-client";
import "./TradeComponent.scss";
import ReviewTrade from "./ReviewTrade";
class TradeComponent extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.toggleCountry = this.toggleCountry.bind(this);
    this.state = {
      heart: 0,
      soul: 0,
      consciousness: 0,
      goToNextPage: false,
      country: "UAE",
      detailsDone: false,
      recievedData: null,
      showReceivedData: false
    };
  }
  componentDidMount() {
    const socket = socketIOClient("https://boattradefinance.azurewebsites.net");
    const self = this;
    socket.on("hi", function(data) {
      if (data.message && data.message.reciever === "South Africa") {
        self.setState({ recievedData: data.message, showReceivedData: true });
      }
    });
  }
  handleValueChange = (value, valueName) => {
    if (valueName === "heart") this.setState({ heart: value });
    else if (valueName === "soul") this.setState({ soul: value });
    else if (valueName === "consciousness")
      this.setState({ consciousness: value });
  };
  handleClick = () => {
    this.setState({ goToNextPage: true });
  };
  toggleCountry = event => {
    this.setState({ country: event.target.value });
  };
  submitTrade = () => {
    this.setState({ detailsDone: true });
  };
  collateData = () => {
    return {
      heart: this.state.heart,
      soul: this.state.soul,
      consciousness: this.state.consciousness,
      reciever: this.state.country,
      sender: "South Africa"
    };
  };
  toggleOverlay = () => {
    this.setState({ showReceivedData: !this.state.showReceivedData });
    window.location.reload();
  };
  getSenderImage = () => {
    if (this.state.recievedData.sender === "India") {
      return india;
    } else if (this.state.recievedData.sender === "UAE") {
      return uae;
    } else if (this.state.recievedData.sender === "South Africa") {
      return southafrica;
    }
  };
  render() {
    const senderImage = this.state.recievedData && this.getSenderImage();
    if (this.state.detailsDone) {
      return <ReviewTrade getData={this.collateData} />;
    } else if (this.state.recievedData) {
      return (
        <Overlay
          isOpen={this.state.showReceivedData}
          onClose={this.toggleOverlay}
          canEscapeKeyClose={true}
          canOutsideClickClose={false}
          hasBackdrop={true}
        >
          <div className="trade__overlay">
            <h3>Your order is delivered!!</h3>
            <div className="trade__review__rows">
              <img
                src={senderImage}
                className="trade__seller-flag"
                alt="Insert a country flag here"
              />
              <h3> Selling Country: {this.state.recievedData.sender} </h3>{" "}
            </div>
            <div className="trade__review__rows">
              <img
                src={heart}
                className="trade__image"
                alt="Insert a heart flag here"
              />
              <h3>  {`+ ${this.state.recievedData.heart}`} </h3>{" "}
            </div>
            <div className="trade__review__rows">
              <img
                src={soul}
                className="trade__image"
                alt="Insert a soul flag here"
              />
              <h3> {`+ ${this.state.recievedData.soul}`} </h3>{" "}
            </div>
            <div className="trade__review__rows">
              <img
                src={consciousness}
                className="trade__image"
                alt="Insert a consciousness flag here"
              />
              <h3> {`+ ${this.state.recievedData.consciousness}`} </h3>{" "}
            </div>
            <br />
            <div>
              <Button
                intent={Intent.DANGER}
                onClick={this.toggleOverlay}
                style={{ margin: "" }}
              >
                Close
              </Button>
            </div>
          </div>
        </Overlay>
      );
    } else if (!this.state.goToNextPage)
      return (
        <div className="trade">
        <h3 id="tokenizeHeading">Are you ready to tokenize yourself?</h3>
          <div className="trade__item">
            <img
              className="trade__image"
              src={heart}
              alt="Insert a heart here"
            />
            <NumericInput
              onValueChange={(valueasNumber, valueasString) =>
                this.handleValueChange(valueasNumber, "heart")
              }
              allowNumericCharactersOnly="true"
              buttonPosition="right"
              disabled={false}
              fill={false}
              large={false}
              majorStepSize={10}
              max={100}
              min={0}
            />
          </div>

          <div className="trade__item">
            <img className="trade__image" src={soul} alt="Insert a soul here" />
            <NumericInput
              onValueChange={(valueasNumber, valueasString) =>
                this.handleValueChange(valueasNumber, "soul")
              }
              allowNumericCharactersOnly="true"
              buttonPosition="right"
              disabled={false}
              fill={false}
              large={false}
              majorStepSize={10}
              max={100}
              min={0}
            />
          </div>
          <div className="trade__item">
            <img
              className="trade__image"
              src={consciousness}
              alt="Insert a consciousness here"
            />
            <NumericInput
              onValueChange={(valueasNumber, valueasString) =>
                this.handleValueChange(valueasNumber, "consciousness")
              }
              allowNumericCharactersOnly="true"
              buttonPosition="right"
              disabled={false}
              fill={false}
              large={false}
              majorStepSize={10}
              max={100}
              min={0}
            />
          </div>
          
          <Button
            className="trade__next"
            rightIcon="arrow-right"
            intent="success"
            text="Next step"
            onClick={this.handleClick}
          />
        </div>
      );
    else {
      return (
        <div>
          <RadioGroup
            label="Choose trading partner country"
            onChange={this.toggleCountry}
            selectedValue={this.state.country}
            large={true}
          >
            <Radio
              className="trade__country"
              label="UAE"
              value="UAE"
              alignIndicator="left"
              large={true}
            >
              {" "}
              <img
                src={uae}
                className="trade__country__flag"
                alt="Insert a uae flag here"
              />
            </Radio>
            <Radio
              className="trade__country"
              label="India"
              value="India"
              alignIndicator="left"
              large={true}
            >
              {" "}
              <img
                className="trade__country__flag"
                src={india}
                alt="Insert a south africa flag here"
              />
            </Radio>
          </RadioGroup>
          <Button
            className="trade__next"
            intent="primary"
            text="Make a wish"
            onClick={this.submitTrade}
          />
        </div>
      );
    }
  }
}

export default TradeComponent;
