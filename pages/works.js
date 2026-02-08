import { Container, Heading } from "@chakra-ui/react"
import Section from "../components/section"

const Works = () => {
    return (
        <Container maxW="breakpoint-lg">
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
