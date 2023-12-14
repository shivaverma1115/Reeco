import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { GoCheck } from "react-icons/go";
import { GoX } from "react-icons/go";
import { useDispatch } from 'react-redux';
import { getStatus } from '../redux/action';

const EditOptions = () => {
    const dispatch = useDispatch() ;
    const handleApprove = ()=>{
        dispatch(getStatus())
    }
    return (
        <Flex bg={'tomato'} justifyContent={'space-between'} >
            <Box fontSize={20} mx={3} onClick={()=>handleApprove({payload:"Approved"})} ><GoCheck /></Box>
            <Box fontSize={20} mx={3} ><GoX /></Box>
            <Box fontSize={20} mx={3}><Text>Edit</Text></Box>
        </Flex>
    )
}

export default EditOptions
