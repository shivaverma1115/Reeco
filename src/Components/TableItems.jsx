import { Img, Td, Tr } from '@chakra-ui/react'
import React from 'react'
import EditOptions from './EditOptions';

const TableItems = ({ele}) => {
    let {id,img,product_name,Brand,Price,Quantity,Total,Status} = ele ;
    product_name = product_name.substring(0,35) ;
    Brand = Brand.substring(0,25) ;
    return (
        <Tr>
            <Td  w={10}><Img src={img}  /></Td>
            <Td >{product_name}</Td>
            <Td>{Brand}</Td>
            <Td >{Price}</Td>
            <Td >{Quantity}</Td>
            <Td >{Total}</Td>
            <Td>{Status}</Td>
            <Td><EditOptions id={ele.id}  /></Td>
        </Tr>
    )
}

export default TableItems
