import { Box, Flex } from "@chakra-ui/react";
const Footer = () => {
  return (
    <Box className="footer">
      <Flex
        color="white"
        align="center"
        justify="center"
        h="50px"
        bg="#6a89cc"
        borderTop="1px solid"
        borderColor="gray.100"
      >
        <p className >Trianti Khoerunnisa </p>
        <br></br>
        <p className>FE5587585</p>
      </Flex>
    </Box>
  );

};

export default Footer;