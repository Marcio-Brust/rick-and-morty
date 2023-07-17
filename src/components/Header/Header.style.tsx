import styled from "styled-components";

export const HeaderStyle = styled.header`
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px #444;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      padding: 20px 10px;
      color: initial;
      font-weight: 500;

      &:hover {
        color: gold;
      }
    }
  }
`;
