import { Input, InputGroup, InputLeftElement, Flex, Stack } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons'
import { useStarshipsContext } from '@/context/StarshipsContext';


const Search = () => {
    const { setStarships, searchQuery, setSearchQuery } = useStarshipsContext()

    const handleChange = (e) => {
        setStarships([]);
        setSearchQuery(e.target.value);
    }

    return (
        <Flex justifyContent="center"  >
            <Stack >
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
                            pr='5.5rem'

                        />
                    </InputGroup>
                </form>
            </Stack>
        </Flex>
    )
}

export default Search