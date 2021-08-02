import './App.css';
import { Flex, Text, Button, Image, IconButton } from '@chakra-ui/react';
import Logo from "./assets/logo.jpeg"
import qrCode from "./assets/qr-code.png"
import { useState } from "react"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"
import {Login} from "./Login"

function App() {
  const [openModal, setOpenModal] = useState(false)
  const [route, setRoute] = useState("home")
  return (
    <div>{route === "home" &&
      <div className="App">
    
        <Flex justifyContent="space-between" width="100vw">
          <Flex m="1rem" align="center">
            <Image src={Logo} h="80px" w="100px" />
            <Flex m="1rem">
              <Button p="1rem" fontSize="lg" fontWeight="light" colorScheme="teal" variant="link">
                Home
              </Button>
              <Button onClick={() => setOpenModal(true)} p="1rem" fontSize="lg" fontWeight="light" colorScheme="teal" variant="link">
                FAQ
              </Button>
              <Button onClick={() => setOpenModal(true)} p="1rem" fontSize="lg" fontWeight="light" colorScheme="teal" variant="link">
                About
              </Button>
            </Flex>
            <Flex />
          </Flex>
          <Flex align="center" mr="1rem">
            <IconButton
              variant="ghost"
              colorScheme="teal"
              aria-label="Call Sage"
              fontSize="20px"
              icon={<i class="fab fa-facebook-f"></i>}
            />
            <IconButton
              variant="ghost"
              colorScheme="teal"
              aria-label="Call Sage"
              fontSize="20px"
              icon={<i class="fab fa-instagram"></i>}
            />
            <Button p="1rem" fontSize="lg" fontWeight="light" colorScheme="teal" onClick={() => setRoute("login")}>Login/Signup</Button>
          </Flex>
        </Flex>
        <Flex height="50vh" width="100%" flexDirection="column" justifyContent="center">
          <Text p="2rem" color="#B2F5EA" fontSize="6xl" >An App that can <em>CHANGE</em> <br /> the way you <em>SEE</em> the world </Text>
          <Text w="40%" p="2rem" noOfLines={4} color="#B2F5EA" fontSize="2xl">At <em>DeDUES</em> it is out initiative to change the way people ignore early signs of diseases that can be detected from the eyes and detect your disease.</Text>
        </Flex>
        <Flex p="2rem" w="100vw" flexDirection="column" justifyContent="center" align="flex-end" mt="5rem" mr="4rem" h="20vh">
          <Image w="10rem" h="10rem" src={qrCode} />
          <Text variant="ghost"
            color="teal"
            fontSize="2xl">Scan the code to download the app.</Text>
        </Flex>
        <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Warning!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>This section of the page is under construction.</Text>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    }
    {route==="login" && <Login setRoute={setRoute} />}
    </div>
  );
}

export default App;
