import { Container, Heading, Link, List, ListItem, ListIcon, useColorModeValue } from "@chakra-ui/react"
import Section from "../components/section"
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons"

const Contact = () => {
    const iconColor = useColorModeValue('blue.500', 'orange.400')

    return (
        <Container maxW="container.lg">
            <Section delay={0.1}>
                <Heading as="h3" fontSize={20} mb={4}>
                    Contact me
                </Heading>
                <p style={{marginBottom: '1em'}}>
                    If you have any questions or comments, please feel free to contact me.
                </p>
                <List spacing={3}>
                    <ListItem>
                        <ListIcon as={EmailIcon} color={iconColor} />
                        Email: <Link href="mailto:lms025187@gmail.com">lms025187@gmail.com</Link>
                    </ListItem>
                    <ListItem>
                        <ListIcon as={PhoneIcon} color={iconColor} />
                        Phone: <Link href="tel:+886988888888">+886988888888</Link>
                    </ListItem>
                </List>
            </Section>
        </Container>
    )
}
export default Contact;