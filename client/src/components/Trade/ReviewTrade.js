import { Button } from "@blueprintjs/core";
import React, { Component } from "react";
import consciousness from "../../consciousness.svg";
import heart from "../../heart.svg";
import soul from "../../soul.svg";
import india from "../../india.svg";
import southafrica from "../../south-africa.svg";
import uae from "../../uae.svg";
import chirag from "../../chirag.svg"
import alladin from "../../alladin.svg"
import { postData } from "../../api-facade/endpoint";
import "./TradeComponent.scss";
class ReviewTrade extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: this.props.getData(),
      goToNextPage: false,
      country: "UAE",
      responseData: null,
      tradePosted: 0
    };
  }
  submitTrade = async () => {
    console.log("yo");

    this.setState({ tradePosted: 1 });
    try {
      const data = await postData(this.state.postData);
      console.log(JSON.stringify(data));
      this.setState({ responseData: data, tradePosted: 2, goToNextPage: true });
    } catch (error) {
      console.error(error);
    }
  };
  getRecieverImage = () => {
    if (this.state.postData.reciever === "India") {
      return india;
    } else if (this.state.postData.reciever === "UAE") {
      return uae;
    } else if (this.state.postData.reciever === "South Africa") {
      return southafrica;
    }
  };
  render() {
    const recieverImage = this.getRecieverImage();
    if (this.state.tradePosted === 0)
      return (
        <div className="trade__review">
          <h3> You're on the verge making yourself tradable </h3>
          <div className="trade__review__rows">
            <div className="trade__review__rows--seller">
              <img
                src={southafrica}
                className="trade__country__flag"
                alt="Insert a sa flag here"
              />
              <h3> Selling Country: {this.state.postData.sender} </h3>{" "}
            </div>

            <div className="trade__review__rows--receiver">
              <img
                className="trade__country__flag"
                src={recieverImage}
                alt="Insert a south africa flag here"
              />
              <h3> Recieving Country: {this.state.postData.reciever}</h3>
            </div>
          </div>
          <div className="trade__review__rows">
            <img
              className="trade__image"
              src={heart}
              alt="Insert a heart here"
            />
            <h3> {this.state.postData.heart}</h3>
          </div>
          <div className="trade__review__rows">
            <img className="trade__image" src={soul} alt="Insert a soul here" />
            <h3 className="trade__heading-soul"> {this.state.postData.soul}</h3>
          </div>
          <div className="trade__review__rows">
            <img
              className="trade__image"
              src={consciousness}
              alt="Insert a consciousness here"
            />
            <h3> {this.state.postData.consciousness}</h3>
          </div>

          <Button
            className="trade__submit"
            intent="primary"
            text="Do it!"
            onClick={this.submitTrade}
          />
        </div>
      );
    else if (this.state.tradePosted === 1) {
      return (
        <div>
        
        <div className="trade__progress">
          <img
            src={southafrica}
            className="trade__country__flag"
            alt="Insert a sa flag here"
          />
          <div className="bp3-progress-bar bp3-intent-danger .modifier">
            <div className="bp3-progress-meter"></div>
          </div>
          <img
            className="trade__country__flag"
            src={recieverImage}
            alt="Insert a south africa flag here"
          />
        </div>
        <img src={chirag} alt="Insert an magic lamp here"/>
        <h4>Blockchain's Magic Pot</h4>
        </div>
      );
    } else {
      return (
        <div className="trade__feedback">
          <h3>Congratulations! You've successfully tokenized yourself</h3>
          <h4> Remaining Balance</h4>

          <div className="trade__review__rows">
            <img
              className="trade__image"
              src={heart}
              alt="Insert a heart here"
            />
            <h3> {this.state.responseData.heart}</h3>
          </div>
          <div className="trade__review__rows">
            <img className="trade__image" src={soul} alt="Insert a soul here" />
            <h3 className="trade__heading-soul"> {this.state.responseData.soul}</h3>
          </div>
          <div className="trade__review__rows">
            <img
              className="trade__image"
              src={consciousness}
              alt="Insert a consciousness here"
            />
            <h3> {this.state.responseData.consciousness}</h3>
          </div>
        <img src={alladin} alt="Insert an alladin here"/>
        </div>
      );
    }
  }
}

export default ReviewTrade;
