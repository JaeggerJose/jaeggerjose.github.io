import fs from 'fs'
import path from 'path'
import {
    Container,
    Heading,
    Box,
    Text,
    Link,
    Image,
    VStack,
    HStack,
    Flex,
    Separator,
} from "@chakra-ui/react"
import { LuCalendar, LuArrowRight, LuBookOpen } from "react-icons/lu"
import NextLink from 'next/link'
import Section from "../../components/section"
import { useColorModeValue } from "../../components/ui/color-mode"

// Weekly Post Card — 類似 TW93 的簡潔卡片風格
const WeeklyPostCard = ({ title, coverCaption, date, slug, thumbnail, id }) => {
    const cardBg = useColorModeValue('white', 'whiteAlpha.100')
    const textColor = useColorModeValue('gray.600', 'gray.400')
    const titleColor = useColorModeValue('gray.800', 'white')
    const borderColor = useColorModeValue('gray.200', 'whiteAlpha.200')
    const accentColor = useColorModeValue('blue.500', 'orange.400')
    const captionColor = useColorModeValue('gray.500', 'gray.500')
    const volColor = useColorModeValue('blue.400', 'orange.300')

    return (
        <Link asChild style={{ textDecoration: 'none' }} _hover={{ textDecoration: 'none' }}>
            <NextLink href={`/posts/${slug}`}>
                <Box
                    bg={cardBg} borderRadius="xl" overflow="hidden"
                    border="1px solid" borderColor={borderColor}
                    transition="all 0.25s cubic-bezier(0.4, 0, 0.2, 1)"
                    _hover={{ transform: 'translateY(-4px)', boxShadow: 'xl', borderColor: accentColor }}
                    cursor="pointer"
                >
                    {/* Cover Image */}
                    <Box position="relative" overflow="hidden" h={{ base: '200px', md: '260px' }}>
                        <Image
                            src={thumbnail || '/static/profile.jpeg'}
                            alt={title}
                            objectFit="cover"
                            w="100%" h="100%"
                            transition="transform 0.4s ease"
                            _hover={{ transform: 'scale(1.03)' }}
                        />
                        {/* Volume badge */}
                        <Box
                            position="absolute" top={3} left={3}
                            bg="blackAlpha.600" backdropFilter="blur(8px)"
                            borderRadius="full" px={3} py={1}
                        >
                            <Text fontSize="xs" fontWeight="bold" color="white">
                                Vol.{id}
                            </Text>
                        </Box>
                    </Box>

                    {/* Content */}
                    <Box p={5}>
                        <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} color={titleColor} lineHeight="1.4" mb={2}>
                            {title}
                        </Heading>

                        {coverCaption && (
                            <Text fontSize="sm" color={captionColor} lineClamp={2} lineHeight="1.6" mb={3} fontStyle="italic">
                                {coverCaption}
                            </Text>
                        )}

                        <Flex justify="space-between" align="center">
                            <HStack gap={1} fontSize="xs" color={textColor}>
                                <LuCalendar size="12px" />
                                <Text>{date}</Text>
                            </HStack>
                            <HStack gap={1} color={accentColor} fontWeight="medium" fontSize="sm">
                                <Text>閱讀</Text>
                                <LuArrowRight size="14px" />
                            </HStack>
                        </Flex>
                    </Box>
                </Box>
            </NextLink>
        </Link>
    )
}

const Posts = ({ posts }) => {
    const subtitleColor = useColorModeValue('gray.600', 'gray.400')
    const accentColor = useColorModeValue('blue.500', 'orange.400')
    const stayTunedBg = useColorModeValue('blue.50', 'whiteAlpha.100')
    const stayTunedBorder = useColorModeValue('blue.200', 'whiteAlpha.300')

    return (
        <Container maxW="breakpoint-md">
            {/* Header */}
            <Section delay={0.1}>
                <Flex align="center" gap={3} mb={2} mt={4}>
                    <LuBookOpen size="28px" color="var(--chakra-colors-blue-500)" />
                    <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold">
                        Weekly Journal
                    </Heading>
                </Flex>
                <Text fontSize={{ base: 'sm', md: 'md' }} color={subtitleColor} lineHeight="1.6" mb={8}>
                    記錄每週的生活、技術和想法，想到什麼寫什麼。
                </Text>
                <Separator borderColor={useColorModeValue('gray.200', 'whiteAlpha.200')} mb={8} />
            </Section>

            {/* Post cards */}
            <VStack gap={6} align="stretch">
                {posts.map((post, index) => (
                    <Section key={post.slug} delay={0.1 + index * 0.05}>
                        <WeeklyPostCard {...post} />
                    </Section>
                ))}
            </VStack>

            {/* Stay tuned */}
            <Section delay={0.5}>
                <Box mt={12} mb={8} p={6} borderRadius="xl" bg={stayTunedBg} border="1px dashed" borderColor={stayTunedBorder} textAlign="center">
                    <Text fontSize="lg" fontWeight="semibold" mb={2}>🗓️ 敬請期待</Text>
                    <Text color={subtitleColor} fontSize="sm">每週更新，記錄生活與技術的點點滴滴。</Text>
                </Box>
            </Section>
        </Container>
    )
}

export async function getStaticProps() {
    const postsDir = path.join(process.cwd(), 'data', 'posts')
    const filenames = fs.readdirSync(postsDir)

    const posts = filenames
        .filter(f => f.endsWith('.json'))
        .map(f => {
            const content = fs.readFileSync(path.join(postsDir, f), 'utf-8')
            const post = JSON.parse(content)
            // 不把 content 傳到列表頁（節省 bundle size）
            const { content: _, ...meta } = post
            return meta
        })
        .filter(p => p.published)
        .sort((a, b) => new Date(b.date) - new Date(a.date))

    return { props: { posts } }
}

export default Posts
