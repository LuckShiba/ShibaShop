import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text}
}`;
