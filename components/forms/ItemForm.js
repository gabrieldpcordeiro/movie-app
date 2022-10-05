import React from 'react'
import {Center} from 'native-base'
import {FormControl, VStack, Select, CheckIcon} from 'native-base'


const ItemForm = ({selectChoice, setSelectChoice, currentTab}) => {
    const TabChoice = currentTab;

    const movieChoice = [
        {label: "Now Playing", value: "now_playing"},
        {label: "popular", value: "popular"},
        {label: "Top Rated", value: "top_rated"},
        {label: "Upcoming", value: "upcoming"},
    ]
    const tvChoice = [
        {label: "Airing Today", value: "airing_today"},
        {label: "On The Air", value: "on_the_air"},
        {label: "popular", value: "popular"}
    ]

    return (
        <VStack space={2} width='100%' py={5}>
            <FormControl isRequired>
                <Center width='100%' space={2}>
                    <Select selectedValue={selectChoice}
                            minWidth="200"
                            accessibilityLabel="Choose Service"
                            placeholder="Choose Service"
                            _selectedItem={{
                                bg: "teal.600",
                                color: '#fff',
                                endIcon: <CheckIcon size={5} color='#fff'/>
                            }}
                            mt={1}
                            onValueChange={itemValue => setSelectChoice(itemValue)}
                    >
                        {TabChoice === "movie" ? movieChoice.map(choice => {
                                return <Select.Item key={choice.value} label={choice.label} value={choice.value}/>
                            })
                            : tvChoice.map(choice => {
                                return <Select.Item key={choice.value} label={choice.label} value={choice.value}/>
                            })}
                    </Select>

                </Center>
            </FormControl>
        </VStack>
    )
}

export default ItemForm
