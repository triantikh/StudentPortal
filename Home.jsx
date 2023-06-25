import React from "react";
import { Link } from "react-router-dom";
import { Button, Flex, Box, Heading, Text, Image } from '@chakra-ui/react'

const Home = () => {
  return (
    <>
      <Flex direction="column"
        alignItems="center"
        backgroundColor="gray.100"
        backgroundSize="cover"
        backgroundPosition="center"
        minHeight="100vh"
        justifyContent='center'>


        <Box textAlign="center" mt={8}>
          <Heading as="h1" size="xl" mb={4}>
            Welcome to Student Portal
          </Heading>
          <Text fontSize="xl" color="gray.500" mb={8}>
            Click the button to see all students data
          </Text>

          <Flex justifyContent="center">
            <Button colorScheme='blackAlpha' variant='solid'>
              <Link to="/student" data-testid="student-btn">
                Click
              </Link>
            </Button>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Home;