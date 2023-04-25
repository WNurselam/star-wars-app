import { Flex, Card, Heading, Stack, Divider, Center, CardFooter } from '@chakra-ui/react';
import React from 'react'
import images from '../public/dataImage.json'
import { LazyLoadImage } from "react-lazy-load-image-component"
import Link from 'next/link';


const StarshipCard = ({ starship }) => {

    const image = images.find((image) => image.name === starship.name);
    return (
        <Flex>
            <Card m="6" borderRadius="5"
                _hover={{
                    boxShadow: "10px 10px 47px 0px rgba(99, 99, 99, 0.5)",
                    transition: "400ms"

                }}
            >
                <Link href={`/${starship.name}`}>
                    <LazyLoadImage
                        src={image.img}
                        effect='blur'
                        style={{
                            width: "330px",
                            height: "370px",
                            borderRadius: "5px"
                        }}
                    />
                </Link>
                <Stack>
                    <Heading size="md" >
                        {starship.name}
                    </Heading>
                </Stack>
                <Divider />
                <Center>
                    <CardFooter>
                    </CardFooter>
                </Center>
            </Card>
        </Flex>
    )
}

export default StarshipCard;