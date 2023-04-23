import React, { useEffect } from 'react'
import { useStarshipsContext } from '@/context/StarshipsContext'
import { Box, Input, InputGroup,InputLeftElement } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons'


const Search = () => {

    const { data, searchQuery, setSearchQuery,setPage,starships,setStarhips } = useStarshipsContext();
    //console.log(data);

    const handleChange = (e) => {
        setSearchQuery(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }



    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <InputGroup >
                    <InputLeftElement pointerEvents="all">
                        <Search2Icon   />
                    </InputLeftElement >
                    <Input
                        type='search'
                        placeholder='Search Starships'
                        value={searchQuery}
                        onChange={handleChange}
                    />
                </InputGroup>
            </form>
            {
                data?.results?.map((item) => (
                    <Box>{item.name}</Box>
                ))
            }
        </Box>
    )
}

export default Search