
import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      {/* <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        GeeksforGeeks: A Computer Science Portal for Geeks
      </h1> */}
      <Container>
        <Row>
          <Column>
            <Heading>
            <FooterLink href='/'>Home </FooterLink>
            </Heading>
          </Column>
          <Column>
            <Heading>
            <FooterLink href='/About'>About Me </FooterLink>
            </Heading>
          </Column>
          <Column>
            <Heading>
            <FooterLink href='/Projects'>My Projects </FooterLink>
            </Heading>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="https://github.com/shonhatcher" target = '_blank'>
              <i className="fab fa-github">
                <span style={{ marginLeft: "10px" }}>
                  Github
                </span>
              </i>
            </FooterLink>
            <FooterLink href="http://www.linkedin.com/in/shon-hatcher-62bb06111" target = '_blank'>
              <i className="fab fa-linkedin">
                <span style={{ marginLeft: "10px" }}>
                  Linkedin
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;