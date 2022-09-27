import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Raleway';
        src: url('/fonts/ProximaNova-Regular.woff') format('woff');
        font-style: normal;
        font-weight: 400;
        font-display: swap;
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