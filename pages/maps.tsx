import { Box, Heading, Image } from "@chakra-ui/react";
import { GetServerSideProps } from "next";

const Maps = ({ maps }: any) => {
  return (
    <>
      {maps.map((item: any, key: number) => (
        <Box pos='relative' key={key}>
          <Heading pos="sticky" top={0} ml={20}>
            {item.displayName}
          </Heading>
          <Image src={item.splash} alt="ok" />
        </Box>
      ))}
    </>
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
