import React, { Component } from "react";
import "./assets/css/App.css";

import Tour from "reactour";
import Section from "./components/Section";
import FullTour from "./components/FullTour";

import tourConfig from "./helpers/steps";
class App extends Component {
  constructor() {
    super();
    this.state = {
      isTourOpen: false,
      isShowingMore: false
    };
  }

  closeTour = () => {
    this.setState({ isTourOpen: false });
  };

  openTour = () => {
    this.setState({ isTourOpen: true });
  };

  render() {
    const { isTourOpen } = this.state;
    const accentColor = "#5cb7b7";
    return (
      <div className="App">
        <div className="tutorial containers">
          <Section>
            <div className="container with-title is-center is-rounded is-dark">
              <p className="title">Welcome!</p>
              <p style={{ color: "white", textAlign: "center" }}>
                This is online handbook will guide you though the process of
                creating a react applicaiton, doing some editing and finally
                uploading it to{" "}
                <a href="https://firebase.google.com/">Firebase</a>!
              </p>
              <p style={{ color: "white" }}>
                Go ahead and click that button to get started!
              </p>
            </div>
          </Section>
          <FullTour openTour={this.openTour} />
          <Tour
            onRequestClose={this.closeTour}
            steps={tourConfig}
            isOpen={isTourOpen}
            maskClassName="mask"
            className="helper"
            rounded={5}
            accentColor={accentColor}
          />
        </div>
      </div>
    );
  }
}

export default App;
