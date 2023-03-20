import {
  Box,
  Link,
  IconButton,
  Spacer,
  useColorMode,
  Button,
  HStack,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Container,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { BsMoonFill } from "react-icons/bs";
import { HiSun } from "react-icons/hi";
import { Link as Scroll } from "react-scroll";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const btnRef = React.useRef();
  return (
    <HStack
      position="fixed"
      w="100%"
      zIndex={999}
      px={[10, 10, 50, 50]}
      // bg={colorMode === "light" ? "orange.50" : "gray.900"}
      color={colorMode === "light" ? "gray.900" : "gray.50"}
      backdropFilter="blur(20px)"
      fontSize="md"
      align="center"
      paddingY={5}
    >
      <Link href="#" fontSize="3xl" letterSpacing={3}>
        sakamura
      </Link>
      <Spacer />
      <IconButton
        // fontSize="xl"
        fontSize={colorMode === "light" ? "3xl" : "xl"}
        variant="ghost"
        colorScheme="yellow"
        size="md"
        aria-label="DarkMode Switch"
        icon={colorMode === "light" ? <HiSun /> : <BsMoonFill />}
        onClick={toggleColorMode}
      />
      {/* lg, xlで表示 */}
      <Box display={["none", "none", "flex", "flex"]}>
        <Button marginLeft={5} variant="ghost">
          <Scroll to="Links" smooth={true} duration={600} offset={-90}>
            Links
          </Scroll>
        </Button>
        <Button marginLeft={5} variant="ghost">
          <Scroll to="Works" smooth={true} duration={600} offset={-90}>
            Works
          </Scroll>
        </Button>
        <Button marginLeft={5} variant="ghost">
          <Scroll to="Contact" smooth={true} duration={600} offset={-90}>
            Contact
          </Scroll>
        </Button>
      </Box>

      {/* sm, mdで表示 */}
      <IconButton
        icon={<HamburgerIcon />}
        variant="ghost"
        display={["flex", "flex", "none", "none"]}
        colorScheme="yellow"
        fontSize="2xl"
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg={colorMode === "light" ? "orange.50" : "gray.900"}>
          <DrawerCloseButton m={5} fontSize="xl" />
          <DrawerBody>
            <VStack
              h="100vh"
              justify="center"
              fontSize="3xl"
              fontWeight="medium"
            >
              <Scroll
                to="Links"
                style={{ cursor: "pointer" }}
                smooth={true}
                duration={600}
                offset={-90}
              >
                Links
              </Scroll>
              <Scroll
                to="Works"
                style={{ cursor: "pointer" }}
                smooth={true}
                duration={600}
                offset={-90}
              >
                Works
              </Scroll>
              <Scroll
                to="Contact"
                style={{ cursor: "pointer" }}
                smooth={true}
                duration={600}
                offset={-90}
              >
                Contact
              </Scroll>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </HStack>
  );
}
