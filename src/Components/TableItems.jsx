import { Box, Flex, Img, Td, Text, Tr, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { GoCheck } from "react-icons/go";
import { GoX } from "react-icons/go";
import MissingUrgent from './MissingUrgent';
import Edit from './Edit';

const TableItems = ({ ele }) => {
    const [element, setElement] = useState(ele);
    let { id, img, product_name, Brand, Price, Quantity, Total, Status } = element;
    product_name = `${product_name.substring(0, 20)}...`;
    Brand = `${Brand.substring(0, 10)}...`;

    const [bg, setBg] = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure()
    const handleElement = (statusIs) => {
        console.log(statusIs)
        if (statusIs === 'Missing') {
            onOpen() ;
            // setElement({ ...ele, Status: statusIs })
            
        }
        else {
            setElement({ ...ele, Status: statusIs })
            statusIs === 'Approved' ? setBg('#3dca72') : setBg('#db2114');
        }
    }

    return (
        <Tr>
            <Td w={10}><Img src={img} /></Td>
            <Td >{product_name}</Td>
            <Td>{Brand}</Td>
            <Td >{`$${Price}/${Quantity}*1LB`}</Td>
            <Td >{`${Quantity}x6*1LB`}</Td>
            <Td >{`$${Math.ceil(Price*Quantity)}`}</Td>
            <Td bg={'gray.100'} >
                <Box textAlign={'center'} bg={bg} color={'white'} p={2} borderRadius={30}>{Status}</Box>
            </Td>
            <Td bg={'gray.100'}>
                <Flex justifyContent={'space-between'} >
                    <Box cursor={'pointer'} fontSize={20} mx={3} onClick={() => handleElement("Approved")} ><GoCheck /></Box>
                    <Box cursor={'pointer'} fontSize={20} mx={3} onClick={() => handleElement("Missing")} ><GoX />
                    <MissingUrgent isOpen={isOpen} onClose={onClose} setElement={setElement}ele={ele}setBg={setBg} />
                    </Box>
                    <Box cursor={'pointer'} fontSize={20} mx={3}  >
                        {/* <Text>Edit</Text> */}
                        <Edit element={element} />
                    </Box>
                </Flex>
            </Td>
        </Tr>
    )
}

export default React.memo(TableItems)
