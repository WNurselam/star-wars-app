import { Input, InputGroup, InputLeftElement, Flex, Stack } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons'
import { useStarshipsContext } from '@/context/StarshipsContext';
import { useEffect } from 'react';
import { motion } from "framer-motion";


const Search = () => {
    const { setStarships, setShowCount, setPage, data, searchQuery, setSearchQuery } = useStarshipsContext()

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value);
        if (value === '') {
            setStarships(data.results);
        }
        if (searchQuery !== '' && !data?.results) {
            setStarships([])
            setPage(1)
            setShowCount(10)
        }
    }
    useEffect(() => {
        if (!searchQuery) {
            setPage(1);
        }
    }, [searchQuery]);
    

    return (
        <Flex justifyContent="center" >
            <Stack >
                <InputGroup as={motion.div} whileHover={{ scale: 1.2 }}
                    transition='0.5s linear' >
                    <InputLeftElement pointerEvents="all">
                        <Search2Icon />
                    </InputLeftElement >
                    <Input
                        type='search'
                        placeholder='Search Name / Model '
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