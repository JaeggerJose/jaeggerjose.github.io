import { Container, Box, Heading, ColorModeScript } from "@chakra-ui/react"

const Page = () => {

    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3} mb={6} aligin="center">
                Hello, I&apos;m a full-stack developer in Taiwan!
            </Box>
            <Box display={{md : 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        JaggerJose
                    </Heading>
                    <p>Digital Craftzman (Software Enginear)</p>
                </Box>
            </Box>
        </Container>
    )
}
export default Page