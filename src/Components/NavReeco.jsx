import { Box, Flex, Spacer, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { IoCartOutline } from "react-icons/io5";
import { GoChevronDown } from "react-icons/go";

const NavReeco = () => {
    const [count, setCount] = useState(0);
    return (
        <Flex bg={'#1e633f'} color={'white'} h={'5vh'} >
            <Flex w={['30vw','50vw']} justifyContent={'space-evenly'}  >
                <Text cursor={'pointer'} fontSize={'25px'} fontWeight={700} >Reeco</Text>
                <Text cursor={'pointer'} display={['none','flex','flex']} my={'auto'}>Store</Text>
                <Text cursor={'pointer'} display={['none','flex','flex']} my={'auto'}>Orders</Text>
                <Text cursor={'pointer'} display={['none','flex','flex']} my={'auto'}>Analytics</Text>
            </Flex>
            <Spacer />
            <Flex my={'auto'} fontSize={'20px'} mr={'7vw'} >
                <Flex my={'auto'} fontSize={25} cursor={'pointer'} >
                    <Box position={'relative'} top={-2} left={2} fontSize={15} bg={'#3cc771'} borderRadius={10} px={1} >{count}</Box>
                    <IoCartOutline />
                </Flex>
                <Flex cursor={'pointer'} >
                    <Text mx={5}>Hello, James</Text>
                    <Box my={'auto'} ><GoChevronDown /></Box>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default NavReeco
