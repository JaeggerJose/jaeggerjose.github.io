import fs from 'fs'
import path from 'path'
import Head from 'next/head'
import {
    Container,
    Heading,
    Box,
    Text,
    Link,
    HStack,
    VStack,
    Separator,
    Image,
    Code,
} from "@chakra-ui/react"
import { LuCalendar, LuArrowLeft } from "react-icons/lu"
import NextLink from 'next/link'
import Section from "../../components/section"
import { useColorModeValue } from "../../components/ui/color-mode"

// 將 inline markdown 轉成 React 元素（支援 **粗體**、[連結](url)、`code`、![圖片](url)）
const renderInline = (text, linkColor, codeProps) => {
    if (!text) return null
    const parts = []
    // 匹配 **bold**, [text](url), `code`, ![alt](src)
    const regex = /!\[([^\]]*)\]\(([^)]+)\)|\[([^\]]+)\]\(([^)]+)\)|\*\*(.+?)\*\*|`([^`]+)`/g
    let lastIndex = 0
    let match

    while ((match = regex.exec(text)) !== null) {
        // 前面的純文字
        if (match.index > lastIndex) {
            parts.push(text.slice(lastIndex, match.index))
        }

        if (match[1] !== undefined || (match[0] && match[0].startsWith('!['))) {
            // ![alt](src) — 行內圖片
            parts.push(
                <Image
                    key={match.index}
                    src={match[2]}
                    alt={match[1] || ''}
                    borderRadius="xl"
                    my={4}
                    w="100%"
                    aspectRatio="16/9"
                    objectFit="cover"
                    boxShadow="md"
                />
            )
        } else if (match[3] !== undefined) {
            // [text](url) — 連結
            parts.push(
                <Link
                    key={match.index}
                    href={match[4]}
                    color={linkColor}
                    textDecoration="underline"
                    textUnderlineOffset="3px"
                    _hover={{ opacity: 0.8 }}
                    target={match[4].startsWith('http') ? '_blank' : undefined}
                    rel={match[4].startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                    {match[3]}
                </Link>
            )
        } else if (match[5] !== undefined) {
            // **bold**
            parts.push(<strong key={match.index}>{match[5]}</strong>)
        } else if (match[6] !== undefined) {
            // `code`
            parts.push(
                <Code key={match.index} {...codeProps}>{match[6]}</Code>
            )
        }
        lastIndex = match.index + match[0].length
    }
    // 剩餘文字
    if (lastIndex < text.length) {
        parts.push(text.slice(lastIndex))
    }
    return parts.length === 1 && typeof parts[0] === 'string' ? parts[0] : parts
}

const PostPage = ({ post }) => {
    const textColor = useColorModeValue('gray.700', 'gray.300')
    const metaColor = useColorModeValue('gray.500', 'gray.500')
    const borderColor = useColorModeValue('gray.200', 'whiteAlpha.200')
    const headingColor = useColorModeValue('gray.800', 'white')
    const linkColor = useColorModeValue('blue.500', 'orange.400')
    const accentColor = useColorModeValue('blue.500', 'orange.400')
    const captionBg = useColorModeValue('gray.50', 'whiteAlpha.100')
    const codeBg = useColorModeValue('gray.100', 'whiteAlpha.200')
    const codeBlockBg = useColorModeValue('gray.900', 'gray.900')

    const codeProps = {
        fontSize: "sm",
        px: 1.5,
        py: 0.5,
        borderRadius: "md",
        bg: codeBg,
    }

    // 進階 markdown 渲染
    const renderContent = (content) => {
        if (!content) return null
        const blocks = content.split('\n\n')
        return blocks.map((block, i) => {
            const trimmed = block.trim()

            // ## H2 heading
            if (trimmed.startsWith('## ')) {
                return (
                    <Heading
                        key={i} as="h2" fontSize="xl"
                        mt={10} mb={4} pb={2}
                        color={headingColor}
                        borderBottom="2px solid"
                        borderColor={accentColor}
                        display="inline-block"
                    >
                        {trimmed.replace('## ', '')}
                    </Heading>
                )
            }

            // ### H3 heading
            if (trimmed.startsWith('### ')) {
                return (
                    <Heading key={i} as="h3" fontSize="lg" mt={6} mb={2} color={headingColor}>
                        {trimmed.replace('### ', '')}
                    </Heading>
                )
            }

            // Code block ```
            if (trimmed.startsWith('```')) {
                const lines = trimmed.split('\n')
                const codeContent = lines.slice(1, -1).join('\n')
                return (
                    <Box
                        key={i} as="pre"
                        bg={codeBlockBg} color="green.300"
                        p={4} borderRadius="lg" my={4}
                        overflowX="auto" fontSize="sm"
                        lineHeight="1.7"
                    >
                        <code>{codeContent}</code>
                    </Box>
                )
            }

            // 獨立圖片 ![alt](src)
            if (/^!\[.*\]\(.*\)$/.test(trimmed)) {
                const imgMatch = trimmed.match(/^!\[([^\]]*)\]\(([^)]+)\)$/)
                if (imgMatch) {
                    return (
                        <Box key={i} my={6} textAlign="center">
                            <Image
                                src={imgMatch[2]}
                                alt={imgMatch[1] || ''}
                                borderRadius="xl"
                                w="100%"
                                aspectRatio="16/9"
                                objectFit="cover"
                                mx="auto"
                                boxShadow="md"
                            />
                            {imgMatch[1] && (
                                <Text fontSize="xs" color={metaColor} mt={2} fontStyle="italic">
                                    {imgMatch[1]}
                                </Text>
                            )}
                        </Box>
                    )
                }
            }

            // 引用 > blockquote
            if (trimmed.startsWith('> ')) {
                return (
                    <Box
                        key={i}
                        borderLeft="3px solid"
                        borderColor={accentColor}
                        pl={4} py={2} my={4}
                        color={metaColor}
                        fontStyle="italic"
                        fontSize="md"
                        lineHeight="1.8"
                    >
                        {renderInline(trimmed.replace(/^> /, ''), linkColor, codeProps)}
                    </Box>
                )
            }

            // 列表項 - item
            if (trimmed.split('\n').every(line => line.trim().startsWith('- '))) {
                const items = trimmed.split('\n').map(l => l.trim().replace(/^- /, ''))
                return (
                    <Box key={i} as="ul" pl={6} my={3} listStyleType="disc">
                        {items.map((item, j) => (
                            <Box key={j} as="li" mb={1} color={textColor} fontSize="md" lineHeight="1.8">
                                {renderInline(item, linkColor, codeProps)}
                            </Box>
                        ))}
                    </Box>
                )
            }

            // 段落（支援粗體開頭 = TW93 風格的標題+描述）
            if (trimmed.startsWith('**')) {
                // 粗體標題 + 換行後的描述
                const lines = trimmed.split('\n')
                const titleLine = lines[0]
                const descLines = lines.slice(1).join('\n').trim()
                return (
                    <Box key={i} mb={5}>
                        <Text color={textColor} fontSize="md" lineHeight="1.8" fontWeight="medium">
                            {renderInline(titleLine, linkColor, codeProps)}
                        </Text>
                        {descLines && (
                            <Text color={textColor} fontSize="md" lineHeight="1.8" mt={1}>
                                {renderInline(descLines, linkColor, codeProps)}
                            </Text>
                        )}
                    </Box>
                )
            }

            // 普通段落
            return (
                <Text key={i} color={textColor} fontSize="md" lineHeight="1.8" mb={4}>
                    {renderInline(trimmed, linkColor, codeProps)}
                </Text>
            )
        })
    }

    return (
        <Container maxW="breakpoint-md">
            <Head>
                <title>{`${post.title} | JaggerJose`}</title>
                <meta name="description" content={post.coverCaption || post.title} />
                <meta property="og:title" content={`${post.title} | JaggerJose`} />
                <meta property="og:description" content={post.coverCaption || post.title} />
                {post.thumbnail && <meta property="og:image" content={post.thumbnail} />}
            </Head>
            {/* Back link */}
            <Section delay={0.05}>
                <Link asChild color={metaColor} fontSize="sm" _hover={{ color: accentColor }}>
                    <NextLink href="/posts">
                        <HStack gap={1}>
                            <LuArrowLeft size="14px" />
                            <Text>Back to posts</Text>
                        </HStack>
                    </NextLink>
                </Link>
            </Section>

            {/* Title */}
            <Section delay={0.1}>
                <Heading
                    as="h1"
                    fontSize={{ base: '2xl', md: '3xl' }}
                    lineHeight="1.3"
                    mt={4} mb={2}
                >
                    {post.title}
                </Heading>
                <HStack gap={4} fontSize="sm" color={metaColor} mb={6}>
                    <HStack gap={1}>
                        <LuCalendar size="14px" />
                        <Text>發布日期：{post.date}</Text>
                    </HStack>
                </HStack>
            </Section>

            {/* Cover image + caption */}
            {post.thumbnail && (
                <Section delay={0.15}>
                    <Box borderRadius="2xl" overflow="hidden" mb={2} boxShadow="lg">
                        <Image
                            src={post.thumbnail}
                            alt={post.title}
                            w="100%"
                            aspectRatio="16/9"
                            objectFit="cover"
                        />
                    </Box>
                    {post.coverCaption && (
                        <Box
                            bg={captionBg}
                            borderRadius="lg"
                            px={4} py={3} mb={6}
                        >
                            <Text fontSize="sm" color={metaColor} fontStyle="italic" lineHeight="1.6">
                                {post.coverCaption}
                            </Text>
                        </Box>
                    )}
                </Section>
            )}

            <Separator borderColor={borderColor} mb={2} />

            {/* Post content */}
            <Section delay={0.2}>
                <Box py={4}>
                    {renderContent(post.content)}
                </Box>
            </Section>

            {/* Footer */}
            <Section delay={0.3}>
                <Separator borderColor={borderColor} mt={4} mb={6} />
                <Box mb={8} textAlign="center">
                    <Text fontSize="xs" color={metaColor} mb={4}>
                        發布日期：{post.date}
                    </Text>
                    <Link
                        asChild
                        fontSize="sm"
                        fontWeight="medium"
                        _hover={{ color: accentColor }}
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
