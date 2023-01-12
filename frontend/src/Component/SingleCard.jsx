import React from "react";
import {
  Card,
  CardFooter,
  Heading,
  CardBody,
  Text,
  Stack,
  ButtonGroup,
  Button,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";

const SingleCard = ({ e }) => {
  return (
    <>
      <Card maxW="sm">
        <CardBody>
        <Image
      src={e.profilePic}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
          <Stack mt="2" spacing="3">
            <Heading display={"flex"} justifyContent="center" size="md">
              {e.firstName} {e.lastName}
            </Heading>
            <Text><b>Gender:</b> {e.gender}</Text>

            <Text><b>Email:</b> {e.email}</Text>
            <Text color="black" fontSize="md">
               <b>Age:</b> {e.age} years
            </Text>
            <Text><b>Phone No:</b> {e.phoneNumber}</Text>
            <Text><b>Address:</b> {e.address}</Text>

            
          </Stack>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
    </>
  );
};

export default SingleCard;
