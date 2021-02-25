import styled from "styled-components";

export default styled.div`
  width: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  header {
    padding: 0 1rem;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);

    nav {
      display: flex;

      a {
        flex: row;
        padding: 1rem;
        text-decoration: none;
        font-weight: 600;
      }
    }
  }

  main {
    min-height: calc(100vh - 15rem);
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    flex-direction: column;

    text-align: center;
    h1 {
      font-size: 2rem;
    }
    h3 {
      1.2rem;
    }
    h1, h3 { margin: 1rem; margin-bottom: 0; }
  }

  .react-logo {
    width: 256px;
    height: 256px;
    margin-top: 2rem;
    pointer-events: none;
  }

  button {
    margin: 2rem 0;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.5s;
    border: none;

    &:focus {
      outline: none;
    }
  }

  @media only screen and (min-width: 900px) {
    nav {
      max-width: 896px;
      margin: auto;
    }

    main {
      max-width: 1024px;
      margin: auto;
      text-align: left;
      flex-direction: column-reverse;

      h1 { margin-top: 2rem; }
      h1, h3 { margin-left: 0; }
    }

    .content {
      align-self: flex-start;
      margin-left: 5rem;
    }

    .react-logo {
      width: 350px;
      height: 350px;
      margin: 5rem;
      margin-top: -10rem;
      margin-right: 10rem;
      align-self: flex-end;
    }
  }
`;
