import { useState } from 'react'
import { 
    Flex,
    Button,
    IconButton,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'


const Navbar = () => {
  
    const [display, changeDisplay] = useState('none')
    return (
        <Flex  justifyContent="flex-end">
            <Flex
                top="1rem"
                right="1rem"
                align="center"
            >
               
                <Flex
                    display={['none', 'none', 'flex', 'flex']}
                >
                    <NextLink href="/" passHref>
                        <Button
                            variant="ghost"
                            aria-label="Home"
                            my={5}
                            w="100%"
                        >
                            Home
                        </Button>
                    </NextLink>

                    <NextLink href="/favorites" passHref>
                        <Button

                            variant="ghost"
                            aria-label="About"
                            my={5}
                            w="100%"
                        >
                            Favorites
                        </Button>
                    </NextLink>
                </Flex>

              
                <IconButton
                    aria-label="Open Menu"
                    size="lg"
                    mr={2}
                    icon={
                        <HamburgerIcon />
                    }
                    onClick={() => changeDisplay('flex')}
                    display={['flex', 'flex', 'none', 'none']}
                />
               
            </Flex>

        
            <Flex
                w='100vw'
                display={display}
                bgColor="gray.50"
                zIndex={20}
                h="100vh"
                pos="fixed"
                top="0"
                left="0"
                overflowY="auto"
                flexDir="column"
            >
                <Flex justify="flex-end">
                    <IconButton
                        mt={2}
                        mr={2}
                        aria-label="Open Menu"
                        size="lg"
                        icon={
                            <CloseIcon />
                        }
                        onClick={() => changeDisplay('none')}
                    />
                </Flex>

                <Flex
                    flexDir="column"
                    align="center"
                >
                    <NextLink href="/" passHref>
                        <Button

                            variant="ghost"
                            aria-label="Home"
                            my={5}
                            w="100%"
                        >
                            Home
                        </Button>
                    </NextLink>

                    <NextLink href="/favorites" passHref>
                        <Button
                            variant="ghost"
                            aria-label="About"
                            my={5}
                            w="100%"
                        >
                            Favorites
                        </Button>
                    </NextLink>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Navbar