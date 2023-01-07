import { Box, Divider } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import AgentInfo from "../components/Layout/AgentInfo";
import IconBox from "../components/Layout/IconBox";

const Home = ({ agent, agentDefault }: any) => {
  const [agentObject, setAgentObject] = useState(agentDefault);

  return (
    <Box h="100vh" pos="relative">
      <AgentInfo agent={agentObject} />
      <Box pos="absolute" bottom={0} w="100%" h="auto">
        <Divider my={3}/>
        <Swiper
          style={{
            height: "100%",
            padding: "10px",
          }}
          slidesPerView={9}
          spaceBetween={5}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {agent.map((item: any, key: number) => (
            <SwiperSlide key={key}>
              <Box onClick={() => setAgentObject(item)}>
                <IconBox icon={item.displayIcon} />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = await fetch("https://valorant-api.com/v1/agents");
  const { data } = await res.json();

  const resDefault = await fetch(
    "https://valorant-api.com/v1/agents/dade69b4-4f5a-8528-247b-219e5a1facd6"
  );
  const { data: dataDefault } = await resDefault.json();

  return { props: { agent: data, agentDefault: dataDefault } };
};
