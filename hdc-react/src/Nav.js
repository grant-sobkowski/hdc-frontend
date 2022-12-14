import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Flex,
  Button,
} from "@chakra-ui/react";

export const Nav = () => {
  // const { colorMode, toggleColorMode } = useColorMode();
  // const isDark = colorMode === "dark";
  return (
    <Flex>
      <Flex position="relative" top="1rem" left="1rem" align="center">
        {/* Desktop */}
        <Flex display={["none", "none", "flex", "flex"]}></Flex>
        {/* Mobile */}
        <Link to="/">
          <Button variant="ghost" aria-label="Home" my={5} w="100%"
          color="#f98c71" fontSize="20px">
            Home
          </Button>
        </Link>
        <Link to="/search">
          <Button variant="ghost" aria-label="Search" my={5} w="100%"
          color="#f98c71" fontSize="20px">
            Search
          </Button>
        </Link>
        <Link to="/about">
          <Button variant="ghost" aria-label="About" my={5} w="100%"
          color="#f98c71" fontSize="20px">
            About
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Nav;
