import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons'
import { useEffect } from 'react';
import { useStarshipsContext } from '@/context/StarshipsContext';


const Search = () => {
    const { setStarships, searchQuery, setSearchQuery, data } = useStarshipsContext()

    const handleChange = (e) => {
        setStarships([]);
        setSearchQuery(e.target.value);
    }

    useEffect(() => {
        if (data && data.results) {
            setStarships((prevStarships) => [...prevStarships, ...data.results]);
        }
    }, [data])

    return (
        <Box>
            <form onSubmit={(e) => e.preventDefault()}>
                <InputGroup >
                    <InputLeftElement pointerEvents="all">
                        <Search2Icon />
                    </InputLeftElement >
                    <Input
                        type='search'
                        placeholder='Search Starships'
                        value={searchQuery}
                        onChange={handleChange}
                    />
                </InputGroup>
            </form>
        </Box>
    )
}

export default Search