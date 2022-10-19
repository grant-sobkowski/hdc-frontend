import { React, useState, useEffect } from "react";
import "../styles/search.css";
import { Box, Flex } from "@chakra-ui/react";
import Map from "../components/Map.js";
import Sidebar from "../components/Sidebar.js";
// import ReactFullpage from "@fullpage/react-fullpage";

function Search() {
  const [country, setCountry] = useState("");

  // useEffect(() => {
  //   console.log('trigger use effect hook');
  //   <h1>{{country}}</h1>
  // }, country)

  return (
    <Flex w='100%' color="white">
        <Box w="100%" h="90vh">
          <Map setCountry={setCountry} />
          <Sidebar country={country} />
        </Box>
    </Flex>
  );
}

export default Search;
