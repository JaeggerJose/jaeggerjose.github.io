import { 
    Container, 
    Heading, 
    SimpleGrid, 
    Box, 
    Text, 
    Badge, 
    useColorModeValue, 
    Flex, 
    Icon, 
    VStack, 
    HStack, 
    Spacer,
    Button
} from "@chakra-ui/react"
import Section from "../components/section"
import { snowSpots } from "../libs/snow-spots"
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { ChevronRightIcon } from "@chakra-ui/icons"
import { FaSnowboarding, FaMountain } from "react-icons/fa" 
import { IoLocationSharp } from "react-icons/io5"
import SnowfallEffect from "../components/snowfall-effect"

// Dynamic import for the Map component
const SnowMap = dynamic(() => import('../components/snow-map'), {
    ssr: false,
    loading: () => <Box h="100%" display="flex" alignItems="center" justifyContent="center">Loading Map...</Box>
})

const SnowPost = ({ spot, isActive, onClick }) => {
    const cardBg = useColorModeValue('white', 'whiteAlpha.100')
    const activeBg = useColorModeValue('teal.50', 'whiteAlpha.200')
    const borderColor = useColorModeValue('gray.200', 'whiteAlpha.300')
    const activeBorderColor = useColorModeValue('teal.400', 'teal.300')
    
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
                {/* Visual Thumbnail / Icon */}
                <Flex 
                    w={16} 
                    h={16} 
                    borderRadius="lg" 
                    bgGradient={isActive ? "linear(to-br, teal.400, blue.500)" : "linear(to-br, gray.400, gray.600)"}
                    align="center" 
                    justify="center"
                    color="white"
                    shrink={0}
                    transition="all 0.3s"
                >
                    <Icon as={FaMountain} w={6} h={6} />
                </Flex>

                <VStack align="start" spacing={1} flex={1}>
                    <HStack justify="space-between" w="100%">
                        <Heading as="h4" size="sm" fontFamily="'M PLUS Rounded 1c', sans-serif">
                            {spot.title}
                        </Heading>
                        {isActive && <Badge colorScheme="teal" variant="solid" borderRadius="full" px={2} fontSize="0.6em">ACTIVE</Badge>}
                    </HStack>
                    
                    <HStack fontSize="xs" color="gray.500" spacing={2}>
                        <Icon as={IoLocationSharp} />
                        <Text>{spot.lat.toFixed(2)}, {spot.lng.toFixed(2)}</Text>
                        <Text>•</Text>
                        <Text>{spot.date}</Text>
                    </HStack>
                    
                    <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.300')} noOfLines={2} pt={1}>
                        {spot.desc}
                    </Text>
                </VStack>

                <Flex align="center" justify="center" color="gray.400">
                    <Icon as={ChevronRightIcon} w={6} h={6} _groupHover={{ color: 'teal.500', transform: 'translateX(2px)' }} transition="all 0.2s" />
                </Flex>
            </Flex>
        </Box>
    )
}

const Snowboarding = () => {
    const [activeSpot, setActiveSpot] = useState(null)

    return (
        <>
            <SnowfallEffect particleCount={150} />
            <Container maxW="container.xl" pt={10} px={{ base: 4, md: 8 }}>
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
                        <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.400')} maxW="2xl">
                            A curated collection of my snowboarding adventures across Japan. 
                            Select a location to explore the terrain.
                        </Text>
                    </Box>
                </Flex>
            </Section>

            <SimpleGrid columns={{ base: 1, lg: 12 }} spacing={{ base: 8, lg: 8 }} alignItems="start">
                {/* Left Column: List (4 columns wide on large screens) */}
                <Box gridColumn={{ base: "span 1", lg: "span 5" }}>
                    <VStack spacing={0} align="stretch">
                        <Box 
                            // Only scroll if list is very long, otherwise let it flow
                            // overflowY="auto" 
                            // maxH={{ base: "auto", lg: "75vh" }}
                            pr={2}
                        >
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

                {/* Right Column: Map (7 columns wide on large screens) */}
                <Box 
                    gridColumn={{ base: "span 1", lg: "span 7" }} 
                    position="relative"
                    // On mobile, fixed height. On desktop, auto height (stretch) but inner sticky box has fixed height.
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
                        bg={useColorModeValue('gray.100', 'gray.800')}
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
