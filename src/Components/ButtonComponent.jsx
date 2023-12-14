import { Button } from '@chakra-ui/react'
import React from 'react'

const ButtonComponent = ({props}) => {
  return (
    <Button borderRadius={'50px'} mr={'10px'} bg={'none'}border={'2px solid #1e633f'} color={'#1e633f'} >{props}</Button>
  )
}

export default ButtonComponent
