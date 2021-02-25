import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import Divider from "./components/Divider";

import reportWebVitals from "./reportWebVitals";

// const Code = styled((props: any) => <div {...props} />)`
//   position: absolute;
//   background: black;
//   width: 100%;
//   z-index: 3;
//   bottom: 0;
// `;

const Container = () => {
  const initialVertialOffset =
    window.innerWidth / 2 + (window.innerWidth >= 900 ? 180 : 0);
  // const initialHorizontalOffset =
  //   window.innerHeight / 2 + (window.innerHeight >= 900 ? 160 : 130);

  const [verticalOffset, setVerticalOffset] = React.useState(
    initialVertialOffset
  );
  // const [horizontalOffset, setHorizontalOffset] = React.useState(
  //   initialHorizontalOffset
  // );

  return (
    <>
      <App theme="light" />
      <App
        theme="dark"
        {...{
          verticalOffset,
          // horizontalOffset,
        }}
      />
      <Divider
        onChangeOffset={setVerticalOffset}
        initialOffset={initialVertialOffset}
      />
      {/* <Code
        style={{
          top: `${horizontalOffset}px`,
        }}
      >
        <AceEditor
          mode="javascript"
          theme="terminal"
          name="code-editor"
          editorProps={{ $blockScrolling: true }}
          fontSize={18}
          value={codeEditorContent()}
        />
      </Code> */}
      {/* <Divider
        onChangeOffset={setHorizontalOffset}
        initialOffset={initialHorizontalOffset}
        direction="horizontal"
        style={{ zIndex: 4 }}
      /> */}
    </>
  );
};

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
