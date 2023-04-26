import { createContext, useContext } from "react";
import { useState } from "react";
import { fetchStarships } from "@/api/fetchStarships";
import { useQuery } from "react-query";
import { useEffect } from "react";


export const StarshipsContext = createContext();
export const useStarshipsContext = () => useContext(StarshipsContext);

const StarshipsProvider = ({ children }) => {
    const [starships, setStarships] = useState([])
    const [page, setPage] = useState(1)
    const [searchQuery, setSearchQuery] = useState('');
    const [showCount, setShowCount] = useState(10);
    const [favorite, setFavorite] = useState([])


    const { isLoading, isError, data, isSuccess } = useQuery(['starships', page, searchQuery, showCount],

        () => fetchStarships(searchQuery, page, showCount),
        {
            keepPreviousData: true,
            staleTime: Infinity,
            onSuccess: (data) => {
                if (data && data.results) {
                    if (page === 1) {
                        setStarships(data.results);
                    } else {
                        setStarships((prevStarships) => [...prevStarships, ...data.results]);
                    }
                }
            }
        }
    )
    //console.log(starships)


    function handleAddFavorite(starship) {
        const newFavorites = [...favorite, starship];
        setFavorite(newFavorites);
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
    }

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
        if (storedFavorites) {
            setFavorite(storedFavorites);
        }
    }, []);


    //console.log(favorite); 


    const values = {
        starships,
        setStarships,
        isLoading,
        data,
        page,
        setPage,
        showCount,
        setShowCount,
        searchQuery,
        setSearchQuery,
        isSuccess,
        handleAddFavorite,
        favorite,
        setFavorite
    }

    return (
        <StarshipsContext.Provider value={values}>
            {children}
        </StarshipsContext.Provider>
    )
}

export default StarshipsProvider;