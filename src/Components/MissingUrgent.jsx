import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React from 'react'

const MissingUrgent = ({ isOpen, onClose, ele, setElement, setBg }) => {
    const handleNo = (statusIs) => {
        onClose();
        setElement({ ...ele, Status: statusIs });
        statusIs === 'Missing' ? setBg('#f66d44') : setBg('#db2114');
    }
    return (
        <Box>
            <Modal isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <ModalContent position={'absolute'} bottom={10} >
                    <ModalHeader>Missing product</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Is 'Chicken Breast Fillets, Boneless ...'urgent?
                    </ModalBody>

                    <ModalFooter>
                        <Button variant='ghost' mr={3} onClick={() => handleNo("Missing")}>
                            No
                        </Button>
                        <Button variant='ghost' onClick={() => handleNo("Missing-Urgent")} >Yes</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default MissingUrgent
