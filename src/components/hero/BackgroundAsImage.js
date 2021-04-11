import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import logo from "images/logo.png";

// import Header, {
//   NavLink,
//   NavLinks,
//   PrimaryLink,
//   LogoLink,
//   NavToggle,
//   DesktopNavLinks,
// } from "../headers/light.js";
// import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";

import SignUp from "../../pages/Signup";

// const StyledHeader = styled(Header)`
//   ${tw`pt-8 max-w-none`}
//   ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
//     ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300 m-4`}
//   }
//   ${NavToggle}.closed {
//     ${tw`text-gray-100 hover:text-primary-500`}
//   }
// `;
const LogoImage = tw.img`h-16 mx-auto p-1`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  // background-image: url("https://images.unsplash.com/photo-1522071901873-411886a10004?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80");
  background-image: url("https://images.unsplash.com/photo-1617935081901-0611cc42dec5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-blue-500 opacity-25`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-2 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const SlantedBackground = styled.span`
  ${tw`relative text-red-500 px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 -z-10`}
  }
`;

export default () => {
  return (
    <div>
      <Container>
        <OpacityOverlay />
        <HeroContainer>
          {/* <StyledHeader /> */}

          <TwoColumn>
            <LeftColumn>
              <LogoImage src={logo} />
              <Heading>
                <div style={{ margin: 32 }}>
                  <SlantedBackground>
                    Quer conquistar sua independência financeira?
                  </SlantedBackground>
                  <br />
                  <span style={{ color: "#f56565" }}>
                    A Encontro é o lugar certo para você!
                  </span>
                  <br />
                </div>
              </Heading>
              {/* <PrimaryAction>Read Customer Stories</PrimaryAction> */}
            </LeftColumn>
            <RightColumn>
              <div
                style={{ marginTop: 256, marginLeft: 16, marginRight: 16 }}
              ></div>
            </RightColumn>
          </TwoColumn>
        </HeroContainer>
      </Container>
      <SignUp />
    </div>
  );
};
