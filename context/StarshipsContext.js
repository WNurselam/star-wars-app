import { createContext, useContext, useState } from "react";
import { useQuery } from "react-query";
import { fetchStarships } from "@/api/fetchStarships";


export const StarshipsContext = createContext();
export const useStarshipsContext = () => useContext(StarshipsContext);

const StarshipsProvider = ({ children }) => {
    const [page, setPage] = useState(1)
    const [searchQuery, setSearchQuery] = useState('');
    const [starships,setStarships] = useState([])

    const { isLoading, isError, data } = useQuery(['starships', page, searchQuery],

        () => fetchStarships( searchQuery,page),
        {
            keepPreviousData: true,
            refetchOnWindowFocus: false,
        }
    );

    const values = {
        page,
        setPage,
        searchQuery,
        setSearchQuery,
        data,
        isLoading,
        isError,
        starships,
        setStarships
    }

    return (
        <StarshipsContext.Provider value={values}>
            {children}
        </StarshipsContext.Provider>
    )
}

export default StarshipsProvider;