import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
  Image,
} from "@chakra-ui/react";

const VariantArme = ({ swatch, title, img }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Image src={swatch} alt={title} w="60px" onClick={onOpen} borderRadius='md' cursor='pointer'/>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent p={5}>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={img} alt={title} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default VariantArme;
