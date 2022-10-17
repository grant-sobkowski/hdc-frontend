import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Plot from "react-plotly.js";

const TestPlot = (props) => {
  return (
    <Plot
      data={props.data}
      layout={{ width: 500, height: 500, title: props.title }}
    />
  );
};

export default TestPlot;
