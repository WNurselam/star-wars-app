import { useState } from 'react';
import {
    Flex,
    IconButton,
    Button,
    useDisclosure,
    Link,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    VStack,
    Image
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [display, changeDisplay] = useState('none');

    const bg = "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)"


    return (
        <Flex justifyContent="space-between" alignItems="center">
            <NextLink href="/" passHref>
                <Image
                    src="/logo.png"
                    width="150px"
                    pr="2"
                />
            </NextLink>
            <IconButton
                aria-label="Open Menu"
                size="lg"
                icon={<HamburgerIcon />}
                onClick={onOpen}
                display={['flex', 'flex', 'none', 'none']}
            />
            <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent bg={bg} >
                    <DrawerCloseButton />
                    <VStack alignItems="flex-start" pt="20">
                        <NextLink href="/" passHref>
                            <Button
                                as={Link}
                                variant="ghost"
                                aria-label="Home"
                                onClick={onClose}
                                w="100%"
                            >
                               HOME
                            </Button>
                        </NextLink>
                        <NextLink href="/favorites" passHref>
                            <Button
                                as={Link}
                                variant="ghost"
                                aria-label="Favorites"
                                onClick={onClose}
                                w="100%"
                            >
                                FAVORİTES
                            </Button>
                        </NextLink>
                    </VStack>
                </DrawerContent>
            </Drawer>
            <Flex
                display={['none', 'none', 'flex', 'flex']}
                alignItems="center"
                justifyContent="flex-end"
            >
                <NextLink href="/" passHref>
                    <Button variant="ghost" aria-label="Home" mx={2}>
                        Home
                    </Button>
                </NextLink>
                <NextLink href="/favorites" passHref>
                    <Button variant="ghost" aria-label="Favorites" mx={2}>
                        Favorites
                    </Button>
                </NextLink>
            </Flex>
        </Flex>
    );
};

export default Navbar