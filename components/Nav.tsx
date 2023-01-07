import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Link,
} from "@chakra-ui/react";
import { useRef } from "react";

const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button variant="ghost" pos='fixed' top={0} zIndex={2} onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent zIndex={5}>
          <DrawerCloseButton />
          <DrawerHeader>Valorant</DrawerHeader>

          <DrawerBody>
            <Link href='/' display='block' mb={3}>Agents</Link>
            <Link href='/weapons'>Weapons</Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Nav;
