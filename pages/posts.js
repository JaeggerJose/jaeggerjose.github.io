import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from "../components/section";

const Posts = () => {
    return (
        <Container maxW="container.lg">
            <Section delay={0.1}>
                <Heading as="h3" fontSize={20} mb={4}>
                    My Life Records
                </Heading>
                <p>Coming soon...</p>
            </Section>
        </Container>
    )
} 
export default Posts