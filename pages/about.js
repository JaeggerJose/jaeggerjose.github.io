import { Container, Separator, Heading, Text, Box, HStack, VStack } from "@chakra-ui/react"
import Section from "../components/section"
import { LuStar } from "react-icons/lu"
import NextLink from 'next/link'
import { useColorModeValue } from "../components/ui/color-mode"

const About = () => {
    const iconColor = useColorModeValue('#3182ce', '#ffbd59')

    return (
        <Container>
            <Section delay={0.1}>
                <Heading as="h3" mb={4} marginTop={4}>
                    About
                </Heading>
                <Text fontStyle="italic" fontSize="xl" mb={4}>
                    &quot;Journeys end in lovers meeting.&quot;
                </Text>
                <Separator mb={6} borderColor={useColorModeValue('gray.300', 'gray.600')} />
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
                    Habits
                </Heading>
                <VStack align="stretch" gap={3}>
                    <HStack gap={2}>
                        <LuStar color={iconColor} />
                        <Text>Surfing</Text>
                    </HStack>
                    <HStack gap={2}>
                        <LuStar color={iconColor} />
                        <NextLink href="/snowboarding">Snowboarding</NextLink>
                    </HStack>
                    <HStack gap={2}>
                        <LuStar color={iconColor} />
                        <Text>Skateboarding</Text>
                    </HStack>
                    <HStack gap={2}>
                        <LuStar color={iconColor} />
                        <Text>Photography</Text>
                    </HStack>
                </VStack>
            </Section>
        </Container>
    )
}
export default About
