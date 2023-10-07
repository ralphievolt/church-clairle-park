"use client";

import {
  Box,
  Center,
  VStack,
  Button,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
  Text,
  AbsoluteCenter,
} from "@chakra-ui/react";
// import GoogleMapReact from "google-map-react";
import Image from "next/image";
import map from "@/public/map.png";

export default function Schedule() {
  return (
    <Box as={Container} maxW="5xl" mt={14} p={4}>
      <VStack alignItems="flex-start" spacing="20px">
        <chakra.h2 fontSize="3xl" fontWeight="700">
          Our Location
        </chakra.h2>
        <Text> 3236 St Clair Avenue East, Scarborough, ON M1L 1V7</Text>

        <Box position="relative" h={200}>
          <AbsoluteCenter p="4" color="white" axis="both">
            <Image src={map} alt="Church Location" width={600} height={200} />
          </AbsoluteCenter>
        </Box>
      </VStack>

      <Divider mt={12} mb={12} />
    </Box>
  );
}
