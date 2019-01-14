import React, { Component } from "react";
import { Box } from "@rebass/grid";
import styled from "styled-components";
import "./App.css";

const StyledBox = styled(Box)`
  background-color: yellow;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <StyledBox width={[1, 1 / 2, 1 / 2, 1 / 2]}>
          Should be 50% width on a large screen
        </StyledBox>
      </div>
    );
  }
}

export default App;
