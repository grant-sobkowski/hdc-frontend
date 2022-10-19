import React from "react";
import Plot from "react-plotly.js";

export default function Graph(props){
  const baseData = [
    {
      type: "scatter",
      mode: "lines",
      fill: "tozeroy",
      fillcolor: "#f98c71",
      line:{
        color: "#FFFFFF",
        shape: "spline"
      },
      textfont: {
        size: 18,
        color: '#FFFFFF'
      }
    },
  ];
  const baseLayout = {
    width: 400, 
    height: 400, 
    title: 'New Deaths',
    paper_bgcolor: "#1a202c",
    plot_bgcolor: "#1a202c",
    bordercolor: "#1a202c",
    font: {
      color: "#FFFFFF"
    },
    margin: {
      pad: 10
    },
    xaxis: {
      zeroline: false,
      showline: false,
      linecolor: "#1a202c",
      gridcolor: "#1a202c",
    },
    yaxis: {
      zeroline: false,
      linecolor: "#1a202c",
      gridcolor: "#1a202c",
    }
  }
  //merges x and y values from props with styling
  const mergedData = [{...baseData[0], ...props.data[0]}]
  console.log(mergedData)
  let layout = baseLayout;
  return (
    <Plot
      data={mergedData}
      layout={layout}
    />
  );
};