import {React, useState, useEffect} from "react";
import '../styles/search.css'
import {
  Box
} from '@chakra-ui/react'
import Header from '../components/Header.js'
import Map from '../components/Map.js'
import Sidebar from '../components/Sidebar.js'
// import ReactFullpage from "@fullpage/react-fullpage";

function Search() {
  const [country, setCountry] = useState("")

  // useEffect(() => {
  //   console.log('trigger use effect hook');
  //   <h1>{{country}}</h1>
  // }, country)
  
  return(
    <Box h='100vh'>
      {/* Header */}
      <Header/>
      {/* Content */}
      <Box border='1px' w='100%' h='90vh'>
        <Map setCountry={setCountry}/>
        <Sidebar country={country}/>
      </Box>
    </Box>
  )
}

export default Search