"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from "react-icons/fc";

import { LuChurch } from "react-icons/lu";
import { FaBible,FaCross } from "react-icons/fa";
import { FaPeopleLine,FaHandsHoldingChild ,FaPeopleRoof} from "react-icons/fa6";

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
}

const Card = ({ heading, description, icon }: CardProps) => {
  return (
    <Box
      maxW={{ base: "full", md: "300px" }}
      borderWidth="1px"
      borderRadius="lg"
      mb={50}
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        {/* <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
          Learn more
        </Button> */}
      </Stack>
    </Box>
  );
};

export default function Schedule() {
  return (
    <Box p={4} mt={10} h={"80%"}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading
          fontSize={{ base: "2xl", sm: "4xl" }}
          fontWeight={"bold"}
          color="red.300"
        >
          Ministries
        </Heading>
        {/* <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis obcaecati ut
          cupiditate pariatur, dignissimos, placeat amet officiis.
        </Text> */}
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"Sunday Worship"}
            icon={<Icon as={LuChurch} w={10} h={10} color={"blue.200"} />}
            description={"Our in person worship service begins at 10.30am. We look forward to welcoming you!"}
          />

          <Card
            heading={"HOLY COMMUNION"}
            icon={<Icon as={FaCross} w={10} h={10} color={"purple.400"} />}
            description={
              "The Sacrament of Holy Communion is celebrated the first Sunday of every month. All are invited to the Lord's table. Clairlea Park offers communion to children and youth at the consent of their parents and guardians."
            }
          />

          <Card
            heading={"Bible Study"}
            icon={<Icon as={FaBible} w={10} h={10} color={"orange.200"} />}
            description={"Every Tuesday night at 7:00 PM in the church."}
          />

          <Card
            heading={"W.in G.S. [Woman in God's Service]"}
            icon={<Icon as={FaPeopleRoof} w={10} h={10} color={"orange.400"} />}
            description={
              "The ladies of WinGS continue to meet virtually the last Friday of the month at 7:00pm. Come and be part of this enthusiastic, motivated group. A warm welcome awaits you."
            }
          />

          <Card
            heading={"Choir"}
            icon={<Icon as={FaPeopleLine} w={10} h={10} color={"blue.500"} />}
            description={
              "The Congregation of Clairlea enjoy a full musical program provided by our choir led by Music Director Karen Gonzalez. In addition to our regular Sunday Service, our choir performs in our special Christmas Candlelight service. Music ranges from traditional to modern sacred. Choir practices are held Thursday evenings from 7.00pm - 8.00pm and Sunday mornings at 10.00am."
            }
          />

          <Card
            heading={"Sunday School"}
            icon={<Icon as={FaHandsHoldingChild} w={10} h={10} color={"green.500"} />}
            description={`On Sunday morning following a "Childrens Time" in the service, all children are welcome to join in the Sunday school program in the lower hall. Clairlea offers a safe nurturing environment. We believe each child is special and valued. You are invited to join us any Sunday.`}
          />
        </Flex>
      </Container>
    </Box>
  );
}
