import fs from 'fs'
import path from 'path'
import {
    Container,
    Heading,
    Box,
    Text,
    Link,
    Badge,
    HStack,
    VStack,
    Separator,
    Image,
} from "@chakra-ui/react"
import { LuCalendar, LuClock, LuArrowLeft, LuTag } from "react-icons/lu"
import NextLink from 'next/link'
import Section from "../../components/section"
import { useColorModeValue } from "../../components/ui/color-mode"

const PostPage = ({ post }) => {
    const textColor = useColorModeValue('gray.700', 'gray.300')
    const metaColor = useColorModeValue('gray.500', 'gray.500')
    const tagPalette = useColorModeValue('blue', 'orange')
    const contentBg = useColorModeValue('whiteAlpha.700', 'whiteAlpha.100')
    const borderColor = useColorModeValue('gray.200', 'whiteAlpha.200')

    // Simple markdown-like rendering: split by \n\n for paragraphs, ## for headings
    const renderContent = (content) => {
        if (!content) return null
        const blocks = content.split('\n\n')
        return blocks.map((block, i) => {
            const trimmed = block.trim()
            if (trimmed.startsWith('## ')) {
                return (
                    <Heading
                        key={i}
                        as="h2"
                        fontSize="xl"
                        mt={8}
                        mb={3}
                        color={useColorModeValue('gray.800', 'white')}
                    >
                        {trimmed.replace('## ', '')}
                    </Heading>
                )
            }
            if (trimmed.startsWith('### ')) {
                return (
                    <Heading key={i} as="h3" fontSize="lg" mt={6} mb={2}>
                        {trimmed.replace('### ', '')}
                    </Heading>
                )
            }
            return (
                <Text key={i} color={textColor} fontSize="md" lineHeight="1.8" mb={4}>
                    {trimmed}
                </Text>
            )
        })
    }

    return (
        <Container maxW="breakpoint-md">
            {/* Back link */}
            <Section delay={0.05}>
                <Link asChild color={metaColor} fontSize="sm" _hover={{ color: useColorModeValue('blue.500', 'orange.400') }}>
                    <NextLink href="/posts">
                        <HStack gap={1}>
                            <LuArrowLeft size="14px" />
                            <Text>Back to posts</Text>
                        </HStack>
                    </NextLink>
                </Link>
            </Section>

            {/* Hero image */}
            {post.thumbnail && (
                <Section delay={0.1}>
                    <Box borderRadius="2xl" overflow="hidden" mb={6} boxShadow="lg">
                        <Image
                            src={post.thumbnail}
                            alt={post.title}
                            w="100%"
                            h={{ base: '200px', md: '350px' }}
                            objectFit="cover"
                            fallbackSrc="https://via.placeholder.com/800x350/1a202c/ffffff?text=Post"
                        />
                    </Box>
                </Section>
            )}

            {/* Post header */}
            <Section delay={0.15}>
                <VStack align="flex-start" gap={3} mb={6}>
                    <HStack gap={2} flexWrap="wrap">
                        <Badge colorPalette={tagPalette} borderRadius="full" px={3} py={1}>
                            {post.category}
                        </Badge>
                        {post.featured && (
                            <Badge colorPalette="orange" borderRadius="full" px={3} py={1}>
                                ⭐ Featured
                            </Badge>
                        )}
                    </HStack>

                    <Heading as="h1" fontSize={{ base: '2xl', md: '3xl' }} lineHeight="1.3">
                        {post.title}
                    </Heading>

                    <HStack gap={4} fontSize="sm" color={metaColor}>
                        <HStack gap={1}>
                            <LuCalendar size="14px" />
                            <Text>{post.date}</Text>
                        </HStack>
                        <HStack gap={1}>
                            <LuClock size="14px" />
                            <Text>{post.readTime}</Text>
                        </HStack>
                    </HStack>

                    {post.tags && post.tags.length > 0 && (
                        <HStack gap={2} flexWrap="wrap">
                            <LuTag size="14px" color="gray" />
                            {post.tags.map(tag => (
                                <Text key={tag} fontSize="xs" color={metaColor}>
                                    #{tag}
                                </Text>
                            ))}
                        </HStack>
                    )}
                </VStack>

                <Separator borderColor={borderColor} mb={6} />
            </Section>

            {/* Post content */}
            <Section delay={0.2}>
                <Box
                    bg={contentBg}
                    borderRadius="xl"
                    p={{ base: 4, md: 8 }}
                    backdropFilter="blur(10px)"
                >
                    {renderContent(post.content)}
                </Box>
            </Section>

            {/* Footer navigation */}
            <Section delay={0.3}>
                <Box mt={10} mb={8} textAlign="center">
                    <Link
                        asChild
                        fontSize="sm"
                        fontWeight="medium"
                        _hover={{ color: useColorModeValue('blue.500', 'orange.400') }}
                    >
                        <NextLink href="/posts">
                            <HStack gap={1} justify="center">
                                <LuArrowLeft size="14px" />
                                <Text>Back to all posts</Text>
                            </HStack>
                        </NextLink>
                    </Link>
                </Box>
            </Section>
        </Container>
    )
}

// 讀取所有 post 檔案的輔助函式
function getAllPosts() {
    const postsDir = path.join(process.cwd(), 'data', 'posts')
    const filenames = fs.readdirSync(postsDir).filter(f => f.endsWith('.json'))
    return filenames.map(f => {
        const content = fs.readFileSync(path.join(postsDir, f), 'utf-8')
        return JSON.parse(content)
    })
}

export async function getStaticPaths() {
    const posts = getAllPosts()
    const paths = posts.map(post => ({
        params: { slug: post.slug }
    }))
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const posts = getAllPosts()
    const post = posts.find(p => p.slug === params.slug)
    if (!post) return { notFound: true }
    return { props: { post } }
}

export default PostPage
