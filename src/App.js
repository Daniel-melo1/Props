import React, { Component } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main.js";

export default class Props extends Component {
  render() {
    return (
      <>
        <Header title="Informações" />
        <Main
          nome="Daniel Melo"
          idade="18"
          queroEstudar="Full-stack"
        />
      </>
    );
  }
}
