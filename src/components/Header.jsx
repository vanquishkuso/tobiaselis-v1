import React from "react";
import { Link } from "gatsby";
import { FaBars } from "react-icons/fa";
import { MenuData } from "../data/MenuData";
import styled from "styled-components";


const Header = () => {

  return (
    <Nav>
      <NavLink to="/" style={{fontSize: "1.5rem", fontWeight: "bold"}}>tobiaselis</NavLink>
      <Bars />
      <Menu>
        {MenuData.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {item.title}
          </NavLink>
        ))}
      </Menu>
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  background: #231436;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`;

const Bars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    color: #f8f8f8;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(50%, 50%);
    font-size: 2rem;
    cursor: pointer;
  }
`;

const Menu = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 0px;
`;

const NavLink = styled(Link)`
  letter-spacing: 2px;
  color: #f8f8f8;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
