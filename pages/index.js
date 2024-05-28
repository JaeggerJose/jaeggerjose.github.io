import { Container, Box, Image,Heading, Link, useColorModeValue, Button } from "@chakra-ui/react"
import NextLink from 'next/link'
import Section from "../components/section"
import Paragraph from "../components/paragraph" // import the paragraph component, which is a set styled p element
import { ChevronRightIcon } from "@chakra-ui/icons"
import { BioSection, BioYear } from "../components/bio"
import { GoogleAnalytics } from '@next/third-parties/google'

const Page = () => {
    return (
        <Container>
            <GoogleAnalytics gaId="G-N0YQWYT632" />
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} aligin="center" marginTop={4}>
                Hello, I&apos;m a full-stack developer in Taiwan!
            </Box>
            <Box display={{md : 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="H2" variant="page-title">
                        JaggerJose
                    </Heading>
                    <p>Software Engineer</p>
                </Box>
                <Box flexShrink={0} mt={{base: 4, md: 0}}
                ml={{md: 6}} aligin='center'>
                    <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="https://raw.githubusercontent.com/JaeggerJose/jaeggerjose.github.io/main/static/profile.jpeg" alt="Profile Image">
                    </Image> 
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                Work
                </Heading>
                <Paragraph>
                    I'm currently working at{" "}
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
                <BioSection>
                    <BioYear>2019</BioYear>
                    Graduated from St. Viator Catholic High School
                </BioSection>
                <BioSection>
                    <BioYear>2020</BioYear>
                    Got TestDaf 3 in Germany, Dresden (3, 4, 3, 4)
                </BioSection>

                <BioSection>
                    <BioYear>2022</BioYear>
                    Start at 
                    <NextLink href="https://praexisio.com.tw/">
                        <Link> Praexisio Taiwan Inc.</Link>
                    </NextLink> as a part time product engineer
                </BioSection>

                <BioSection>
                    <BioYear>2023</BioYear>
                    Start at <NextLink href="https://aic.cgu.edu.tw/"><Link> CGU AI Center </Link></NextLink>as a part time software engineer
                </BioSection>    
                <BioSection>
                    <BioYear>2024</BioYear>
                    Got IELTS 6.5 in Taiwan, Taipei (R: 6.5, L: 6.5, W: 6.5, S: 7.0)
                </BioSection>
                {/*once add a new bio insert a new Biosection at here under*/}
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Education
                </Heading>
                <Section>
                    <BioYear>2019-2025</BioYear>
                    Bachelor of CSIE, Chang Gung University
                </Section>
                <Section>
                    <BioYear>2016-2019</BioYear>
                    Senior High School, St. Viator Catholic High School
                </Section>
            </Section>

            <Section delay={0.4}>
                <Heading as="h3" variant="section-title">
                    Publications
                </Heading>
                <BioSection>
                    <BioYear>2023</BioYear>
                    Y. -Y. Chang, S. -T. Wong, E. O. Salawu, <span style={{fontWeight: "bold", color: "#ff63c3"}}>M. -H. Liao, </span> 
                    J. -H. Hung and L. -W. Yang, "Full-Privacy Secured Search Engine Empowered by Efficient Genome-Mapping Algorithms," 
                    in IEEE Journal of Biomedical and Health Informatics, vol. 27, no. 10, pp. 5155-5164, Oct. 2023,  doi: <NextLink href="https://ieeexplore.ieee.org/document/10198547"><Link>10.1109/JBHI.2023.3300885</Link></NextLink>
                </BioSection>
            </Section>
        </Container>
    )
}
export default Page