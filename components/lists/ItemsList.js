import React from 'react'
import {FlatList} from 'native-base'
import ItemCard from '../cards/ItemCard'


const ItemsList = ({navigation, item, currentTab, media}) => {

    return (
        <FlatList
            data={item}
            renderItem={({item}) => (<ItemCard navigation={navigation} item={item} currentTab={currentTab}/>
            )}
        />
    )
}


export default ItemsList
