import React, { Component } from "react";
import Header from "./components/Header";
import { Container } from "@material-ui/core";
import Routes from "./routes";

class App extends Component {
  render() {
    return (
      <Container className="App" component="article" maxWidth="md">
        <Header />
        <Routes />
      </Container>
    );
  }
}

export default App;
