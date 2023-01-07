import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { GetServerSideProps } from "next";

const Maps = ({ maps }: any) => {
  return (
    <Flex
      flexWrap="wrap"
      gap={5}
      pt={90}
      alignItems="center"
      p={10}
      justifyContent="center"
    >
      {maps.map((item: any, key: number) => (
        <Box pos="relative" key={key}>
          <Heading
            pos="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            backdropFilter="blur(5px)"
            px={5}
            borderRadius="lg"
          >
            {item.displayName}
          </Heading>
          <Image src={item.listViewIcon} alt="ok" borderRadius="md" />
        </Box>
      ))}
    </Flex>
  );
};

export default Maps;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = await fetch("https://valorant-api.com/v1/maps");
  const { data } = await res.json();

  return {
    props: {
      maps: data,
    },
  };
};
