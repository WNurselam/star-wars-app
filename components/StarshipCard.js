import { Flex, Card, Heading, Stack, Image, Center, CardFooter, Button, ButtonGroup } from '@chakra-ui/react';
import images from '../public/dataImage.json'
import Link from 'next/link';
import { useStarshipsContext } from '@/context/StarshipsContext';
import { motion } from "framer-motion";
import StarshipModal from './StarshipModal';
import { StarIcon } from '@chakra-ui/icons'
import { useState, useEffect } from 'react';

const StarshipCard = ({ starship }) => {

    const image = images.find((image) => image.name === starship.name);
    const { handleAddFavorite, favorite, removeFavorite } = useStarshipsContext()

    const [isFavorite, setIsFavorite] = useState(false);
    useEffect(() => {
        const handleIsFavorite = () => {
            setIsFavorite(favorite.some((item) => item.name === starship.name));
        };

        handleIsFavorite();
    }, [favorite, starship]);

    const handleToggleFavorite = () => {
        if (isFavorite) {
            removeFavorite(starship);
        } else {
            handleAddFavorite(starship);
        }
    };

    return (
        <Flex
            as={motion.div}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            bg='#05061d'
            transition='0.5s linear'
        >
            <Card bg='transparent' borderRadius="5"
                _hover={{
                    boxShadow: "10px 10px 47px 0px rgba(29, 209, 161,0.2)",
                    transition: "400ms"
                }}
                width="300px"
            >   
                    <Image
                        src={image.img}
                        style={{
                            width: "300px",
                            height: "300px",
                            borderRadius: "5px",
                        }}
                    />
                <Stack>
                    <Heading size="md" pt='4' color='#ffc404' >
                        {starship.name}
                    </Heading>
                </Stack>
                <Center>
                    <CardFooter>
                        <ButtonGroup>
                            <StarIcon color={isFavorite ? 'orange.600' : 'white'} w={8} h={8} onClick={handleToggleFavorite} />
                            <StarshipModal starship={starship} />
                        </ButtonGroup>
                    </CardFooter>
                </Center>
            </Card>
        </Flex>
    )
}

export default StarshipCard;
