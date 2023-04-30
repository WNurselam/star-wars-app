import { Input, InputGroup, InputLeftElement, Flex, Stack } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons'
import { useStarshipsContext } from '@/context/StarshipsContext';
import { motion } from "framer-motion";


const Search = () => {
    const { setStarships,setPage, searchQuery, setSearchQuery } = useStarshipsContext()

    //console.log(searchQuery);
    const handleChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value); 
        setPage(1)
        setStarships([]) 
    }

    return (
        <Flex justifyContent="center" >
            <Stack >
                <InputGroup as={motion.div} whileHover={{ scale: 1.2 }}
                    transition='0.5s linear' >
                    <InputLeftElement pointerEvents="all">
                        <Search2Icon />
                    </InputLeftElement >
                    <Input
                        placeholder='Search Name / Model '
                        value={searchQuery}
                        onChange={handleChange}
                        pr='5.5rem'
                        border="1px"
                        borderColor="whiteAlpha.400"
                        color="orange.500"
                    />
                </InputGroup>
            </Stack>
        </Flex>
    )
}

export default Search