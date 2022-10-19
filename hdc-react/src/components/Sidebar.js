import { Box, Text, Image, Heading, Center, Grid, GridItem} from "@chakra-ui/react";
import React, { useState } from "react";
import Graph from "./Graph.js"
import data from "../json/data.json";
import getCountry from '../json/front-data.json';
import newData from '../json/new-data.json';
import graphData from '../json/graph-data.json';
import policies from '../json/policies.json';
import handwashing from "../img/handwash.png"
import stringency from "../img/stringency.png"
import age from '../media/old-man.png'
import gdp from '../media/coin.png'
import smoking from '../media/smoking.png'
import syringe from '../media/syringe.png'

export default function Sidebar(props){
  let country_name = getCountry[props.country]
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
    if(!getCountry[props.country]){
      return (
      <Text fontSize='1.5em' as='b' w='100%'
      display='block' justifyContent='center'
      color='#f98c71'> 
        No Data found for {props.country}
      </Text>
      );
    }
    let new_props = Object.entries(newData[country_name])
    let use_props = []
    for(let i=0; i<new_props.length; i++){
      if (policies[new_props[i][0]]){
        let content = policies[new_props[i][0]]
        let pusharray = []
        pusharray[0]=new_props[i][0]
        pusharray[1]={"name": content.name,"body": content.body}
        pusharray[2]=new_props[i][1]["percentchangeindeaths"][0][0]
        use_props.push(pusharray)
      }
    }
    console.log('useprops', use_props)
    use_props.sort(function(a, b) {
      return a[2] - b[2];
    });
    use_props = use_props.slice(0, 2)
    console.log(use_props)

    //Get Policies
    //TODO: Policy Validation
    // let polArray = Object.values(country["policies"]);
    // let stats = Object.values(country["statistics"])

    // const Policies = use_props.map( 
    //   (policy, idx)=> <CreatePolicy policy={policy} key={idx} name={name}/>
    // )
    const Policies = [
      <CreatePolicy policy={use_props[0]} key={0} name={country_name}/>,
      <CreatePolicy policy={use_props[1]} key={1} name={country_name}/>
    ]
    let graphdata = graphData[country_name]
    const Statistics = <CreateStat key={0} y={graphdata}/>
    
    //TODO: Add Statistics
    return [Policies, Statistics]
  }
  const CreateStat = function(props){
    console.log(props.y)
    let xaxis = Array.from(Array(33).keys())
    let yaxis = Object.values(props.y)
    let nums = [];
    for(let i=0; i<yaxis.length; i++){
      if (yaxis[i] != null){
        nums.push(yaxis[i])
      }
    }
    let mean;
    if(nums.length > 0){
      let sum = nums.reduce((accumulator, value) => {
        return accumulator + value;
      }, 0);
      mean = sum/nums.length
    }
    else{
      mean = 0;
    }
    let newyaxis = [];
    for(let i=0; i<yaxis.length; i++){
      if(yaxis[i] == null){
        newyaxis[i] = mean
      }
      else{
        newyaxis[i] = yaxis[i]
      }
    }
    
    console.log('yaxis', yaxis)
    let data = [{
      x: xaxis,
      y: newyaxis,
    }]

    return(
      <Grid h='300px' w='100%'
      templateRows='repeat(10, 1fr)' 
      templateColumns='repeat(10, 1fr)'>
        <Graph data={data} title="death"></Graph>
      </Grid>
    )
  }

  let logos = {
    'Handwashing': handwashing,
    'Stringency Index': stringency,
    'Economic Development': gdp,
    'Male Smoking': smoking,
    'Population Age': age,
    'Vaccination Percentage': syringe
    //TODO: Add Logos for each new policy type
  }
  const CreatePolicy = function(props){
    let policy = props.policy;
    let policyname = policy[1]["name"]
    if(!policyname) return -1;
    let logo = logos[policyname];
    let perc = Math.round(Math.abs(policy[2]))
    let whatcrease;
    if(policy[2] <= 0){
      whatcrease = "decrease"
    }
    else{
      whatcrease = "increase"
    }

    return(
      <Grid h='220px' w='100%'
      templateRows='repeat(10, 1fr)' 
      templateColumns='repeat(10, 1fr)'>
        <GridItem colSpan={10} rowSpan={1}>      
          <Text fontSize='1.5em' as='b' w='100%'
            display='block' justifyContent='center'
            color='#f98c71'>
            {policyname}
          </Text>
        </GridItem>
        <GridItem colSpan={2} rowSpan={9}
         h="100%" m='auto'
        w='fit-content'>
          <Center h='100%'>
          <Image src={logo} h='fit-content' w='86px'
          alt={policyname} />
          </Center>
        </GridItem>

        <GridItem colSpan={8} rowSpan={9}
        h='100%'>
          <Center w='100%' h='100%'>
          <Box ml='10px' ps='6px' w='100%' maxH='100%'
           display='inline-block'>
            <Text w='100%' maxH='30%' mt='6px'
            fontSize='17px'>
              {policy[1]["body"]}
            </Text>
            <Text maxH='40%' mt='6px'
            fontSize='17px'>
              CPE Estimates that if {props.name} increased it's {policyname} to 
              the 90th percentile of countries the rate of new deaths would {whatcrease} by 
              about {perc}%.
            </Text>
          </Box>
          </Center>
        </GridItem>
      </Grid>
    )
  }

  return(
    <Box h='100%' w='30%' p='0px 15px'
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