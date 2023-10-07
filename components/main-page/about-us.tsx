"use client";

import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

// Replace test data with your own
const features = Array.apply(null, Array(8)).map(function (x, i) {
  return {
    id: i,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
  };
});

export default function AboutUs() {
  return (
    <Box p={4} bg="red.300">
      {/* <Stack spacing={4} as={Container} textAlign={"center"}> */}
      <VStack
        pt={10}
        spacing="2"
        alignItems="flex-start"
        as={Container}
        maxW={"5xl"}
        
      >
        <Heading as="h2" pb={8}>Our History</Heading>
        <Text as="p" fontSize="lg" >
          A congregation is people, people with a faith and a vision.
        </Text>
        <Text as="p" fontSize="lg">
          A congregation is people, people with a faith and a vision. At 3:00pm
          on September 9th 1951, the congregation of Clairlea Park had it&apos;s
          beginnings in the corridors of Regent Heights Public School with 93
          people in attendance. The Reverend James Fyfe Donald of Emmanuel
          Presbyterian Church was the minister.
        </Text>
        <Text as="p" fontSize="lg">
          In May 1952, the ancient and uncared for cemetery at the corner of
          Pharmacy and St Clair was removed for the development of the Clairlea
          area.
        </Text>
        <Text as="p" fontSize="lg">
          In 1955, the Clairlea Park congregation was still waiting for a church
          building to be erected on their land. The dedication and perseverance
          of the congregation was strong, and finally on November 6th 1956 the
          construction was initiated with a sod turning ceremony. The
          cornerstone of the church was laid on December 16th 1956 at 3:00pm.
        </Text>

        <Text as="p" fontSize="lg">
          On Sunday April 14th 1957 the church building was dedicated to the
          Glory of God. Clairlea Park Presbyterian Church remains to this day
          dedicated to serving its community and sharing the good news of the
          gospel of Jesus Christ in this neighborhood.
        </Text>
        <Text as="p" fontSize="lg">
          As for the future one can but quote the words of Hudson Taylor -
          &lsquo;.....The future is as bright as the promises of God&rsquo;
        </Text>
      </VStack>

      {/* <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={'gray.600'}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container> */}
    </Box>
  );
}
