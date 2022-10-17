import { Box, Text, Image, Heading, Center, Grid, GridItem} from "@chakra-ui/react";
import React, { useState } from "react";
import data from "../data.json";
import handwashing from "../img/handwash.png"
import stringency from "../img/stringency.png"

export default function Sidebar(props){
  let country = data[props.country];
  const GetData = function (){
    if (props.country === ""){
      return(
      <Text fontSize='1.5em' as='b' w='100%'
      display='block' justifyContent='center'
      color='#f98c71'> 
        Please select a country.
      </Text>);
    }
    if(!country){
      return (
      <Text fontSize='1.5em' as='b' w='100%'
      display='block' justifyContent='center'
      color='#f98c71'> 
        No Data found for {props.country}
      </Text>
      );
    }
    let name = country["name"];
    //Get Policies
    //TODO: Policy Validation
    let polArray = Object.values(country["policies"]);
    const Policies = polArray.map( 
      (policy, idx)=> <CreatePolicy policy={policy} key={idx} name={name}/>
    )
    //TODO: Add Statistics
    return Policies
  }
  let logos = {
    'Handwashing': handwashing,
    'Stringency Index': stringency,
    //TODO: Add Logos for each new policy type
  }
  const CreatePolicy = function(props){
    let policy = props.policy;
    if(!policy["name"]) return -1;
    let logo = logos[policy["name"]];
    return(
      <Grid h='220px' w='100%'
      templateRows='repeat(10, 1fr)' 
      templateColumns='repeat(10, 1fr)'>
        <GridItem colSpan={10} rowSpan={1}>      
          <Text fontSize='1.5em' as='b' w='100%'
            display='block' justifyContent='center'
            color='#f98c71'>
            {policy["name"]}
          </Text>
        </GridItem>
        <GridItem colSpan={2} rowSpan={9}
         h="100%" m='auto'
        w='fit-content'>
          <Center h='100%'>
          <Image src={logo} h='fit-content' w='86px'
          alt={policy["name"]} />
          </Center>
        </GridItem>

        <GridItem colSpan={8} rowSpan={9}
        h='100%'>
          <Center w='100%' h='100%'>
          <Box ml='10px' ps='6px' w='100%' maxH='100%'
           display='inline-block'>
            <Text w='100%' maxH='30%' mt='6px'
            fontSize='17px'>
              {policy["body"]}
            </Text>
            <Text maxH='40%' mt='6px'
            fontSize='17px'>
              CPE Estimates that if {props.name} significantly increased 
              it's {policy["name"]} the rate of new deaths would decrease
              by about {100*policy["influence"]}%.
            </Text>
          </Box>
          </Center>
        </GridItem>
      </Grid>
    )
  }

  return(
    <Box h='100%' w='30%' border='1px' p='0px 15px'
    float='left' display='inline-block'>
      <Text w='100%' mb='30px' mt='10px' fontSize='18px'
      float='left' borderBottom='2px' display='block'>
        Selected Country: {props.country}
      </Text>
      {/* Example policy */}
    <GetData/>
    </Box>
  )
}