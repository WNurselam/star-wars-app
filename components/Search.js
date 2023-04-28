import { Input, InputGroup, InputLeftElement, Flex, Stack } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons'
import { useStarshipsContext } from '@/context/StarshipsContext';
import { useEffect } from 'react';


const Search = () => {
    const { setStarships, setPage, data, searchQuery, setSearchQuery } = useStarshipsContext()

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value);
        if (searchQuery !== '' && !data?.results) {
            setStarships([])
            setPage(1)
        }
    }
    useEffect(() => {
        if (!searchQuery) {
            setPage(1);
        }
    }, [searchQuery]);

    return (
        <Flex justifyContent="center"  >
            <Stack >
                <InputGroup >
                    <InputLeftElement pointerEvents="all">
                        <Search2Icon />
                    </InputLeftElement >
                    <Input
                        type='search'
                        placeholder='Search Starships'
                        value={searchQuery}
                        onChange={handleChange}
                        pr='5.5rem'
                    />
                </InputGroup>
            </Stack>
        </Flex>
    )
}

export default Search