import React from "react";
import AppliBar from "./shared/AppliBar";
class App extends React.Component {
  render() {
    const classes = { classes: "class" };
    return (
      <div>
        <AppliBar classes={classes} />
      </div>
    );
  }
}

export default App;
