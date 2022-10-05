import React from 'react'
import { Center, Spinner } from 'native-base'

const LoadSpinner = () => {
    return (
        <Center>
            <Spinner color="black" accessibilityLabel="Loading"/>
        </Center>
    )
}

export default LoadSpinner
