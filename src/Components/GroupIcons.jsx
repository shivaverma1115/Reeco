import { Box, Flex } from '@chakra-ui/react';
import React from 'react'
import { RxCrosshair1 } from "react-icons/rx";
import { RxGear } from "react-icons/rx";
import { RxInput } from "react-icons/rx";
import { RxRulerSquare } from "react-icons/rx";
import { RxTable } from "react-icons/rx";
import { RxVideo } from "react-icons/rx";

const GroupIcons = () => {
    return (
        <Box w={'90%'} >
            <Flex justifyContent={'space-between'} my={3} >
                <RxCrosshair1 />
                <RxGear />
                <RxInput />
                <RxGear />
            </Flex>
            <Flex justifyContent={'space-between'}>
                <RxRulerSquare />
                <RxTable />
                <RxVideo />
                <RxTable />
            </Flex>
        </Box>
    )
}

export default GroupIcons
