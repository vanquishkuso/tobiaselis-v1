import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { MenuData } from "../data/MenuData";
import styled from "styled-components";

const Header = () => {
  const [bgColor, setBgColor] = useState();
  const [openMenu, setOpenMenu] = useState(false);

  const changeNavBg = (e) => {
    if (window.scrollY > 400) {
      setBgColor("#231436");
    } else {
      setBgColor("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
  }, []);

  return (
    <Nav style={{ backgroundColor: bgColor }}>
      <NavHeaderLink
        to="hem"
        key="home"
        style={{ fontSize: "1.5rem", fontWeight: "bold" }}
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-50}
        duration={800}
      >
        tobiaselis
      </NavHeaderLink>

      <BarWrapper onClick={() => setOpenMenu(!openMenu)}>
        <Bars className={openMenu ? "isOpened" : "isClosed"} />
        <Bars className={openMenu ? "isOpened" : "isClosed"} />
        <Bars className={openMenu ? "isOpened" : "isClosed"} />
        <BarTitle className={openMenu ? "isOpened" : "isClosed"}>
          {openMenu ? "stäng" : "meny"}
        </BarTitle>
      </BarWrapper>

      <MobileMenu className={openMenu ? "isOpened" : "isClosed"}>
        <MobileItemWrapper>
          {MenuData.map((item, index) => (
            <MobileNavLink
              to={item.link}
              key={index}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-50}
              duration={800}
              style={{ color: "#f8f8f8" }}
              onClick={() => setOpenMenu(!openMenu)}
            >
              {item.title}
            </MobileNavLink>
          ))}
        </MobileItemWrapper>
      </MobileMenu>

      <Menu>
        {MenuData.map((item, index) => (
          <NavLink
            to={item.link}
            key={index}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
          >
            {item.title}
          </NavLink>
        ))}
      </Menu>
    </Nav>
  );
};

export default Header;

const MobileMenu = styled.div`
  display: none;
  background-color: #231436;
  transition: 0.5s ease;
  position: absolute;
  /* height: 110vh;
  width: 50vw;
  z-index: 10; */
  margin-top: -1em;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  &.isOpened {
    transition: all 0.5s ease;
    transform: translateX(0px);
    z-index: 50;
    height: 110vh;
    width: 70vw;
    top: 0;
    left: 0;
    opacity: 1;
  }

  &.isClosed {
    height: 110vh;
    width: 70vw;
    transition: all 0.5s ease;
    transform: translateX(-800px);
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const MobileItemWrapper = styled.div`
  z-index: 20;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MobileNavLink = styled(Link)`
  padding: 1rem;
  font-size: 2.5rem;
  cursor: pointer;

  &:hover {
    background-color: #f8f8f8;
    color: #272727 !important;
    border-radius: 10px;
  }
`;
const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: sticky;
  top: 0;
  transition: 0.5s ease;

  margin: 0 auto;
`;

const NavHeaderLink = styled(Link)`
  letter-spacing: 2px;
  color: #f8f8f8;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  height: 100%;
  font-size: 1.5rem !important;
  cursor: pointer;
  z-index: 12;

  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }
`;

const BarWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  z-index: 100;
`;
const Bars = styled.div`
  display: none;
  border: #f8f8f8 solid 2.5px;
  background-color: #f8f8f8;
  transition: 0.5s ease;
  @media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
  }

  :nth-child(1) {
    &.isOpened {
      margin-top: 0.5rem;
      transform: rotate(45deg);
    }
  }
  :nth-child(3) {
    margin-top: 0.39rem;
    &.isOpened {
      margin-top: -0.25rem;
      transform: rotate(135deg);
    }
  }
  :nth-child(2) {
    margin-top: 0.39rem;
    &.isOpened {
      margin-top: 3rem;
      display: none;
    }
  }
`;
// const Bars = styled(FaBars)`
//   display: none;
//   z-index: 100;

//   @media screen and (max-width: 768px) {
//     color: #f8f8f8;
//     display: block;
//     position: absolute;
//     top: 0;
//     left: 0;
//     transform: translate(50%, 50%);
//     font-size: 2rem;
//     cursor: pointer;
//   }

//   &.isOpened {

//   }

//   &.isClosed {

//   }
// `;

const BarTitle = styled.p`
  color: #f8f8f8;
  letter-spacing: 1px;
  font-size: 0.7rem;
  font-weight: bold;
  margin-top: 0.3rem;
  display: none;
  &.isOpened {
  margin-top: 1rem;
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const Menu = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 0px;
  z-index: 11;
`;

const NavLink = styled(Link)`
  letter-spacing: 2px;
  color: #f8f8f8;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  height: 100%;
  cursor: pointer;
  z-index: 12;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
