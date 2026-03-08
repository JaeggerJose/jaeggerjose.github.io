import Head from 'next/head'
import { Container, Heading } from "@chakra-ui/react"
import Section from "../components/section"

const Works = () => {
    return (
        <Container maxW="breakpoint-lg">
            <Head>
                <title>Works | JaggerJose</title>
                <meta name="description" content="Portfolio and works by JaggerJose (Ming-Hsuan Liao)." />
            </Head>
            <Section delay={0.1}>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>
                <p>Coming soon...</p>
            </Section>
        </Container>
    )
}
export default Works
