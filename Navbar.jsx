import { Link  } from "react-router-dom";
import { Link as ChakraLink, Box, Button, Flex, Heading, Text } from "@chakra-ui/react";


const NavBar = () => {
  return (
    <Box as="header" className="ruangguru-blue" id="header" p={4}>
        <Flex backgroundColor="#6a89cc" justify="space-between" align="center">
            <ChakraLink as={Link} to="/" data-testid="home-page">
                <Heading as="h3" size="lg" color="White" fontWeight="bold">
                    Student Portal
                </Heading>
            </ChakraLink>
            <Flex mt={4} display={{ base: "none", md: "flex" }}>
                <ChakraLink
                    as={Link}
                    to="/student"
                    data-testid="student-page"
                    fontWeight="bold"
                    mr={4}
                >
                    <Text fontSize="md" color="White" _hover={{ color: "blue.200" }}>
                    All Student
                    </Text>
                </ChakraLink>
                <ChakraLink
                    as={Link}
                    to="/add"
                    data-testid="add-page"
                    fontWeight="bold"
                >
                    <Text fontSize="md" color="White" _hover={{ color: "blue.200" }}>
                    Add Student
                    </Text>
                </ChakraLink>
            </Flex>
        </Flex>
        </Box>
  );
};

export default NavBar;