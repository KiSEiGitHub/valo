import { Box, Image } from "@chakra-ui/react";

const IconBox = ({ icon }: any) => {
  return (
    <Box
        w='100%'
        h='100%'
    >
      <Image src={icon} alt="ok" w="150px" mx='auto'/>
    </Box>
  );
};

export default IconBox;
