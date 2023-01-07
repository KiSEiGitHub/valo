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
      bg={agent.backgroundGradientColors[1]}
    >
      <GridItem
        colStart={1}
        pos="relative"
        bgImage={agent.background}
        bgRepeat="no-repeat"
      >
        <Image src={agent.fullPortrait} alt={agent.displayName} w="850px" />
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
                    <Image src={item.displayIcon} alt='ok' w='80px'/>
              </Tab>
            ))}
          </TabList>

          <TabPanels>
          {agent.abilities.map((item: any, key: number) => (
              <TabPanel key={key}>
                  <Heading size='md'>{item.displayName}</Heading>
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
