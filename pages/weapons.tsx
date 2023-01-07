import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { GetServerSideProps } from "next";

const Weapons = ({ weapons }: any) => {
  return (
    <Flex flexWrap="wrap" pt={50} gap={10} justifyContent="center">
      {weapons.map((item: any, key: number) => (
          <Box key={key}>
              <Heading textAlign='center' size='lg' mb={5}>{item.displayName}</Heading>
          <Image
            src={item.displayIcon}
            alt="ok"
            w="250px"
            objectFit="cover"
          />
        </Box>
      ))}
    </Flex>
  );
};

export default Weapons;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = await fetch("https://valorant-api.com/v1/weapons");
  const { data } = await res.json();
  return { props: { weapons: data } };
};
