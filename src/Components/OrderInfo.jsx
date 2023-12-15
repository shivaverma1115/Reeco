import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Flex, Spacer, Text } from '@chakra-ui/react';
import React from 'react'
import { FaAngleRight } from "react-icons/fa6";
import ButtonComponent from './ButtonComponent';
const OrderInfo = () => {
    return (
        <Box w={'85%'} m={'auto'} mt={'8px'}  >
            <Breadcrumb p={'5px'} spacing='8px' separator={<FaAngleRight color='gray.500' />}>
                <BreadcrumbItem>
                    <BreadcrumbLink cursor={'pointer'} href='/order'>Order</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage  >
                    <BreadcrumbLink cursor={'pointer'} textDecoration={'underline'} href='/Order32457ABC'>Order 32457ABC</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Flex display={['box','flex']} >
                <Text fontSize={'30px'} my={'5px'} fontWeight={600} >Order 32457ABC</Text>
                <Spacer />
                <Flex my={'auto'} >
                    <ButtonComponent text={'Back'} bg={'none'} />
                    <Button borderRadius={'50px'} bg={'#1e633f'} color={'white'} >Approve order</Button>
                </Flex>
            </Flex>
        </Box>
    )
}

export default OrderInfo
