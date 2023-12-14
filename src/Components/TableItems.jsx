import { Box, Flex, Img, Td, Text, Tr } from '@chakra-ui/react'
import React, { useState } from 'react'
import EditOptions from './EditOptions';
import { GoCheck } from "react-icons/go";
import { GoX } from "react-icons/go";

const TableItems = ({ ele }) => {
    const [element, setElement] = useState(ele);
    let { id, img, product_name, Brand, Price, Quantity, Total, Status } = element;
    product_name = product_name.substring(0, 35);
    Brand = Brand.substring(0, 25);
    const [bg, setBg] = useState('');
    const handleElement = (status) => {
        console.log(status)
        status === 'Approved' ? setBg('#3dca72') : setBg('#db2114');
        // setElement({ ...ele, Status: status })
    }
    return (
        <Tr>
            <Td w={10}><Img src={img} /></Td>
            <Td >{product_name}</Td>
            <Td>{Brand}</Td>
            <Td >{Price}</Td>
            <Td >{Quantity}</Td>
            <Td >{Total}</Td>
            <Td>
                <Box textAlign={'center'} bg={bg} color={'white'} p={2} borderRadius={30}>{bg==='#3dca72'?'Approved':'Missing'}</Box>
            </Td>
            <Td>
                <Flex bg={'tomato'} justifyContent={'space-between'} >
                    <Box fontSize={20} mx={3} onClick={() => handleElement("Approved")} ><GoCheck /></Box>
                    <Box fontSize={20} mx={3} onClick={() => handleElement("Missing")} ><GoX /></Box>
                    <Box fontSize={20} mx={3}><Text>Edit</Text></Box>
                </Flex>
            </Td>
        </Tr>
    )
}

export default React.memo(TableItems)
