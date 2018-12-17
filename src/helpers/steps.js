import React from "react";

const tourConfig = [
  {
    selector: "[data-step=intro]",
    content: "This is your first step into deploying an app!"
  },
  {
    selector: "[data-step='install']",
    content:
      "You're going to want to go through each of these and make sure they're installed to your machine."
  },
  {
    selector: "[data-step='install-vscode']",
    content:
      "In this guide we will be using VSCode though you're totally welcome to use what you're comfortable with"
  },
  {
    selector: "[data-step='install-npm']",
    content:
      "Most installations of Node come with NPM built in! Though we should still check to make sure that we've got it 🕵️‍♂️"
  },
  {
    selector: "[data-step=install]",
    content: ({ goTo }) => {
      return (
        <div style={{ textAlign: "center" }}>
          Go ahead and get these installed and I'll wait for you to finish!
          <button className="btn is-warning" onClick={() => goTo(5)}>
            All Done!
          </button>
        </div>
      );
    }
  },
  {
    selector: "[data-step=verify]",
    content:
      "Nice 🎉 🎉! Now we're going to run through a few things to verify everything was setup properly"
  }
];

export default tourConfig;
