import axios from 'axios';
import {API_KEY, BASE_URL} from './api_config';


export const getItems = async (itemType, itemId) => {
    try {

        const response = await axios.get(`${BASE_URL}/${itemType}/${itemId}?api_key=${API_KEY}`)

        return response.data;

    } catch (error) {
        throw error
    }
}

/**
 * It takes in a movie title as a parameter, and returns the data from the API call
 * @param movie - The movie you want to search for.
 * @param searchType
 * @returns The response.data is being returned.
 */
export const getSearch = async (movie, searchType) => {

    try {
        const response = await axios.get(`${BASE_URL}/search/${searchType}?query=${movie}&api_key=${API_KEY}`)
        return response.data;

    } catch (error) {
        throw error

    }
}

