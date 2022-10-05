import React, {useState} from 'react'
import {Center} from 'native-base'
import SearchForm from '../forms/SearchForm'
import {getSearch} from '../../services/api'
import Loading from '../layout/Loading'
import ItemsList from '../lists/ItemsList'

const SearchContainer = ({navigation}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [movie, setMovie] = useState({})
    const [search, setSearch] = useState([])
    const [selectType, setSelectType] = useState("multi")

    const fetchSearch = async () => {
        try {
            setIsLoading(true)

            const data = await getSearch(movie, selectType)


            setSearch([...data.results])
            setIsLoading(false)
        } catch (error) {
            throw error

        }

    }

    const handleInputChange = movie => {
        setMovie(movie)
    }

    return (
        <>
            <Center px={4}>
                <SearchForm selectType={selectType} setSelectType={setSelectType} fetchSearch={fetchSearch}
                            onInputChange={handleInputChange}/>
            </Center>
            {isLoading ? <Loading/> : <ItemsList navigation={navigation} item={search} media={selectType}/>}
        </>
    )
}

export default SearchContainer
