import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack, Text
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { useState } from "react";
import { BiBody } from "react-icons/bi";
import WeaponInfo from "../components/Layout/WeaponInfo";

const WeaponBox = ({ img, name, stat, skins }: any) => {
  const [wep, setWep] = useState("Vandal");

  return (
    <Box w="350px" h="300px" bg="#fff" borderRadius="xl" pos="relative" p={5}>
      <Box onClick={() => setWep(name)}>
        <WeaponInfo img={img} name={name} skins={skins} />
      </Box>
      <Heading color="#000" size="md" textAlign="center" mt={3}>
        {name}
      </Heading>
      <Divider my={3} borderColor="#000" />
      <Grid templateColumns="repeat(2, 1fr)">
        <GridItem colStart={1}>
          <HStack>
            <Text color="#000">Fire rate : </Text>
            <Text color="#000" fontWeight={800}>
              {stat.fireRate}
            </Text>
          </HStack>
          <HStack>
            <Text color="#000">Magazines : </Text>
            <Text color="#000" fontWeight={800}>
              {stat.magazineSize}
            </Text>
          </HStack>
          <HStack>
            <Text color="#000">Reload time : </Text>
            <Text color="#000" fontWeight={800}>
              {stat.reloadTimeSeconds}s
            </Text>
          </HStack>
        </GridItem>
        <GridItem colStart={2} pos="relative">
          <BiBody color="black" fontSize="7em" />
          <Text pos="absolute" color="red" fontWeight={800} right={5} top="5px">
            {stat.damageRanges[0].headDamage}
          </Text>
          <Text
            pos="absolute"
            color="red"
            fontWeight={800}
            right={5}
            top="40px"
          >
            {stat.damageRanges[0].bodyDamage}
          </Text>
          <Text
            pos="absolute"
            color="red"
            fontWeight={800}
            right={5}
            top="75px"
          >
            {stat.damageRanges[0].legDamage}
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

const Weapons = ({ weapons, skins }: any) => {
  return (
    <Flex
      flexWrap="wrap"
      pt={50}
      gap={10}
      justifyContent="center"
      bgImage="./bg2.png"
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      {weapons.map((item: any, key: number) => (
        <Box key={key}>
          <WeaponBox
            img={item.displayIcon}
            name={item.displayName}
            stat={item.weaponStats}
            skins={skins}
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
  const weapon = data.filter((word: any) => word.displayName != "Melee");

  const resSkin = await fetch("https://valorant-api.com/v1/weapons/skins");
  const { data: skins } = await resSkin.json();

  return { props: { weapons: weapon, skins: skins } };
};
