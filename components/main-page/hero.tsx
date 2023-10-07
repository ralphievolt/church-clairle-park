"use client";
import {
  Button,
  Center,
  Container,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface HeroSectionProps {}

export const HeroSection: FunctionComponent<HeroSectionProps> = () => {
  return (
    <Container maxW={"5xl"} mt={10}>
    
        <VStack>
          <Heading size="xl" mb={4} color="blue.400" textAlign={"center"}>
            Welcome to Clairlea Park Presbyterian Online Ministry
          </Heading>

          <Text fontSize="xl" color="gray.700">
            Our church is located in the east end of Toronto and is dedicated to
            serving our neighbours through worship, teaching and outreach. We
            welcome the opportunity to worship with you and hope that you will
            become part of this warm and vibrant community.
          </Text>

  

          <Text fontSize="xl" color="gray.500">
            "A church with a big heart in a small" - Rev. Dr. J. Kevin Livingston
          </Text>
        </VStack>

    </Container>
  );
};
