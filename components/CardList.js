import React from 'react'
import { Flex, Button,Box,Spinner } from '@chakra-ui/react';
import { useStarshipsContext } from '@/context/StarshipsContext';
import StarshipCard from './StarshipCard';

const CardList = () => {

  const { starships, setShowCount, setPage, isLoading,searchQuery,isSuccess } = useStarshipsContext();

  const handleLoadMore = () => {
    setShowCount((count) => count + 10);
    setPage((page) => page + 1);
  };
  //console.log(starships);

  const filteredStarships = starships.filter(starship => (
    starship.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    starship.model.toLowerCase().includes(searchQuery.toLowerCase())
  ));

  if (isLoading) {
    return (
      <Flex justifyContent="center" alignItems="center" m="10" >
        <Spinner size="lg"
          thickness='4px'
          speed='0.50s'
          emptyColor='gray.200'
          color='blue.500' />
        <Box p="3">Starships is loading...</Box>
      </Flex>
    );
  }
  //console.log(filteredStarships);
  return (
    <Box>
    <Flex justifyContent="space-evenly" flexWrap="wrap" mb="6" mt="5">
      {
        isSuccess && filteredStarships?.map((starship,index) => (
          <StarshipCard starship={starship} key={index} />
        ))
      }   
    </Flex>
    <Button onClick={handleLoadMore} disabled={isLoading}>
        {isLoading ? "Loading..." : "Load More"}
      </Button>
    </Box>
  )
}

export default CardList