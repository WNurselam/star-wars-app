import { Flex, Card, Heading, Stack,Image, Center, CardFooter, Button } from '@chakra-ui/react';
import images from '../public/dataImage.json'
import Link from 'next/link';
import { useStarshipsContext } from '@/context/StarshipsContext';
import { motion } from "framer-motion";


const StarshipCard = ({ starship }) => {

    const image = images.find((image) => image.name === starship.name);
    const { handleAddFavorite } = useStarshipsContext()


    return (
        <Flex
            as={motion.div}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            bg='#05061d'
            transition='0.5s linear'
        >
            <Card  bg='transparent' borderRadius="5"
                _hover={{
                     boxShadow: "10px 10px 47px 0px rgba(29, 209, 161,0.2)",
                    transition: "400ms"

                }}
            >
                <Link  href={`/${starship.name}`}>
                    <Image
                        src={image.img}
                        style={{
                            width: "350px",
                            height: "370px",
                            borderRadius: "5px",
                            
                        }}
                        
                    />
                </Link>

                <Stack>
                    <Heading size="md" pt='4' color='#ffc404' >
                        {starship.name}
                    </Heading>
                </Stack>
                <Center>
                    <CardFooter>
                        <Button as={motion.div}
                            whileHover={{ color: 'white' }}
                            color='#ffc404' onClick={() => handleAddFavorite(starship)}>Add Favorite</Button>
                    </CardFooter>
                </Center>
            </Card>
        </Flex>
    )
}

export default StarshipCard;