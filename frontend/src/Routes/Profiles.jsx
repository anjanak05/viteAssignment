import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
    SimpleGrid,
  } from '@chakra-ui/react';
import SingleCard from '../Component/SingleCard';

const Profiles = () => {
    const [loginData, setloginData] = useState([]);

    useEffect(() => {
         axios
          .get("http://localhost:9090/marriageProfiles")
          .then((r) => {
            setloginData(r.data);
            // console.log(r.data);
          })
          .catch((err) => console.log(err));
      },[]);

  return (
    <SimpleGrid
    width={"95%"}
    paddingTop={"2%"}
    margin={"auto"}
    spacing={4}
    columns={{ sm: 1, md: 2, lg: 3 }}
    mb={"2%"}
  >
    {loginData.map((e)=>(
        <SingleCard key ={e.id} e={e}></SingleCard>
    ))}
  </SimpleGrid>
  );
}

export default Profiles