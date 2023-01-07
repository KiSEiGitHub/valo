import {
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Tag,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

const AgentInfo = ({ agent }: any) => {
  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      pt={5}
      h="full"
      bgImage="./bg.png"
      bgRepeat="no-repeat"
      bgSize="cover"
      background={`linear-gradient(90deg, #${agent.backgroundGradientColors[0]} 0%, #${agent.backgroundGradientColors[1]} 35%, #${agent.backgroundGradientColors[2]} 60%, #${agent.backgroundGradientColors[3]})`}
    >
      <GridItem colStart={1} pos="relative" bgRepeat="no-repeat">
        <Image src={agent.background} alt="ok" pos="absolute" top={-20} />
        <Image
          src={agent.fullPortrait}
          alt={agent.displayName}
          w="850px"
          pos="relative"
          top="-20px"
        />
      </GridItem>
      <GridItem colStart={2} pr={10}>
        <HStack alignItems="center">
          <Heading>{agent.displayName}</Heading>
          <Tag pos="relative" top={1}>
            {agent.role.displayName}
          </Tag>
        </HStack>
        <Text mt={5}>{agent.description}</Text>
        <Tabs mt={10}>
          <TabList>
            {agent.abilities.map((item: any, key: number) => (
              <Tab key={key}>
                <Image src={item.displayIcon} alt="ok" w="80px" />
              </Tab>
            ))}
          </TabList>

          <TabPanels>
            {agent.abilities.map((item: any, key: number) => (
              <TabPanel key={key}>
                <Heading size="md">{item.displayName}</Heading>
                <Text mt={3}>{item.description}</Text>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </GridItem>
    </Grid>
  );
};

export default AgentInfo;
