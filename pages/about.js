import { Container, Box, Divider, Heading, SimpleGrid, List, ListItem, ListIcon, Text } from "@chakra-ui/react";
import Section from "../components/section";
import { BioSection, BioYear } from "../components/bio"
import { StarIcon } from "@chakra-ui/icons"
const About = () => {
    return(
        <Container>
            <Heading as="h3" mb={4} marginTop={4}>
                About
            </Heading>
            <Text style={{fontFamily: 'italic'}} fontSize="xl">
                Journys end in lovers meeting
            </Text>
            <Divider mb={4}/>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Habits
                    </Heading>
                    <List spacing={3}>
                        <ListItem>
                            <ListIcon as={StarIcon} color="red.500"/>
                            Surfing
                        </ListItem>
                        <ListItem>
                            <ListIcon as={StarIcon} color="red.500"/>
                            Snowboarding
                        </ListItem>
                        <ListItem>
                            <ListIcon as={StarIcon} color="red.500"/>
                            Skateboarding
                        </ListItem>
                        <ListItem>
                            <ListIcon as={StarIcon} color="red.500"/>
                            Photography
                        </ListItem>
                    </List>                        
            </Section>
        </Container>
    )
}
export default About;