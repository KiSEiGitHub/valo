import {
  Grid,
  GridItem,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const WeaponInfo = ({ img, name, skins }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(skins);

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

                <Swiper
                  slidesPerView={5}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {skins.map((item: any, key: any) => (
                    <SwiperSlide key={key} style={{ height: "160px" }}>
                      <Image
                        src={item.displayIcon}
                        alt={item.displayName}
                        objectFit="cover"
                        pointerEvents="none"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default WeaponInfo;
