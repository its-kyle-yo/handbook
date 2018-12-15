import React, { Component } from "react";
import "./App.css";
import Section from "./components/Section";
import Prism from "prismjs";
import "./prism.css";
class App extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <div className="App">
        <Section>
          <pre>
            <code className="language-javascript">
              {`onSubmit(e) {
                e.preventDefault();
                const job = {
                  title: 'Developer',
                  company: 'Facebook' 
                };
              `}
            </code>
          </pre>
        </Section>
      </div>
    );
  }
}

export default App;
