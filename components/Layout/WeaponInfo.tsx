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

const WeaponInfo = ({ img }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Image src={img} alt="ok" w="250px" h="90px" onClick={onOpen} _hover={{transform: 'scale(1.2)', cursor: 'pointer'}} transition='0.3s'/>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>hello</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default WeaponInfo;
