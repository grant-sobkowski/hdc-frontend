import React from "react";
import { Box, Flex, Text, Heading, Center} from "@chakra-ui/react";
// import ReactFullpage from "@fullpage/react-fullpage";

function Home() {
  return (
    <Box>
      <Center>
        <Heading>About</Heading>
      </Center>
      <Center marginTop='30px' >
        <Flex>
          <Text fontSize='lg' as='i'>Covid Policy Advisor is still under development! This page will be home to more information in the future.
          For now, try out the search page!</Text>
        </Flex>
      </Center>
    </Box>
  );
}

export default Home;
