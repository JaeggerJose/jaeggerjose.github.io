import fs from 'fs'
import path from 'path'
import {
    Container,
    Heading,
    Box,
    Text,
    Link,
    Badge,
    Image,
    VStack,
    HStack,
    Flex,
    Separator,
    Tag,
} from "@chakra-ui/react"
import { LuCalendar, LuClock, LuArrowRight } from "react-icons/lu"
import NextLink from 'next/link'
import Section from "../../components/section"
import { useColorModeValue } from "../../components/ui/color-mode"

// 從日期計算 week label
const getWeekLabel = (dateStr) => {
    const d = new Date(dateStr)
    const start = new Date(d.getFullYear(), 0, 1)
    const diff = d - start
    const oneWeek = 1000 * 60 * 60 * 24 * 7
    const weekNum = Math.ceil((diff / oneWeek) + 1)
    const month = d.toLocaleDateString('en-US', { month: 'short' })
    const year = d.getFullYear()
    return `Week ${weekNum} · ${month} ${year}`
}

// Weekly Post Item
const WeeklyPostItem = ({ title, excerpt, date, readTime, category, slug, thumbnail }) => {
    const cardBg = useColorModeValue('white', 'whiteAlpha.100')
    const cardHoverBg = useColorModeValue('gray.50', 'whiteAlpha.200')
    const textColor = useColorModeValue('gray.600', 'gray.400')
    const titleColor = useColorModeValue('gray.800', 'white')
    const borderColor = useColorModeValue('gray.200', 'whiteAlpha.200')
    const accentColor = useColorModeValue('blue.500', 'orange.400')
    const tagPalette = useColorModeValue('blue', 'orange')

    const dateObj = new Date(date)
    const day = dateObj.getDate()
    const month = dateObj.toLocaleDateString('en-US', { month: 'short' })
    const year = dateObj.getFullYear()

    return (
        <Link asChild style={{ textDecoration: 'none' }} _hover={{ textDecoration: 'none' }}>
            <NextLink href={`/posts/${slug}`}>
                <Flex
                    bg={cardBg} borderRadius="xl" overflow="hidden" boxShadow="sm"
                    border="1px solid" borderColor={borderColor}
                    transition="all 0.25s cubic-bezier(0.4, 0, 0.2, 1)"
                    _hover={{ transform: 'translateY(-3px)', boxShadow: 'lg', borderColor: accentColor }}
                    cursor="pointer"
                    direction={{ base: 'column', md: 'row' }}
                    align="stretch"
                >
                    {/* Thumbnail */}
                    <Box
                        w={{ base: '100%', md: '200px' }}
                        h={{ base: '180px', md: 'auto' }}
                        minH={{ md: '160px' }}
                        flexShrink={0}
                        overflow="hidden"
                    >
                        <Image
                            src={thumbnail || '/static/profile.jpeg'}
                            alt={title}
                            objectFit="cover"
                            w="100%" h="100%"
                            transition="transform 0.3s ease"
                            _hover={{ transform: 'scale(1.05)' }}
                        />
                    </Box>

                    {/* Content */}
                    <VStack align="flex-start" p={5} gap={2} flex={1}>
                        <HStack gap={2} flexWrap="wrap">
                            <Tag.Root size="sm" colorPalette={tagPalette} borderRadius="full" variant="subtle">
                                <Tag.Label>{category}</Tag.Label>
                            </Tag.Root>
                            <Tag.Root size="sm" variant="outline" borderRadius="full" colorPalette="gray">
                                <Tag.Label><HStack gap={1}><LuClock size="10px" /><span>{readTime}</span></HStack></Tag.Label>
                            </Tag.Root>
                        </HStack>
                        <Heading as="h3" fontSize="lg" color={titleColor} lineHeight="1.4">{title}</Heading>
                        <Text color={textColor} fontSize="sm" lineClamp={2} lineHeight="1.6">{excerpt}</Text>
                        <HStack gap={3} fontSize="xs" color={textColor} pt={1}>
                            <HStack gap={1}><LuCalendar size="12px" /><Text>{`${month} ${day}, ${year}`}</Text></HStack>
                            <HStack gap={1} color={accentColor} fontWeight="medium" fontSize="sm">
                                <Text>Read more</Text><LuArrowRight size="12px" />
                            </HStack>
                        </HStack>
                    </VStack>
                </Flex>
            </NextLink>
        </Link>
    )
}

// Week Separator
const WeekSeparator = ({ label }) => {
    const lineColor = useColorModeValue('gray.300', 'whiteAlpha.300')
    const textColor = useColorModeValue('gray.500', 'gray.500')
    const bgColor = useColorModeValue('gray.100', 'whiteAlpha.100')

    return (
        <Flex align="center" my={6}>
            <Separator borderColor={lineColor} />
            <Tag.Root size="md" bg={bgColor} color={textColor} borderRadius="full" px={4} py={1} mx={4} flexShrink={0} fontWeight="medium" fontSize="sm">
                <Tag.Label>{label}</Tag.Label>
            </Tag.Root>
            <Separator borderColor={lineColor} />
        </Flex>
    )
}

const Posts = ({ posts }) => {
    const subtitleColor = useColorModeValue('gray.600', 'gray.400')
    const stayTunedBg = useColorModeValue('blue.50', 'whiteAlpha.100')
    const stayTunedBorder = useColorModeValue('blue.200', 'whiteAlpha.300')
    const headingGradient = useColorModeValue(
        'linear-gradient(to right, var(--chakra-colors-blue-500), var(--chakra-colors-blue-600))',
        'linear-gradient(to right, var(--chakra-colors-orange-400), var(--chakra-colors-orange-500))'
    )

    // 加入 week label，按日期排序（新→舊），按 week 分組
    const postsWithWeek = posts.map(p => ({ ...p, week: getWeekLabel(p.date) }))

    const groupedPosts = []
    let currentWeek = null
    postsWithWeek.forEach(post => {
        if (post.week !== currentWeek) {
            currentWeek = post.week
            groupedPosts.push({ type: 'separator', label: post.week })
        }
        groupedPosts.push({ type: 'post', ...post })
    })

    return (
        <Container maxW="breakpoint-md">
            <Section delay={0.1}>
                <Box mb={8} mt={4}>
                    <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} mb={2}
                        backgroundImage={headingGradient} backgroundClip="text" color="transparent" fontWeight="bold">
                        JaggerJose Weekly Journal
                    </Heading>
                    <Text fontSize={{ base: 'md', md: 'lg' }} color={subtitleColor} lineHeight="1.6">
                        Thoughts, experiences, and stories — published weekly.
                    </Text>
                </Box>
            </Section>

            <VStack gap={4} align="stretch">
                {groupedPosts.map((item, index) => {
                    if (item.type === 'separator') {
                        return <Section key={`sep-${index}`} delay={0.1 + index * 0.03}><WeekSeparator label={item.label} /></Section>
                    }
                    return <Section key={item.slug} delay={0.1 + index * 0.03}><WeeklyPostItem {...item} /></Section>
                })}
            </VStack>

            <Section delay={0.5}>
                <Box mt={12} mb={8} p={6} borderRadius="xl" bg={stayTunedBg} border="1px dashed" borderColor={stayTunedBorder} textAlign="center">
                    <Text fontSize="lg" fontWeight="semibold" mb={2}>🗓️ Stay Tuned</Text>
                    <Text color={subtitleColor} fontSize="sm">New posts are published weekly. Check back every week for new content!</Text>
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
