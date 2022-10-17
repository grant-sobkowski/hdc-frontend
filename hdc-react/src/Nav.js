import { useState } from "react";
import { Link } from "react-router-dom";
import {
  useColorMode,
  Switch,
  Flex,
  Spacer,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [display, changeDisplay] = useState("none");
  return (
    <Flex>
      <Flex position="relative" top="1rem" left="1rem" align="center">
        {/* Desktop */}
        <Flex display={["none", "none", "flex", "flex"]}></Flex>
        {/* Mobile */}
        <Link to="/">
          <Button variant="ghost" aria-label="Home" my={5} w="100%">
            Home
          </Button>
        </Link>
        <Link to="/search">
          <Button variant="ghost" aria-label="Search" my={5} w="100%">
            Search
          </Button>
        </Link>
        <Link to="/about">
          <Button variant="ghost" aria-label="About" my={5} w="100%">
            About
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Nav;
