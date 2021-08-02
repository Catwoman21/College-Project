import {Flex, Button, Input, Text} from "@chakra-ui/react"

export const Login = ({setRoute}) => {
    return(
        <Flex align="center" flexDirection="column">
            <Text mt="2rem" fontSize="4xl" fontWeight="bold">Login</Text>
            <Flex mt="5rem" width="40vw" flexDirection="column">
                <Text >Username:</Text>
                <Input m="1rem 0" placeholder="Enter your username"/>
                <Text>Password:</Text>
                <Input m="1rem 0" placeholder="Enter your password" />
                <Button mt="1rem" colorScheme="teal" >Login</Button>
                <Button mt="1rem" variant="ghost" onClick={() => setRoute('home')}>Go Back</Button>
            </Flex>
        </Flex>
        )
}