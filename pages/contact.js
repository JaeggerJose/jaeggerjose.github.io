import Head from 'next/head'
import { Container, Heading, Link, Text, VStack, HStack } from "@chakra-ui/react"
import Section from "../components/section"
import { LuMail, LuPhone } from "react-icons/lu"
import { useColorModeValue } from "../components/ui/color-mode"

const Contact = () => {
    const iconColor = useColorModeValue('#3182ce', '#ffbd59')

    return (
        <Container maxW="breakpoint-lg">
            <Head>
                <title>Contact | JaggerJose</title>
                <meta name="description" content="Contact JaggerJose (Ming-Hsuan Liao) via email or phone." />
            </Head>
            <Section delay={0.1}>
                <Heading as="h3" fontSize={20} mb={4}>
                    Contact me
                </Heading>
                <Text mb={4}>
                    If you have any questions or comments, please feel free to contact me.
                </Text>
                <VStack align="stretch" gap={3}>
                    <HStack gap={2}>
                        <LuMail color={iconColor} />
                        <Text>Email: <Link href="mailto:lms025187@gmail.com">lms025187@gmail.com</Link></Text>
                    </HStack>
                    <HStack gap={2}>
                        <LuPhone color={iconColor} />
                        <Text>Phone: <Link href="tel:+886968926910">+886968926910</Link></Text>
                    </HStack>
                </VStack>
            </Section>
        </Container>
    )
}
export default Contact
