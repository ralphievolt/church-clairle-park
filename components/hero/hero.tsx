"use client"
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
      <Container maxW="container.lg">
        <Center p={4} minHeight="70vh">
          <VStack>
            <Container maxW="container.md" textAlign="center">
              <Heading size="2xl" mb={4} color="gray.700">
              Clairlea Park Presbyterian Church

              </Heading>
  
              <Text fontSize="xl" color="gray.500">
               New website is coming for our church. Keep praying
              </Text>
  
              <Button
                mt={8}
                colorScheme="brand"
                // onClick={() => {
                //   window.open("<https://launchman.com>", "_blank");
                // }}
              >
                Enter soon
              </Button>
  
              <Text my={2} fontSize="sm" color="gray.500">
              A church with a big heart in a small  - Rev. Dr. J. Kevin Livingston
              </Text>
            </Container>
          </VStack>
        </Center>
      </Container>
    );
  };
  