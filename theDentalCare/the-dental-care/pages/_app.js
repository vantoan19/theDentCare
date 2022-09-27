import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html,
    body, input, textarea, button {
        padding: 0;
        margin: 0;
        font-family: Raleway;
        font-size: 10px;
    }
    html,
    body {
      height: 100%;
    }

    * {
        box-sizing: border-box;
    }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp