import React from "react";
import LightTheme from "../theme/Light";
import DarkTheme from "../theme/Dark";
import reactLogo from "../assets/images/react-logo.png";
import { addPaddingLimit } from "../utils/common";

export type AppProps = Partial<React.HTMLAttributes<HTMLDivElement>> & {
  theme: "light" | "dark";
  verticalOffset?: number;
  horizontalOffset?: number;
  moveEffect?: any;
  moveEffectDelay?: number;
};

const App = ({
  theme,
  verticalOffset = window.innerWidth,
  horizontalOffset = window.innerHeight,
  moveEffect = false,
  moveEffectDelay = 1000,
  ...props
}: AppProps) => {
  const StyledContainer = theme === "light" ? LightTheme : DarkTheme;
  return (
    <StyledContainer
      {...props}
      style={{
        animation: moveEffect && `${moveEffectDelay}ms initialAppAnimation`,
        clip: `
          rect(
            0px,
            ${addPaddingLimit(verticalOffset, window.innerWidth, 0)}px,
            ${addPaddingLimit(horizontalOffset, window.innerHeight, 0)}px,
            0px
          )`,
      }}
    >
      <header>
        <nav>
          <a href="https://github.com/jgdev" target="githug:jgdev">
            Github
          </a>
          <a href="https://blog.jgdev.info" target="blog:jgdev">
            Blog
          </a>
          <a
            href="https://linkedin.com/in/joan-peralta"
            target="linkedin:jgdev"
          >
            LinkedIn
          </a>
        </nav>
      </header>
      <aside>
        <section>
          <main>
            <img
              src={reactLogo}
              className="react-logo"
              alt="React fancy logo"
            />
            <div className="content">
              <h1>React Theme Split Demo</h1>
              <h3>Just something I did for fun</h3>
              <button>An awesome button</button>
            </div>
          </main>
        </section>
        <section></section>
      </aside>
      <footer></footer>
    </StyledContainer>
  );
};

export default App;
