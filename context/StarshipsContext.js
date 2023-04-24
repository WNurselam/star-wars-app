import { createContext, useContext } from "react";
import { useState } from "react";
import { fetchStarships } from "@/api/fetchStarships";
import { useQuery } from "react-query";




export const StarshipsContext = createContext();
export const useStarshipsContext = () => useContext(StarshipsContext);

const StarshipsProvider = ({ children }) => {  
    const [starships, setStarships] = useState([])
    const [page, setPage] = useState(1)
    const [searchQuery, setSearchQuery] = useState('');
    const [showCount, setShowCount] = useState(10);

    const { isLoading, isError, data } = useQuery(['starships', page, searchQuery, showCount],

    () => fetchStarships(searchQuery, page, showCount),
    {
        keepPreviousData: true,
        staleTime: Infinity
    }
)

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
      setSearchQuery
    }

    return (
        <StarshipsContext.Provider value={values}>
            {children}
        </StarshipsContext.Provider>
    )
}

export default StarshipsProvider;