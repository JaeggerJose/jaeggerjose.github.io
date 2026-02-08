import { Box, Flex, Text, HStack, Separator } from '@chakra-ui/react'
import { LuMail, LuPhone, LuGithub } from 'react-icons/lu'
import { useColorModeValue } from './ui/color-mode'

const Footer = () => {
    const textColor = useColorModeValue('gray.500', 'gray.500')
    const hoverColor = useColorModeValue('blue.500', 'orange.400')
    const separatorColor = useColorModeValue('gray.200', 'whiteAlpha.200')

    return (
        <Box as="footer" mt={16} pb={6}>
            <Separator borderColor={separatorColor} mb={6} />

            {/* Contact links */}
            <Flex
                justify="center"
                gap={{ base: 4, md: 8 }}
                mb={4}
                flexWrap="wrap"
            >
                <a href="mailto:lms025187@gmail.com" style={{ textDecoration: 'none' }}>
                    <HStack
                        gap={2}
                        color={textColor}
                        fontSize="sm"
                        transition="color 0.2s"
                        _hover={{ color: hoverColor }}
                        cursor="pointer"
                    >
                        <LuMail size="16px" />
                        <Text>lms025187@gmail.com</Text>
                    </HStack>
                </a>
                <a href="tel:+886988888888" style={{ textDecoration: 'none' }}>
                    <HStack
                        gap={2}
                        color={textColor}
                        fontSize="sm"
                        transition="color 0.2s"
                        _hover={{ color: hoverColor }}
                        cursor="pointer"
                    >
                        <LuPhone size="16px" />
                        <Text>+886 988 888 888</Text>
                    </HStack>
                </a>
                <a href="https://github.com/jaeggerjose" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <HStack
                        gap={2}
                        color={textColor}
                        fontSize="sm"
                        transition="color 0.2s"
                        _hover={{ color: hoverColor }}
                        cursor="pointer"
                    >
                        <LuGithub size="16px" />
                        <Text>GitHub</Text>
                    </HStack>
                </a>
            </Flex>

            {/* Copyright */}
            <Text textAlign="center" fontSize="xs" color={textColor} opacity={0.6}>
                &copy; {new Date().getFullYear()} JaggerJose. All Rights Reserved.
            </Text>
        </Box>
    )
}

export default Footer
