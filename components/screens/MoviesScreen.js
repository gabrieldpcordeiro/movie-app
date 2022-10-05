import React from 'react'
import ItemContainer from '../containers/ItemContainer'

const MoviesScreen = ({ navigation }) => {

    return (
        <ItemContainer navigation={navigation} currentTab={'movie'} />
    )
}

export default MoviesScreen
