import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { useStarshipsContext } from '@/context/StarshipsContext'

const Favorites = () => {
    const { favorite, setFavorite } = useStarshipsContext();

    const removeFavorite = (starship) => {
        const newFavorites = favorite.filter((item) => item.name !== starship.name);
        setFavorite(newFavorites);
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
    }
    
    //console.log(favorite);
    return (
        <Box>
            {
                favorite && favorite.length > 0 ? favorite.map((starship) => (
                    <Box>
                        {starship && starship.name}

                        <Button onClick={() => removeFavorite(starship)}>Remove</Button>

                    </Box>

                )):<Box>You haven't added any movies to your favorites yet !</Box>
            }</Box>
    )
}

export default Favorites