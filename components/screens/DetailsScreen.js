import React, {useEffect, useState} from 'react'
import {Text, HStack, VStack, Center, Image} from 'native-base'
import LoadSpinner from '../layout/Loading'
import {getItems} from "../../services/api";

const DetailsScreen = ({route}) => {
    const {itemId, currentTab, mediaType} = route.params;
    const [item, setItem] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        async function fetchMovie() {
            let typeSearch = currentTab
            try {
                setIsLoading(true)
                if (mediaType === undefined || currentTab === 'tv' || currentTab ===  undefined) {
                    typeSearch = 'tv'
                }

                if (mediaType === 'movie' || currentTab === 'movie') {
                    typeSearch = 'movie'
                }
                console.log(typeSearch)

                const data = await getItems(typeSearch, itemId);

                setItem(data)
                setIsLoading(false)


            } catch (error) {
                throw error

            }
        }

        fetchMovie();

    }, [])

    return (
        <Center ml={10} pb={2} mt={10}>
            {isLoading ? <LoadSpinner/> : (
                <VStack space={2} alignItems='center' justifyContent="center" mr={10}>
                    <Text mb={5} fontSize='lg'
                          bold>{item.original_title ? item.original_title : item.original_name}</Text>
                    <Image mb={3} alt={'image'}
                           source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}
                           size='2xl'/>
                    <Text fontSize='sm'>{item.overview}</Text>
                    <HStack mt={3} alignSelf={'flex-start'}>
                        <Text fontSize='sm'>Popularity: {item.popularity ? item.popularity : 'N/A'}</Text>
                        <Text> | </Text>
                        <Text fontSize='sm'>Release Date: {item.release_date ? item.release_date : 'N/A'}</Text>
                    </HStack>
                </VStack>
            )}
        </Center>
    )
}

export default DetailsScreen
