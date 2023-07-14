import styled from "styled-components";

export const ButtonStyle = styled.button`
  width: 70px;
  height: 70px;
  background: none;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  border: none;
  cursor: pointer;
`;
