import { Container, Box, Image, Heading, Link, Button, Text } from "@chakra-ui/react"
import NextLink from 'next/link'
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { LuChevronRight } from "react-icons/lu"
import { BioSection, BioYear } from "../components/bio"
import { GoogleAnalytics } from '@next/third-parties/google'
import { useColorModeValue } from "../components/ui/color-mode"

const Page = () => {
    return (
        <Container maxW="breakpoint-lg">
            <GoogleAnalytics gaId="G-N0YQWYT632" />
            <Box
                borderRadius="lg"
                bg={useColorModeValue('whiteAlpha.300', 'whiteAlpha.100')}
                backdropFilter="blur(10px)"
                p={3}
                mb={6}
                textAlign="center"
                marginTop={4}
            >
                Hello, I&apos;m a full-stack developer in Taiwan!
            </Box>
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        JaggerJose
                    </Heading>
                    <span>
                        <p>Software Engineer</p>
                    </span>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    textAlign="center"
                >
                    <Image
                        boxShadow="lg"
                        maxWidth="150px"
                        display="inline-block"
                        borderRadius="full"
                        src="/static/profile.jpeg"
                        alt="Profile Image"
                    />
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading
                    as="h3"
                    textDecoration="underline"
                    fontSize={24}
                    textUnderlineOffset="6px"
                    textDecorationThickness="4px"
                    mt={3}
                    mb={4}
                    textDecorationColor="#525252"
                >
                    Work
                </Heading>
                <Paragraph>
                    I&apos;m currently studying at{' '}
                    <NextLink href="https://www.nycu.edu.tw/en/">NYCU</NextLink>
                    {' '}as a master student in Computer Science.
                </Paragraph>
                <Box my={4}>
                    <Button colorPalette="blue" asChild>
                        <NextLink href="/works">
                            My portfolio <LuChevronRight />
                        </NextLink>
                    </Button>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading
                    as="h3"
                    textDecoration="underline"
                    fontSize={24}
                    textUnderlineOffset="6px"
                    textDecorationThickness="4px"
                    mt={3}
                    mb={4}
                    textDecorationColor="#525252"
                >
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>2000</BioYear>
                    Born in Puli, Nantou, Taiwan
                </BioSection>
                <BioSection>
                    <BioYear>2020</BioYear>
                    Got TestDaf 3 in Germany, Dresden (3, 4, 3, 4)
                </BioSection>
                <BioSection>
                    <BioYear>2022</BioYear>
                    Start at{' '}
                    <NextLink href="https://praexisio.com.tw/">Praexisio Taiwan Inc.</NextLink>
                    {' '}as a part time product engineer
                </BioSection>
                <BioSection>
                    <BioYear>2023</BioYear>
                    Start at{' '}
                    <NextLink href="https://www.cgu.edu.tw/aic">CGU AI Center</NextLink>
                    {' '}as a part time software engineer
                </BioSection>
                <BioSection>
                    <BioYear>2024</BioYear>
                    Got IELTS 6.5 in Taiwan, Taipei (R: 6.5, L: 6.5, W: 6.5, S: 7.0)
                </BioSection>
                <BioSection>
                    <BioYear>2024</BioYear>
                    Start at{' '}
                    <NextLink href="https://www.comboware.ai/">Comboware</NextLink>
                    {' '}and{' '}
                    <NextLink href="https://www.ulink.com.tw/">Ulink</NextLink>
                    {' '}as a part time software engineer
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading
                    as="h3"
                    textDecoration="underline"
                    fontSize={24}
                    textUnderlineOffset="6px"
                    textDecorationThickness="4px"
                    mt={3}
                    mb={4}
                    textDecorationColor="#525252"
                >
                    Education
                </Heading>
                <BioSection>
                    <BioYear>2025-</BioYear>
                    Master of CS,{' '}
                    <NextLink href="https://www.nycu.edu.tw/en/">
                        National Yang Ming Chiao Tung University
                    </NextLink>
                    , Hsinchu, Taiwan
                </BioSection>
                <BioSection>
                    <BioYear>2025</BioYear>
                    Exchange student of informatique,{' '}
                    <NextLink href="https://www.sorbonne-universite.fr/en">
                        Sorbonne Université
                    </NextLink>
                    , Paris, France
                </BioSection>
                <BioSection>
                    <BioYear>2019-2025</BioYear>
                    Bachelor of CSIE,{' '}
                    <NextLink href="https://www.cgu.edu.tw/en/">Chang Gung University</NextLink>
                    , Taoyuan, Taiwan
                </BioSection>
                <BioSection>
                    <BioYear>2016-2019</BioYear>
                    Senior High School, St. Viator Catholic High School, Taichung, Taiwan
                </BioSection>
            </Section>

            <Section delay={0.4}>
                <Heading
                    as="h3"
                    textDecoration="underline"
                    fontSize={24}
                    textUnderlineOffset="6px"
                    textDecorationThickness="4px"
                    mt={3}
                    mb={4}
                    textDecorationColor="#525252"
                >
                    Language Skills
                </Heading>
                <Box mb={4}>
                    <Text fontWeight="bold" fontSize="lg">
                        🇹🇼 Chinese (Mandarin)
                    </Text>
                </Box>
                <Box mb={4}>
                    <Text fontWeight="bold" fontSize="lg">
                        🇬🇧 English
                    </Text>
                </Box>
                <Box mb={4}>
                    <Text fontWeight="bold" fontSize="lg">
                        🇩🇪 German
                    </Text>
                </Box>
                <Box mb={4}>
                    <Text fontWeight="bold" fontSize="lg">
                        🇫🇷 French
                    </Text>
                </Box>
            </Section>

            <Section delay={0.5}>
                <Heading
                    as="h3"
                    textDecoration="underline"
                    fontSize={24}
                    textUnderlineOffset="6px"
                    textDecorationThickness="4px"
                    mt={3}
                    mb={4}
                    textDecorationColor="#525252"
                >
                    Publications
                </Heading>
                <BioSection>
                    <BioYear>2023</BioYear>
                    Y. -Y. Chang, S. -T. Wong, E. O. Salawu,{' '}
                    <span style={{ fontWeight: 'bold', color: '#ffbd59' }}>M. -H. Liao, </span>
                    J. -H. Hung and L. -W. Yang, &quot;Full-Privacy Secured Search Engine Empowered
                    by Efficient Genome-Mapping Algorithms,&quot; in IEEE Journal of Biomedical and
                    Health Informatics, vol. 27, no. 10, pp. 5155-5164, Oct. 2023, doi:{' '}
                    <NextLink href="https://ieeexplore.ieee.org/document/10198547">
                        10.1109/JBHI.2023.3300885
                    </NextLink>
                </BioSection>
            </Section>
        </Container>
    )
}
export default Page
