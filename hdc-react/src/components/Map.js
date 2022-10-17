import React from "react";
import { Box } from "@chakra-ui/react";
import { ComposableMap, Geographies} from "react-simple-maps"
import Geography from './Geography.js'
import '../styles/map.css';
// import { chakra } from "@chakra-ui/system"
// const ChakraGeography = chakra(Geography)


export default function Map(props){
  let geoUrl = 'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json'
  window.addEventListener("MyEventType", function(cevt) {
    console.log('custom click event, country = ', cevt.country)
  }, false)
  return(
    <Box id='map' h='100%' w='70%' border='1px' 
    float='left' display='inline-block'>
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
              key={geo.rsmKey} 
              geography={geo}
              onClick={()=>{props.setCountry(geo.id)}}
              style={{
                default: {
                  fill: "#EEE",
                  outline: "none !important"
                },
                hover: {
                  fill: "#BCBCBC"
                },
                pressed: {
                  outline: "none",
                  fill: '#f98c71'
                }
              }} />
            ))
          }
        </Geographies>
      </ComposableMap>
    </Box>
  )
}