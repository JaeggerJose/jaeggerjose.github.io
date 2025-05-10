import { Container, Divider, SimpleGrid, Heading} from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import Link from "next/link"
const Contact = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Contact me
            </Heading>
            <Paragraph>
                If you have any questions or comments, please feel free to contact me.
            </Paragraph>
            <Paragraph>
                Email: <Link href="mailto:lms025187@gmail.com">lms025187@gmail.com</Link>
            </Paragraph>
            <Paragraph>
                Phone: <Link href="tel:+886988888888">+886988888888</Link>
            </Paragraph>
        </Container>
    )
}
export default Contact;