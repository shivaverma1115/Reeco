import { Box, Button, Flex, Img, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, useStatStyles } from '@chakra-ui/react'
import React, { useState } from 'react'

const Edit = ({ element }) => {
    let { id, img, product_name, Brand, Price, Quantity, Total, Status } = element;
    product_name = `${product_name.substring(0, 50)}...`;
    Brand = `${Brand.substring(0, 10)}...`;

    console.log(element);

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [count, setCount] = useState(Quantity);
    return (
        <>
            <Text onClick={onOpen} my={'auto'} >Edit</Text>
            <Modal size={'xl'} isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader fontWeight={700} mb={-3} >{product_name}</ModalHeader>
                    <Text px={6} fontSize={20}>American Roland</Text>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex>
                            <Box w={'25%'} >
                                <Img src={img} />
                            </Box>
                            <Box >
                                <Flex >
                                    <Text >Price($)</Text>
                                    <Input ml={40} w={'8vw'} value={Price} />/6*1LB
                                </Flex>
                                <Flex my={3} justifyContent={'space-between'} >
                                    <Text mr={5}>Quantity</Text>
                                    <Box w={'17vw'}>
                                        <Button borderRadius={'50px'} p={1} mx={2} bg={'#3dca72'} color={'white'} onClick={() => setCount(count - 1)} >-</Button>
                                        <Input w={'6vw'} m={'auto'} value={count} />
                                        <Button borderRadius={'50px'} p={1} mx={1} bg={'#3dca72'} color={'white'} onClick={() => setCount(count + 1)}>+</Button>x6*1LB
                                    </Box>
                                </Flex>
                                <Flex>
                                    <Text mr={5}>Total</Text>
                                    <Text w={'fit-content'} m={'auto'} >{Math.ceil(Price * count)}</Text>
                                </Flex>
                            </Box>
                        </Flex>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='ghost' color={'#1e633f'} mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button borderRadius={'50px'} bg={'#1e633f'} color={'white'} >Send</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Edit
