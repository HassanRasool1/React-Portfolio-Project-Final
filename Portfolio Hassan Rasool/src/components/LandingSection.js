import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, It's Hassan!";
const bio1 = "A frontend developer";
const bio2 = "Specialised in React ";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="black"
  >
    <VStack m={8}>
      <Avatar size="xxl" src="https://scontent-mct1-1.xx.fbcdn.net/v/t39.30808-6/278233778_3243686085861889_5754645702623621132_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGStKhZPCYf1VhjdOVixZm1v6FP_jLp0Zm_oU_-MunRmYCBSWjzHxeju0b0fBCosA20yIf7H-PhuJgK1Ez2TuGO&_nc_ohc=_aquoI-ob04AX9xFrYl&_nc_ht=scontent-mct1-1.xx&oh=00_AfD4bZwszaxoRfMY5cGWPvOhgtDCQXweAiwuD5ITefAYbw&oe=659207E3" />
      <Heading as="h4" size="lg">
        {greeting}
      </Heading>
    </VStack>
    <VStack>
      <Heading as="h1">{bio1}</Heading>
      <Heading as="h1">{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
