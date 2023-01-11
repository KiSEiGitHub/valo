import {
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
            {skins.map((item: any, key: any) => (
              <Text>{item.displayName}</Text>
            ))}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default WeaponInfo;
