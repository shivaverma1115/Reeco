import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { GoCheck } from "react-icons/go";
import { GoX } from "react-icons/go";

const EditOptions = () => {
    return (
        <Flex bg={'tomato'} justifyContent={'space-between'} >
            <Box fontSize={20} mx={3}><GoCheck /></Box>
            <Box fontSize={20} mx={3}><GoX /></Box>
            <Box fontSize={20} mx={3}><Text>Edit</Text></Box>
        </Flex>
    )
}

export default EditOptions
