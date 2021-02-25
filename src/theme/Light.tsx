import styled from "styled-components";
import BaseTheme from "./Base";

export default styled(BaseTheme)`
  background: linear-gradient(
    0deg,
    rgba(0, 38, 128, 0.4595588235294118) 0%,
    rgba(255, 255, 255, 1) 100%
  );

  *,
  header nav a {
    color: #24292e;
  }

  button {
    background: #ff8f52;
    color: white;

    &:hover {
      background: #ffaa7c;
    }

    &:active {
      background: #a13900;
    }
  }

  .react-logo {
    filter: saturate(var(--value, 5));
  }
`;
