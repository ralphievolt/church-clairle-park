"use client";
import {
    Box,
  Button,
  Center,
  Container,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";
// import ReactPlayer from 'react-player'
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
interface HeroSectionProps {}

export const YTService: FunctionComponent<HeroSectionProps> = () => {
  return (
    <Box bg="blue.100" w="full" >
    <Container maxW={"5xl"} pt={30}  pb={50} >
      <VStack>
        <Heading size="lg" mb={4}  textAlign={"center"}>
            Online Service
        </Heading>
        <Text>What spiritual gifts are... and are not 1 Cor. 12:1-7 (Sept 24, 2023)</Text>
        <ReactPlayer url='https://www.youtube.com/watch?v=p8geCu9euvc&autoplay=1&controls=1&loop=1&mute=1' />

      </VStack>
    </Container>
    </Box>
  );
};
