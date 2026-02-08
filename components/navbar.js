import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    IconButton,
} from '@chakra-ui/react'
import { LuMenu } from 'react-icons/lu'
import { forwardRef } from 'react'
import ThemeToggleButton from './layouts/theme-toggle-button'
import { useColorModeValue } from './ui/color-mode'
import { Menu } from '@chakra-ui/react'

const LinkItem = ({ href, path, target, children, ...props }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
    const activeBg = useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')
    return (
        <Link
            asChild
            p={2}
            bg={active ? activeBg : undefined}
            color={active ? 'inherit' : inactiveColor}
            borderRadius="lg"
            {...props}
        >
            <NextLink href={href} scroll={false} target={target}>
                {children}
            </NextLink>
        </Link>
    )
}

const Navbar = (props) => {
    const { path } = props
    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('rgba(255, 255, 255, 0.25)', '#20202380')}
            style={{ backdropFilter: 'blur(10px)' }}
            zIndex={1}
            {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="breakpoint-xl"
                wrap="wrap"
                alignItems="center"
                justifyContent="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing="tighter">
                        <Logo />
                    </Heading>
                </Flex>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                    <LinkItem href="/works" path={path}>
                        Works
                    </LinkItem>
                    <LinkItem href="/about" path={path}>
                        About
                    </LinkItem>
                    <LinkItem href="/posts" path={path}>
                        Posts
                    </LinkItem>
                </Stack>

                <Box flex={1} textAlign="right">
                    <ThemeToggleButton />
                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu.Root>
                            <Menu.Trigger asChild>
                                <IconButton variant="outline" aria-label="Options" size="sm">
                                    <LuMenu />
                                </IconButton>
                            </Menu.Trigger>
                            <Menu.Content>
                                <Menu.Item value="works" asChild>
                                    <NextLink href="/works">Works</NextLink>
                                </Menu.Item>
                                <Menu.Item value="about" asChild>
                                    <NextLink href="/about">About</NextLink>
                                </Menu.Item>
                                <Menu.Item value="posts" asChild>
                                    <NextLink href="/posts">Posts</NextLink>
                                </Menu.Item>
                            </Menu.Content>
                        </Menu.Root>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar
