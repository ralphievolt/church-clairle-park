"use client";

import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  HStack,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Inter, Playfair_Display_SC } from "next/font/google";

import Image from "next/image";
import logo from "@/public/PCC_RGB_BurningBush.ico";

const playfair = Playfair_Display_SC({
  weight: "700",
  subsets: ["latin"],
});

interface Props {
  children: React.ReactNode;
}

const NavLink = (props: Props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        px={4}
        boxShadow="md"
        color={"white"}
        borderRadius={0}
        // bg={"blue.400"}
        bgGradient='linear(to-r, white, blue.400)'
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack>
            <Image src={logo} alt="Picture of the author" width={55} height={100} />

            <Box className={playfair.className} fontSize="xl" color="blue.600">
              Clairlea Park Presbyterian Church
            </Box>
          </HStack>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Text fontSize={"md"}>Contact us: (416) 759-3901</Text>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
