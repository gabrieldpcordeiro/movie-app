import React, {useState, useEffect} from 'react'
import ItemForm from '../forms/ItemForm';
import {getItems} from '../../services/api';
import ItemsList from '../lists/ItemsList';
import LoadSpinner from "../layout/Loading";

const ItemContainer = ({navigation, currentTab}) => {
    const [selectType, setSelectType] = useState("popular")
    const [isLoading, setIsLoading] = useState(false)
    const [items, setItems] = useState([])
    const currentItem = currentTab

    /* A hook that is used to fetch data from the API. */
    useEffect(() => {
        /**
         * It fetches the data from the API and sets the state of the items to the data that was fetched
         */
        async function fetchItems() {
            try {
                setIsLoading(true)

                const data = await getItems(currentTab, selectType);

                setItems([...data.results])
                setIsLoading(false)

            } catch (error) {
                throw error
            }
        }

        fetchItems();

    }, [selectType]);

    return (
        <>
            <ItemForm selectChoice={selectType} setSelectChoice={setSelectType} currentTab={currentTab}/>
            {isLoading ? <LoadSpinner/> :
                <ItemsList navigation={navigation} item={items} currentTab={currentItem}/>}
        </>
    )
}

export default ItemContainer
