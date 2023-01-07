import { Flex, Image, Tooltip } from "@chakra-ui/react";
import { GetServerSideProps } from "next";

const Buddies = ({ buddies }: any) => {

  return (
    <Flex flexWrap="wrap" gap={10} justifyContent="center" pt={50}>
      {buddies.map((item: any, key: any) => (
        <Tooltip key={key} label={item.displayName} borderRadius='md'>
          <Image
            src={item.displayIcon}
            alt="ok"
            w="120px"
            h="120px"
            objectFit="cover"
            borderRadius="xl"
          />
        </Tooltip>
      ))}
    </Flex>
  );
};

export default Buddies;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = await fetch("https://valorant-api.com/v1/buddies");
  const { data } = await res.json();

  return {
    props: {
      buddies: data,
    },
  };
};
