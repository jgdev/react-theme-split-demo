import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Divider from "./components/Divider";
import reportWebVitals from "./reportWebVitals";

import "./index.css";

const Container = React.memo(() => {
  const initialOffset = {
    vertical: window.innerWidth / 2,
    horizontal: window.innerHeight / (window.innerHeight >= 900 ? 160 : 130),
  };

  const [offset, setOffset] = React.useState(initialOffset);
  const setVerticalOffset = (value: number) =>
    setOffset({ ...offset, vertical: value });

  return (
    <>
      <App theme="light" />
      <App theme="dark" verticalOffset={offset.vertical} moveEffect />
      <Divider
        onChangeOffset={setVerticalOffset}
        initialOffset={offset.vertical}
        moveEffect
      />
    </>
  );
});

ReactDOM.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
