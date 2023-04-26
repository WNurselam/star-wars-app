import { Box, Input, InputGroup, InputLeftElement, Flex } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons'
import { useStarshipsContext } from '@/context/StarshipsContext';


const Search = () => {
    const { setStarships, searchQuery, setSearchQuery } = useStarshipsContext()

    const handleChange = (e) => {
        setStarships([]);
        setSearchQuery(e.target.value);
    }

    return (
        <Flex direction="column">
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
        </Flex>
    )
}

export default Search