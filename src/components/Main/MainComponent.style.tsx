import styled from "styled-components";

export const MainStyle = styled.main`
  padding: 10px;
  display: grid;
  grid-template-columns: 500px 500px;
  justify-content: center;
  gap: 20px;
  color: rgb(255, 255, 255);
  background: rgb(32, 35, 41);

  img {
    border-radius: 10px 0 0 10px;
  }
  main {
    display: flex;
    background: #41444a;
    border-radius: 10px;
    height: 200px;
    width: 500px;
    gap: 20px;
    align-items: center;
  }

  section {
    gap: 15px;
    border-radius: 10px;
    display: grid;
  }
  p {
    font-size: 1rem;
  }

  span {
    color: rgb(158, 158, 158);
    font-weight: 500;
  }
`;
