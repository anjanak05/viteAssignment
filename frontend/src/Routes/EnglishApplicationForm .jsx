import React, { useState } from "react";
import axios from "axios";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  Select,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';

const EnglishApplicationForm = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    profilePic: "",
    age: "",
    password:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {

    return axios
      .post(`http://localhost:9090/marriageProfiles`, formData)
      .then((res) => {
        console.log(res);
        alert("Registrations successfully!");
        
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
     <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
         
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel> 
                  <Input name="firstName"  value={formData.firstName} onChange={handleChange} type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input name="lastName"  value={formData.lastName} onChange={handleChange} type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormLabel>Gender</FormLabel>

            <Select placeholder='Select option' name="gender"  value={formData.gender} onChange={handleChange}>
  <option value='male'>Male</option>
  <option value='female'>Female</option>
</Select>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input name="email"  value={formData.email} onChange={handleChange} type="text" />
            </FormControl>


            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input name="password" value={formData.password} onChange={handleChange} type="text" />
            </FormControl>
            <FormControl id="address" isRequired>
              <FormLabel>Address</FormLabel>
              <Input name="address"  value={formData.address} onChange={handleChange} type="text" />
            </FormControl>
            <FormControl id="phoneNumber" isRequired>
              <FormLabel>Phone Number</FormLabel>
              <Input name="phoneNumber"  value={formData.phoneNumber} onChange={handleChange} type="Number" />
            </FormControl>

            <FormControl id="age" isRequired>
              <FormLabel>age</FormLabel>
              <Input name="age"  value={formData.age} onChange={handleChange} type="Number" />
            </FormControl>
            <FormControl id="profilePic" isRequired>
              <FormLabel>Profile Pic</FormLabel>
              <Input name="profilePic"  value={formData.profilePic} onChange={handleChange} type="text" />
            </FormControl>

            
            <Stack spacing={10} pt={2}>
              <Button
              onClick={handleSubmit}
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </div>
  );
};

export default EnglishApplicationForm;
