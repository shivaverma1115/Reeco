import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { GoCheck } from "react-icons/go";
import { GoX } from "react-icons/go";
import { useDispatch } from 'react-redux';

import { getChangeStatus } from '../redux/action';

const EditOptions = ({ele}) => {
    console.log(ele) ;
    const dispatch = useDispatch() ;
    const [item,setItem] = useState(ele) ;
    const handleApproved=()=>{
        // setItem((ele) => ({ ...ele, Status: "Approved" }));
        // console.log(item) ;
        // dispatch(getChangeStatus({id:item.id,payload:item.Status}))
    }
    const handleMissing=()=>{
        setItem((ele) => ({ ...ele, Status: "Approved" }));
        console.log(item) ;
        dispatch(getChangeStatus({id:item.id,payload:item.Status}))
    }
    return (
        <Flex bg={'tomato'} justifyContent={'space-between'} >
            <Box fontSize={20} mx={3} onClick={()=>handleApproved()} ><GoCheck /></Box>
            <Box fontSize={20} mx={3} onClick={()=>handleMissing()} ><GoX /></Box>
            <Box fontSize={20} mx={3}><Text>Edit</Text></Box>
        </Flex>
    )
}

export default React.memo(EditOptions)
