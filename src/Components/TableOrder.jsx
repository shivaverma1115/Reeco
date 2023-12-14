import { Box, Button, Flex, Input, InputGroup, InputRightElement, Spacer, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { BsPrinter } from "react-icons/bs";
import ButtonComponent from './ButtonComponent';
import TableItems from './TableItems';
import Avocado_Hass from '../Images/Avocado Hass.jpg'

const TableOrder = () => {
    const [itemsArr, setItemArr] = useState([
        {
            img:Avocado_Hass,
            product_name:'chicken Breast Filets,Boneless matuu maMarinated 6 Ounce Raw,Invivid',
            Brand:'Hormel Black Labelmany',
            Price:'$60.67/6*1LB',
            Quantity:`0 x 6*1LB` ,
            Total:0,
            Status:'',
        },
        {
            img:Avocado_Hass,
            product_name:'chicken Breast Filets,Boneless matuu maMarinated 6 Ounce Raw,Invivid',
            Brand:'Hormel Black Labelmany',
            Price:'$60.67/6*1LB',
            Quantity:`0 x 6*1LB` ,
            Total:0,
            Status:'',
        },
        {
            img:Avocado_Hass,
            product_name:'chicken Breast Filets,Boneless matuu maMarinated 6 Ounce Raw,Invivid',
            Brand:'Hormel Black Labelmany',
            Price:'$60.67/6*1LB',
            Quantity:`0 x 6*1LB` ,
            Total:0,
            Status:'',
        },
    ])
    return (
        <Box w={'85%'} m={'auto'}my={'auto'} bg={'gray'} px={10} py={5}  >
            <Flex>
                <Flex w={'100%'} bg={'tomato'}  >
                    <InputGroup size='md' w={'30vw'} >
                        <Input borderRadius={20}
                            placeholder='Search...'
                        />
                        <InputRightElement width='4.5rem'>
                            <CiSearch />
                        </InputRightElement>
                    </InputGroup>
                    <Spacer />
                    <Flex my={'auto'}>
                        <ButtonComponent props={'Add item'} />
                        <Box my={'auto'} ml={10} fontSize={30} ><BsPrinter /></Box>
                    </Flex>
                </Flex>
            </Flex>
            {/* <TableContainer > */}
                <Table variant='simple' mt={5} >
                    <Thead>
                        <Tr >
                            <Th>Image</Th>
                            <Th>Product name</Th>
                            <Th>Brand</Th>
                            <Th >Price</Th>
                            <Th >Quantity</Th>
                            <Th >Total</Th>
                            <Th>Status</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            itemsArr.map((ele,i)=>{
                                return <TableItems key={i} ele={ele} />
                            })
                        }
                    </Tbody>
                </Table>
            {/* </TableContainer> */}
        </Box>
    )
}

export default TableOrder
