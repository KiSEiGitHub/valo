import { Box } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import AgentInfo from "../components/Layout/AgentInfo";
import IconBox from "../components/Layout/IconBox";

const Home = ({ agent }: any) => {
  const [agentObject, setAgentObject] = useState({});

  return (
    <Box h="100vh" pos="relative">
      <AgentInfo agent={agentObject}/>
      <Box pos="absolute" bottom={0} w="100%" h="auto">
        <Swiper
          style={{
            height: "100%",
          }}
          slidesPerView={7}
          spaceBetween={10}
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

  return { props: { agent: data } };
};
