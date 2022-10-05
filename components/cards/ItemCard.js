import React from 'react'
import {Text, Box, HStack, VStack, Image, Button} from 'native-base'
import {imageNotFound} from "../../config/constants";

const itemCard = ({navigation, item, currentTab,}) => {

    return (
        <Box pb={2} mb={1}>
            <HStack space={2} alignItems='center' ml={2} mr={20} style={{maxWidth: 250}}>
                <Image alt={'image'}
                       source={{uri: item.poster_path !== undefined && item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : imageNotFound}}
                       size='xl'/>
                <VStack space={1} alignItems='flex-start'>
                    <Text fontSize='md'
                          bold>{item.original_title !== undefined ? item.original_title : item.original_name}</Text>
                    <Text fontSize='sm'>Popularity: {item.popularity ? item.popularity : 'N/A'}</Text>
                    <Text fontSize='sm'>Release Date: {item.release_date ? item.release_date : 'N/A'}</Text>
                    <Button style={{backgroundColor: '#06b6d4', width: 200, height: 40}}
                            onPress={() => navigation.navigate('Details', {itemId: item.id, currentTab: currentTab, mediaType: item.media_type, title: item.original_title })}>More Details</Button>
                </VStack>
            </HStack>
        </Box>
    )
}

export default itemCard
