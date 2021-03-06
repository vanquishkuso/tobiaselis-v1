import styled from "styled-components";
import { Link } from "gatsby";

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#f8f8f8" : "#077bf1")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "16px 40px" : "10px 32px")};
  color: ${({ primary }) => (primary ? "#272727" : "#f8f8f8")};
  font-size: ${({ big }) => (big ? "20px" : "16px")};
  outline: none;
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  letter-spacing: 1px;
  transition: 0.3s;
  border-radius: ${({ round }) => (round ? "50px" : "none")};
  &:hover {
    background: ${({ primary }) => (primary ? "#077bf1" : "#f26a2e")};
    color: ${({ primary }) => (primary ? "#f8f8f8" : "#272727")};
    transform: translateY(-2px);
  }
`;
