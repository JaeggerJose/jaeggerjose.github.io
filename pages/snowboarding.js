import {
    Container,
    Heading,
    SimpleGrid,
    Box,
    Text,
    Badge,
    Flex,
    VStack,
    HStack,
    Button
} from "@chakra-ui/react"
import Section from "../components/section"
import { snowSpots } from "../libs/snow-spots"
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { LuChevronRight } from "react-icons/lu"
import { FaSnowboarding, FaMountain } from "react-icons/fa"
import { IoLocationSharp } from "react-icons/io5"
import SnowfallEffect from "../components/snowfall-effect"
import { useColorModeValue } from "../components/ui/color-mode"

const SnowMap = dynamic(() => import('../components/snow-map'), {
    ssr: false,
    loading: () => (
        <Box h="100%" display="flex" alignItems="center" justifyContent="center">
            Loading Map...
        </Box>
    )
})

const SnowPost = ({ spot, isActive, onClick }) => {
    const cardBg = useColorModeValue('white', 'whiteAlpha.100')
    const activeBg = useColorModeValue('teal.50', 'whiteAlpha.200')
    const borderColor = useColorModeValue('gray.200', 'whiteAlpha.300')
    const activeBorderColor = useColorModeValue('teal.400', 'teal.300')
    const descColor = useColorModeValue('gray.600', 'gray.300')

    return (
        <Box
            onClick={onClick}
            p={4}
            bg={isActive ? activeBg : cardBg}
            borderRadius="xl"
            borderWidth="1px"
            borderColor={isActive ? activeBorderColor : borderColor}
            cursor="pointer"
            transition="all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
            _hover={{
                transform: 'translateY(-2px)',
                shadow: 'md',
                borderColor: isActive ? activeBorderColor : 'gray.400'
            }}
            position="relative"
            role="group"
            mb={3}
        >
            <Flex gap={4}>
                <Flex
                    w={16} h={16}
                    borderRadius="lg"
                    backgroundImage={
                        isActive
                            ? "linear-gradient(to bottom right, var(--chakra-colors-teal-400), var(--chakra-colors-blue-500))"
                            : "linear-gradient(to bottom right, var(--chakra-colors-gray-400), var(--chakra-colors-gray-600))"
                    }
                    align="center"
                    justify="center"
                    color="white"
                    flexShrink={0}
                    transition="all 0.3s"
                >
                    <FaMountain size="1.5rem" />
                </Flex>

                <VStack align="start" gap={1} flex={1}>
                    <HStack justify="space-between" w="100%">
                        <Heading as="h4" size="sm" fontFamily="'M PLUS Rounded 1c', sans-serif">
                            {spot.title}
                        </Heading>
                        {isActive && (
                            <Badge colorPalette="teal" variant="solid" borderRadius="full" px={2} fontSize="0.6em">
                                ACTIVE
                            </Badge>
                        )}
                    </HStack>

                    <HStack fontSize="xs" color="gray.500" gap={2}>
                        <IoLocationSharp />
                        <Text>{spot.lat.toFixed(2)}, {spot.lng.toFixed(2)}</Text>
                        <Text>•</Text>
                        <Text>{spot.date}</Text>
                    </HStack>

                    <Text fontSize="sm" color={descColor} lineClamp={2} pt={1}>
                        {spot.desc}
                    </Text>
                </VStack>

                <Flex align="center" justify="center" color="gray.400">
                    <LuChevronRight size="1.5rem" />
                </Flex>
            </Flex>
        </Box>
    )
}

const Snowboarding = () => {
    const [activeSpot, setActiveSpot] = useState(null)
    const mapBg = useColorModeValue('gray.100', 'gray.800')
    const subtitleColor = useColorModeValue('gray.600', 'gray.400')

    return (
        <>
            <SnowfallEffect particleCount={150} />
            <Container maxW="breakpoint-xl" pt={10} px={{ base: 4, md: 8 }}>
                <Section delay={0.1}>
                    <Flex align="end" mb={10} direction={{ base: "column", md: "row" }} gap={4}>
                        <Box>
                            <Heading
                                as="h1"
                                fontSize={{ base: "3xl", md: "5xl" }}
                                fontWeight="900"
                                letterSpacing="tight"
                                mb={2}
                            >
                                Snow Tracks
                            </Heading>
                            <Text fontSize="lg" color={subtitleColor} maxW="2xl">
                                A curated collection of my snowboarding adventures across Japan.
                                Select a location to explore the terrain.
                            </Text>
                        </Box>
                    </Flex>
                </Section>

                <SimpleGrid columns={{ base: 1, lg: 12 }} gap={{ base: 8, lg: 8 }} alignItems="start">
                    <Box gridColumn={{ base: "span 1", lg: "span 5" }}>
                        <VStack gap={0} align="stretch">
                            <Box pr={2}>
                                <Section delay={0.2}>
                                    {snowSpots.map((spot) => (
                                        <SnowPost
                                            key={spot.id}
                                            spot={spot}
                                            isActive={activeSpot && activeSpot.id === spot.id}
                                            onClick={() => setActiveSpot(spot)}
                                        />
                                    ))}
                                </Section>
                            </Box>
                        </VStack>
                    </Box>

                    <Box
                        gridColumn={{ base: "span 1", lg: "span 7" }}
                        position="relative"
                        h={{ base: "400px", lg: "auto" }}
                    >
                        <Box
                            position={{ base: "relative", lg: "sticky" }}
                            top={{ base: 0, lg: 24 }}
                            h={{ base: "100%", lg: "75vh" }}
                            w="100%"
                            borderRadius="2xl"
                            overflow="hidden"
                            boxShadow="2xl"
                            bg={mapBg}
                        >
                            <SnowMap spots={snowSpots} activeSpot={activeSpot} />
                        </Box>
                    </Box>
                </SimpleGrid>
            </Container>
        </>
    )
}

export default Snowboarding
