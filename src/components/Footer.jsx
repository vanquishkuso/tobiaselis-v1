import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <LeftWrapper>
          <Description>
            <h2>Utveckling med omtanke</h2>
            <p>Smidiga, snabba system och webbplatser</p>
          </Description>
        </LeftWrapper>
        <RightWrapper>
          <LinkWrapper>
            <Items>
              <h3
                style={{
                  marginBottom: "1rem",
                  color: "#f8f8f8",
                  letterSpacing: "1px",
                }}
              >
                Sidlänkar
              </h3>
              <FooterLink to="/">Hem</FooterLink>
              <FooterLink to="/">Projekt</FooterLink>
              <FooterLink to="/">Kontakt</FooterLink>
            </Items>
          </LinkWrapper>

          <LinkWrapper>
            <Items>
              <h3
                style={{
                  marginBottom: "1rem",
                  color: "#f8f8f8",
                  letterSpacing: "1px",
                  textAlign: "left",
                }}
              >
                Projekt
              </h3>
              <FooterLink to="/">Ophella</FooterLink>
              <FooterLink to="/">Ledstar</FooterLink>
              <FooterLink to="/">Kaguya</FooterLink>
            </Items>
          </LinkWrapper>
        </RightWrapper>
      </Container>
      <p style={{ textAlign: "center", color: "#585858", padding: "1rem"}}>Skapad av tobiaselis</p>
    </Wrapper>
  );
};

export default Footer;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  padding: 5rem calc((100vw - 1100px) / 2);

  justify-content: center;
  align-content: center;
  align-items: center;
  justify-items: center;

  @media screen and (max-width: 768px) {
  grid-template-columns: 1fr;
}
`;

const Wrapper = styled.div`
  background: #231436;

`;

const LinkWrapper = styled.div`
  @media screen and (max-width: 768px) {
  }
`;
const LeftWrapper = styled.div``;
const RightWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5rem;
  text-align: left;
  margin-right: auto;

  @media screen and (max-width: 768px) {
    grid-gap: 3rem;
    margin: 0 auto;
   
  }
`;
const Description = styled.div`
  letter-spacing: 1px;
  padding: 0rem;

  color: #f8f8f8;
  h2 {
    margin-bottom: 1rem;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    padding: 2rem;
    
  }
`;
const Items = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  padding: 1rem 0rem;

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`;
const FooterLink = styled(Link)`
  letter-spacing: 1px;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: #f8f8f8;
  margin-right: auto;
  &:hover {
    color: #f26a2e;
    transition: 0.3s ease-out;
  }
`;
