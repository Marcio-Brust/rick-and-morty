import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 *{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family: 'Roboto',sans-serif;
}

li{
  list-style:none
}

a{
  text-decoration:none;
}

image{
  object-fit:cover;
  max-width:100%;
}
`;
