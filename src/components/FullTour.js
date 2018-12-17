import React from "react";
import Section from "./Section";
import Snippet from "./Snippet";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/styles/hljs";

let codeString = "console.log(hello world)";
const FullTour = ({ openTour, isShowingMore, toggleShowMore }) => (
  <React.Fragment>
    <Section>
      <button className="btn is-warning" onClick={openTour}>
        Lets Go!
      </button>
    </Section>
    <Section data-step="intro">
      <div className="container with-title is-center is-rounded">
        <p className="title">First Things First</p>
        <p style={{ textAlign: "left" }}>
          To be able to effectively follow along you're going to need a few
          things
        </p>
      </div>
      <div
        className="container is-rounded"
        style={{ display: "flex", flexDirection: "column" }}
        data-step="install"
      >
        <label>
          <input type="checkbox" className="checkbox" />
          <span data-step="install-vscode">
            <a href="">VS Code</a>
          </span>
        </label>
        <label>
          <input type="checkbox" className="checkbox" />
          <span>
            <a href="">Node.js</a>
          </span>
        </label>
        <label>
          <input type="checkbox" className="checkbox" />
          <span>
            <a href="" data-step="install-npm">
              NPM
            </a>
          </span>
        </label>
      </div>
    </Section>
    <Section data-step="verify">
      <Section>
        <SyntaxHighlighter>{"console.log(hello world)"}</SyntaxHighlighter>
        <SyntaxHighlighter>{"console.log(hello world)"}</SyntaxHighlighter>
      </Section>
    </Section>
  </React.Fragment>
);

export default FullTour;
