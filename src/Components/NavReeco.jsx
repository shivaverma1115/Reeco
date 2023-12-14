import { Box, Flex, Spacer, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { IoCartOutline } from "react-icons/io5";
import { GoChevronDown } from "react-icons/go";

const NavReeco = () => {
    const [count,setCount] = useState(0) ;
    return (
        <Flex bg={'#1e633f'} color={'white'} h={'5vh'} >
            <Flex bg={'red'} w={'50vw'} justifyContent={'space-evenly'}  >
                <Text fontSize={'25px'} fontWeight={700} >Reeco</Text>
                <Text my={'auto'}>Store</Text>
                <Text my={'auto'}>Orders</Text>
                <Text my={'auto'}>Analytics</Text>
            </Flex>
            <Spacer />
            <Flex bg={'tomato'} my={'auto'} fontSize={'20px'} mr={'7vw'} >
                <Flex my={'auto'} fontSize={25} >
                    <Box position={'relative'} top={-2} left={2} fontSize={15} bg={'#3cc771'} borderRadius={10}px={1} >{count}</Box>
                    <IoCartOutline />
                </Flex>
                <Flex>
                    <Text mx={5}>Hello, James</Text>
                    <Box my={'auto'} ><GoChevronDown /></Box>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default NavReeco
