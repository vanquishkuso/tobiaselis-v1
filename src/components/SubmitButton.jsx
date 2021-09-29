import styled from "styled-components";

export const SubmitButton = styled.button`
  background: ${({ primary }) => (primary ? "#40248b" : "#077bf1")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "16px 40px" : "10px 32px")};
  color: #fff;
  font-size: ${({ big }) => (big ? "20px" : "16px")};
  outline: none;
  border: none;
  min-width: 100px;

  text-decoration: none;
  letter-spacing: 1px;
  transition: 0.3s;

  border-radius: ${({ round }) => (round ? "50px" : "none")};
  &:hover {
    background: ${({ primary }) => (primary ? "#077bf1" : "#f26a2e")};
    transform: translateY(-2px);
    cursor: pointer;
  }

  &:disabled:hover {
    background: ${({ primary }) => (primary ? "#077bf1" : "#f26a2e")};
    transform: translateY(0px);
    cursor: cursor;
  }

  &:disabled {
    opacity: 30%;
    background: ${({ primary }) => (primary ? "#40248b" : "#f26a2e")};
    transform: translateY(0px);
    cursor: cursor;
  }
`;
