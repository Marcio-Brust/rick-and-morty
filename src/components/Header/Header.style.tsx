import styled from "styled-components";

export const HeaderStyle = styled.header`
  height: 250px;

  h1 {
    text-align: center;
    font-size: 5rem;
    margin-top: 20px;
  }
  nav {
    display: flex;
    justify-content: space-between;
  }
  div {
    display: flex;
    justify-content: space-between;
    margin-right: 30px;

    a {
      padding: 20px 10px;
      height: 50px;
      color: initial;
      font-weight: 500;

      &:hover {
        color: gold;
      }
    }
  }
`;
