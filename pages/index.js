import { Container, Box, Image,Heading, Link, useColorModeValue, Button } from "@chakra-ui/react"
import NextLink from 'next/link'
import Section from "../components/section"
import Paragraph from "../components/paragraph" // import the paragraph component, which is a set styled p element
import { ChevronRightIcon } from "@chakra-ui/icons"
import { BioSection, BioYear } from "../components/bio"
const Page = () => {

    return (
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} aligin="center">
                Hello, I&apos;m a full-stack developer in Taiwan!
            </Box>
            <Box display={{md : 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        JaggerJose
                    </Heading>
                    <p>Digital Craftzman (Software Enginear)</p>
                </Box>
                <Box flexShrink={0} mt={{base: 4, md: 0}}
                ml={{md: 6}} aligin='center'>
                    <Image borderColor="whiteAplpah.800" borderWifth={2} borderStyle="soild" maxWidth="100px" display="inline-block" borderRadius="full" src="https://static.gltjp.com/glt/prd/data/directory/13000/12058/20210822_040633_9fd817d6_w1920.jpg" alt="Profile Image">
                    </Image> 
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                Work
                </Heading>
                <Paragraph>
                    Test text with {'    space'}
                    <NextLink href="https://praexisio.com.tw/">
                        <Link>Praexisio Taiwan Inc.</Link>
                    </NextLink>
                </Paragraph>
                <Box aligin="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
                            My portfile
                        </Button>
                    </NextLink>
                </Box>
            </Section>
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>2000</BioYear>
                    Born in Puli, Nantou, Taiwan
                </BioSection>
                {/*once add a new bio insert a new Biosection at here under*/}
            </Section>
        </Container>
    )
}
export default Page