import React from "react";

const Snippet = props => (
  <pre className="snippet">
    <code className={`language-${props.language}`}>{props.children}</code>
  </pre>
);

export default Snippet;
