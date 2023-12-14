import { Button } from '@chakra-ui/react'
import React from 'react'

const ButtonComponent = ({bg,text}) => {
  return (
    <Button borderRadius={'50px'} mr={'10px'} bg={bg}border={'2px solid #1e633f'} color={'#1e633f'} >{text}</Button>
  )
}

export default ButtonComponent
