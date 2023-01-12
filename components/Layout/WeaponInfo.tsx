import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import VariantArme from "./VariantArme";

const WeaponInfo = ({ img, name, skins }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [arme, setArme] = useState(skins[0]);
  const [variant, setVariant] = useState(undefined);
  return (
    <>
      <Image
        src={img}
        alt="ok"
        w="250px"
        h="90px"
        onClick={onOpen}
        _hover={{ transform: "scale(1.2)", cursor: "pointer" }}
        transition="0.3s"
      />

      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent bg="#0e1921">
          <ModalHeader>{name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Image src={arme.displayIcon} alt="arme" w="750px" mx="auto" />
              <Heading textAlign="center" mt={20}>
                {arme.displayName}
              </Heading>
              {arme.chromas[0].swatch && (
                <Flex gap={2}>
                  {arme.chromas.map((item: any, key: number) => (
                    <VariantArme
                      title={item.displayName}
                      swatch={item.swatch}
                      img={item.fullRender}
                    />
                  ))}
                </Flex>
              )}
              {arme.levels[1] && (
                <Box my={5} maxW="263px">
                  {arme.levels.map((item: any, key: number) => {
                    return (
                      <Flex w="100%" h="50px" my={3} gap={5} key={key}>
                        <Box>
                          <Heading>1</Heading>
                        </Box>
                        <Box flex={1}>
                          <Text>4</Text>
                        </Box>
                      </Flex>
                    );
                  })}
                </Box>
              )}
            </Box>
            <Divider my={20} />
            <Box>
              <Swiper
                slidesPerView={5}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                className="mySwiper"
              >
                {skins.map((item: any, key: any) => (
                  <SwiperSlide key={key}>
                    <Box onClick={() => setArme(item)}>
                      <Image
                        onClick={() => setVariant(undefined)}
                        src={item.displayIcon}
                        alt={item.displayName}
                        objectFit="cover"
                        pointerEvents="none"
                      />
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default WeaponInfo;
