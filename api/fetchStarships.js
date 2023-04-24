import axios from "axios";

export const fetchStarships = async (searchQuery,page,showCount) => {
    try {
        const response = await axios.get(`https://swapi.dev/api/starships/?search=${searchQuery}&page=${page}&limit=${showCount}`)
        return response.data;

    } catch (error) {
        console.log(error);
    }
}