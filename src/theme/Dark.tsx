import styled from "styled-components";
import BaseTheme from "./Base";

export default styled(BaseTheme)`
  background-color: #24292e;

  *,
  header nav a {
    color: white;
  }

  button {
    background: #177dff;
    color: white;

    &:hover {
      background: #4899ff;
    }

    &:active {
      background: #004eb1;
    }
  }
`;
