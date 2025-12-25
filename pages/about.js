import { Container, Divider, Heading, List, ListItem, ListIcon, Text, useColorModeValue, Link } from "@chakra-ui/react";
import Section from "../components/section";
import { StarIcon } from "@chakra-ui/icons"
import NextLink from 'next/link'

const About = () => {
    const iconColor = useColorModeValue('blue.500', 'orange.400')
    
    return(
        <Container>
            <Section delay={0.1}>
                <Heading as="h3" mb={4} marginTop={4}>
                    About
                </Heading>
                <Text fontStyle="italic" fontSize="xl" mb={4}>
                    "Journeys end in lovers meeting."
                </Text>
                <Divider mb={6} borderColor={useColorModeValue('gray.300', 'gray.600')} />
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Habits
                </Heading>
                <List spacing={3}>
                    <ListItem>
                        <ListIcon as={StarIcon} color={iconColor}/>
                        Surfing
                    </ListItem>
                    <ListItem>
                        <ListIcon as={StarIcon} color={iconColor}/>
                        <Link as={NextLink} href="/snowboarding">
                            Snowboarding
                        </Link>
                    </ListItem>
                    <ListItem>
                        <ListIcon as={StarIcon} color={iconColor}/>
                        Skateboarding
                    </ListItem>
                    <ListItem>
                        <ListIcon as={StarIcon} color={iconColor}/>
                        Photography
                    </ListItem>
                </List>                        
            </Section>
        </Container>
    )
}
export default About;