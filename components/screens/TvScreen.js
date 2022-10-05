import React from 'react'
import ItemContainer from '../containers/ItemContainer'

const TvScreen = ({ navigation, route }) => {

    return (
        <ItemContainer navigation={navigation} currentTab={'tv'} />
    )
}

export default TvScreen
