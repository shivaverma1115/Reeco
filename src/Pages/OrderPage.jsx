import React from 'react'
import NavReeco from '../Components/NavReeco'
import OrderInfo from '../Components/OrderInfo'
import { Box } from '@chakra-ui/react'
import SecondOrderIndo from '../Components/SecondOrderIndo'
import TableOrder from '../Components/TableOrder'

const OrderPage = () => {
    return (
        <Box>
            <Box boxShadow='md' rounded='md' bg='white' >
                <NavReeco />
                <OrderInfo />
            </Box>
            <SecondOrderIndo />
            <TableOrder/>
        </Box>
    )
}

export default OrderPage
