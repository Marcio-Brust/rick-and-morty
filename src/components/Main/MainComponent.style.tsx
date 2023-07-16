import styled from "styled-components";

export const MainStyle = styled.main`
  box-sizing: border-box;
  padding: 10px;
  display: grid;
  grid-template-columns: ${({ ["aria-expanded"]: media }) =>
    media ? "1fr" : "500px 500px"};
  justify-items: center;
  justify-content: center;
  gap: 20px;
  color: rgb(255, 255, 255);
  background: rgb(32, 35, 41);
  padding-bottom: 100px;

  img {
    border-radius: ${({ ["aria-expanded"]: media }) =>
      media ? "10px" : "10px 0 0 10px"};
  }

  h1 {
    font-size: ${({ ["aria-expanded"]: media }) =>
      media ? "1.2rem" : "1.5rem"};
  }

  main {
    display: ${({ ["aria-expanded"]: media }) => (media ? "grid" : "flex")};
    background: #41444a;
    border-radius: 10px;
    height: ${({ ["aria-expanded"]: media }) => (media ? "auto" : "200px")};
    width: ${({ ["aria-expanded"]: media }) => (media ? "300px" : "500px")};
    gap: 20px;
    align-items: center;
  }

  section {
    gap: ${({ ["aria-expanded"]: media }) => (media ? "10px" : "15px")};
    border-radius: 10px;
    display: grid;
    padding: ${({ ["aria-expanded"]: media }) => (media ? "10px" : "0px")};
  }
  p {
    font-size: 1rem;
    font-size: ${({ ["aria-expanded"]: media }) =>
      media ? "0.9rem" : "1.2rem"};
  }

  span {
    color: rgb(158, 158, 158);
    font-weight: 500;
    font-size: ${({ ["aria-expanded"]: media }) =>
      media ? "0.9rem" : "1.2rem"};
  }
`;
