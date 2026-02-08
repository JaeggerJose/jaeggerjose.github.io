import Link from 'next/link'
import { Box, Text } from '@chakra-ui/react'
import { useColorModeValue } from './ui/color-mode'

const LogoBox = (props) => (
    <Box
        as="span"
        fontWeight="bold"
        fontSize="18px"
        display="inline-flex"
        alignItems="center"
        height="30px"
        lineHeight="20px"
        padding="10px"
        css={{ "&:hover img": { transform: "rotate(20deg)" } }}
        {...props}
    />
)

const Logo = () => {
    return (
        <Link href="/" scroll={false}>
            <LogoBox>
                <Text
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    fontFamily='"M PLUS Rounded 1c", sans-serif'
                    fontWeight="bold"
                    ml={3}
                >
                    JaggerJose
                </Text>
            </LogoBox>
        </Link>
    )
}

export default Logo
