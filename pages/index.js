import { Container, Box, Heading, Button, extendTheme, ColorModeScript, useColorMode } from "@chakra-ui/react"
import Theme from './theme'
function Example() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <header>
        <Button onClick={toggleColorMode} fontSize={20} width={24}>
            {colorMode === 'light' ? '🌃' : '🔆'}
        </Button>
      </header>
    )
  }


const Page = () => {

    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3} mb={6} aligin="center">
                Hello, I&apos;m a full-stack developer in Taiwan!
            </Box>
            <Box display={{md : 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Ming-Hsaun Liao aka. JaggerJose
                    </Heading>
                    <p>Digital Craftzman (Software Enginear)</p>
                </Box>
                <Box>
                <ColorModeScript initialColorMode={Theme.config.initialColorMode} />
                </Box>
                <Example />
            </Box>
        </Container>
    )
}
export default Page