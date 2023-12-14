import { Box, Flex, Grid, GridItem, Image, Img, Text } from '@chakra-ui/react'
import React from 'react'
import iconsImg from "../Images/iconsImg.jpg"

const SecondOrderIndo = () => {
    return (
        <Box w={'85%'} m={'auto'} my={'20px'} >
            <Grid templateColumns='repeat(6, 1fr)' border={'1px solid gray'} borderRadius={10} >
                <GridItem bg={'tomato'} w='100%'p={5} fontWeight={700}>
                    <Text fontSize={'15px'}  color={'gray'} >Supplier</Text>
                    <Text >East coast fruits & vegetables</Text>
                </GridItem>
                <GridItem bg={'tomato'} w='100%'p={5} fontWeight={700}>
                    <Text fontSize={'15px'}  color={'gray'} >Shipping data</Text>
                    <Text >Thu,Feb 10</Text>
                </GridItem>
                <GridItem bg={'tomato'} w='100%'p={5} fontWeight={700}>
                    <Text fontSize={'15px'}  color={'gray'} >Total</Text>
                    <Text >$ 15,028.3</Text>
                </GridItem>
                <GridItem bg={'tomato'} w='100%'p={5} fontWeight={700}>
                    <Text fontSize={'15px'}  color={'gray'} >Category</Text>
                    <Image src={iconsImg} />
                </GridItem>
                <GridItem bg={'tomato'} w='100%'p={5} fontWeight={700}>
                    <Text fontSize={'15px'}  color={'gray'} >Department</Text>
                    <Text >300-444-678</Text>
                </GridItem>
                <GridItem bg={'tomato'} w='100%'p={5} fontWeight={700}>
                    <Text fontSize={'15px'}  color={'gray'} >Status</Text>
                    <Text >Awaiting your approvel</Text>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default SecondOrderIndo
