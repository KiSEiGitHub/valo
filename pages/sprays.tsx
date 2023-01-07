import { Flex, Image, Tooltip } from "@chakra-ui/react";
import { GetServerSideProps } from "next";

const Sprays = ({ sprays }: any) => {
  console.log(sprays);

  return (
    <Flex flexWrap="wrap" gap={10} justifyContent="center" pt={50}>
      {sprays.map((item: any, key: any) => (
        <Tooltip key={key} label={item.displayName} borderRadius='md'>
          <Image
            src={item.fullTransparentIcon}
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

export default Sprays;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = await fetch("https://valorant-api.com/v1/sprays");
  const { data } = await res.json();

  return {
    props: {
      sprays: data,
    },
  };
};
