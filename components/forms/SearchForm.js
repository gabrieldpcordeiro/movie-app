import React, {useState} from 'react'
import {FormControl, VStack, HStack, Input, Button, Icon, Select, CheckIcon, Box} from 'native-base'
import Ionicons from '@expo/vector-icons/Ionicons';

const SearchForm = (props) => {
    const {onInputChange, fetchSearch, selectType, setSelectType} = props
    const [formData, setFormData] = useState({});

    const onSubmit = () => {
        fetchSearch()
    }

    return (
        <VStack space={2} width='100%' py={5}>
            <FormControl isRequired>
                <Box width='100%'>
                    <FormControl.Label>Movie Title</FormControl.Label>
                    <Input
                        placeholder='i.e. The Goonies'
                        variant='filled'
                        bg='gray.200'
                        width='95%'
                        px={3}
                        onChangeText={value => {
                            setFormData({...formData, movie: value})
                            onInputChange(value)
                        }}
                        InputLeftElement={
                            <Icon size={5} ml={2} color={'gray.400'} as={<Ionicons name="ios-search"/>}/>
                        }
                    />
                    <FormControl.ErrorMessage>
                        Please fill the inputs!
                    </FormControl.ErrorMessage>
                </Box>
            </FormControl>

            <FormControl isRequired>
                <FormControl.Label>Choose Search Type</FormControl.Label>
                <HStack width='100%' space={2}>
                    <Select selectedValue={selectType}
                            minWidth="240"
                            accessibilityLabel="Choose a Type"
                            placeholder="Choose a Type"
                            _selectedItem={{
                                bg: "teal.600",
                                color: '#fff',
                                endIcon: <CheckIcon size={5} color='#fff'/>
                            }}
                            mt={1}
                            onValueChange={itemValue => setSelectType(itemValue)}>
                        <Select.Item label="Both" value="multi"/>
                        <Select.Item label="Movie" value="movie"/>
                        <Select.Item label="TV Show" value="tv"/>
                    </Select>

                    <Button
                        style={{backgroundColor: '#06b6d4'}}
                        onPress={onSubmit}
                        leftIcon={
                            <Icon size={3} ml={2} color={'#fff'} as={<Ionicons name="ios-search"/>}/>
                        }
                    >Search</Button>
                </HStack>
                <FormControl.HelperText>
                    Please select a type
                </FormControl.HelperText>
            </FormControl>
        </VStack>
    )
}

export default SearchForm
