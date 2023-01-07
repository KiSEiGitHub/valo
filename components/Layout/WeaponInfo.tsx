import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Image,
  Box,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";

const WeaponInfo = ({ img, name, skins }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          <ModalBody>hello</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default WeaponInfo;
