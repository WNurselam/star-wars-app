import React from 'react'
import { Flex, Button, Box, Spinner } from '@chakra-ui/react';
import { useStarshipsContext } from '@/context/StarshipsContext';
import StarshipCard from './StarshipCard';


const CardList = () => {

  const { starships, setStarships, setShowCount, setPage, isLoading, searchQuery, isSuccess, isFetching } = useStarshipsContext();

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
          emptyColor='white'
          color='yellow.500' />
        <Box p="3">Starships is loading...</Box>
      </Flex>
    );
  }
  console.log(filteredStarships);
  return (
  
      <Box mt="12">
        {filteredStarships.length === 0 ? (
          <Box mt="20" color="white">Nothing Starships !</Box>
        ) : (
          
          <Flex gap='20' justifyContent='center' flexWrap="wrap" mb="6" mt="5">
            {isSuccess && filteredStarships.map((starship, index) => (
              <StarshipCard starship={starship} key={index} />
            ))}
          </Flex>

        )}
        {filteredStarships.length > 0 && (
          <Button p="25px" onClick={handleLoadMore} disabled={isLoading || isFetching}>
            {isLoading || isFetching ? (
              <Spinner
                size='lg'
                thickness='4px'
                speed='0.75s'
                emptyColor='white'
                color='yellow.500'
              />
            ) : (
              "Load More"
            )}
          </Button>
        )}
      </Box>
  )
}

export default CardList