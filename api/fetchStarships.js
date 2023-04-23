import axios from "axios";

export const fetchStarships = async (searchQuery,page) => {

    try {
        const response = await axios.get(`https://swapi.dev/api/starships/?search=${searchQuery}&page=${page}`)
        return response.data;

    } catch (error) {
        
        console.log(error);
    }
}