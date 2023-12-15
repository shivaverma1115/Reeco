import { Box, Button, Flex, Input, InputGroup, InputRightElement, Spacer, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { BsPrinter } from "react-icons/bs";
import ButtonComponent from './ButtonComponent';
import TableItems from './TableItems';
import { useDispatch, useSelector } from 'react-redux'
import { getTableData } from '../redux/action';

const TableOrder = () => {
    const item = useSelector(store => store.items)
    console.log(item);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTableData())
    }, [])

    console.log(item);

    return (
        <Box border={'1px solid gray'} w={'85%'} m={'auto'} my={'auto'} px={10} py={5}  >
            <Flex>
                <Flex w={'100%'} display={['box', 'flex']}  >
                    <InputGroup size='md' w={['100%', '30vw']} >
                        <Input borderRadius={20}
                            placeholder='Search...'
                        />
                        <InputRightElement width='4.5rem' cursor={'pointer'}>
                            <CiSearch />
                        </InputRightElement>
                    </InputGroup>
                    <Spacer />
                    <Flex my={'auto'} mt={[3, 0]} >
                        <ButtonComponent text={'Add item'} bg={'none'} />
                        <Box cursor={'pointer'} my={'auto'} ml={[0, 10]} fontSize={30} ><BsPrinter /></Box>
                    </Flex>
                </Flex>
            </Flex>
            <TableContainer  >
                <Table variant='simple' mt={5} >
                    <Thead>
                        <Tr>
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
                            item.map((ele, i) => {
                                return <TableItems key={i} ele={ele} />
                            })
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default React.memo(TableOrder)
