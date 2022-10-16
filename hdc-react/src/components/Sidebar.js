import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import jdata from "../data.json";

export default function Sidebar(props){
  const getData = function (data){
    console.log(data)
    console.log(data["USA"])
    console.log('country:', props["country"], typeof(props.country))
    if (props.country == "" || !data[props.country]){
      console.log('invalid country')
      return -1;
    }
    // let country = data[props.country];
    // let name = country["name"];
    // console.log(data[country])
    return JSON.stringify(data[props.country])
  }
  // renderArray(infoArray){
  //   let jsx = ''
  //   Loops through policy/stats
  //   for(let i=0; i<infoArray.length; i++){
  //     //loops through properties
  //     let properties = Object.keys(infoArray[i])
  //     let vals = Object.values(infoArray[i])
  //     for(let j=0; i<properties.length; j++){
  //       let prop_jsx = `<Text>${properties[j]}: ${vals[j]}</Text>`

  //     }
  //   }

  // }

  return(
    <Box h='100%' w='30%' border='1px' display='inline-block'>
      <Text w='100%' float='left'>
        Selected Country: {props.country}
      </Text>
      <Text float='left'>
        Data: {getData(jdata)}
      </Text>
    </Box>
  )
}