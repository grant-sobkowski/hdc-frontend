import React from "react";
import { Box, Flex, Text, Heading, Center} from "@chakra-ui/react";
// import ReactFullpage from "@fullpage/react-fullpage";

function Home() {
  return (
    <Box>
      <Center>
      <Heading>Covid Policy Estimator</Heading>
      </Center>
      <Center marginTop='30px' >
      <Flex>
        <Text fontSize='lg' as='i'>Covid Policy Estimator (CPE) can help policy makers around the world maker better decisions.</Text>
      </Flex>
      </Center>
    </Box>
  );
}

export default Home;
