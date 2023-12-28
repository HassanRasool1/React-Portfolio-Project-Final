import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Pikkit",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    getImageSrc: () => require("../images/pikkit.png"),
  },
  {
    title: "Spectrum",
    description:
      "Spectrum, A handy tool for pre build fuction/Extensions for Payment Methods . 🔥️",
    getImageSrc: () => require("../images/Spectrum.png"),
  },
  {
    title: "COVID-19 Live Counter",
    description:
      "A Live COVID-19 Pakistan Sepecfic Cases Counter. 🔥️",
    getImageSrc: () => require("../images/COVID_PAKISTAN.jpg"),
  },
  {
    title: "DashBoard",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/DashBoard.png"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#0a192d"
      isDarkBackground
      p={10}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={10}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
