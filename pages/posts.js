import { 
    Container, 
    Heading, 
    SimpleGrid, 
    Box,
    Text,
    Link,
    Badge,
    Image,
    useColorModeValue,
    VStack,
    HStack,
    Icon,
    Divider
} from "@chakra-ui/react";
import { CalendarIcon, TimeIcon } from "@chakra-ui/icons";
import NextLink from 'next/link';
import Section from "../components/section";

// 文章卡片組件 - Material Design 風格
const PostCard = ({ title, excerpt, date, readTime, category, thumbnail, slug, delay }) => {
    const cardBg = useColorModeValue('white', 'whiteAlpha.200');
    const cardHoverBg = useColorModeValue('gray.50', 'whiteAlpha.300');
    const textColor = useColorModeValue('gray.600', 'gray.300');
    const categoryColor = useColorModeValue('blue.500', 'orange.400');
    
    return (
        <Section delay={delay}>
            <NextLink href={`/posts/${slug}`} passHref legacyBehavior>
                <Link style={{ textDecoration: 'none' }} _hover={{ textDecoration: 'none' }}>
                    <Box
                        bg={cardBg}
                        borderRadius="xl"
                        overflow="hidden"
                        boxShadow="md"
                        transition="all 0.3s"
                        _hover={{
                            transform: 'translateY(-4px)',
                            boxShadow: 'xl',
                            bg: cardHoverBg
                        }}
                        cursor="pointer"
                    >
                        {/* 圖片區域 */}
                        {thumbnail && (
                            <Box position="relative" overflow="hidden" h="200px">
                                <Image
                                    src={thumbnail}
                                    alt={title}
                                    objectFit="cover"
                                    w="100%"
                                    h="100%"
                                    transition="transform 0.3s"
                                    _hover={{ transform: 'scale(1.05)' }}
                                />
                            </Box>
                        )}
                        
                        {/* 內容區域 */}
                        <VStack align="stretch" p={6} spacing={3}>
                            {/* 分類標籤 */}
                            <Badge 
                                colorScheme={useColorModeValue('blue', 'orange')}
                                fontSize="0.8em"
                                w="fit-content"
                                borderRadius="full"
                                px={3}
                                py={1}
                            >
                                {category}
                            </Badge>
                            
                            {/* 標題 */}
                            <Heading 
                                as="h3" 
                                fontSize="xl" 
                                mb={2}
                                color={useColorModeValue('gray.800', 'white')}
                            >
                                {title}
                            </Heading>
                            
                            {/* 摘要 */}
                            <Text 
                                color={textColor} 
                                fontSize="md" 
                                noOfLines={3}
                                lineHeight="1.6"
                            >
                                {excerpt}
                            </Text>
                            
                            {/* 元數據 */}
                            <HStack 
                                spacing={4} 
                                pt={2} 
                                fontSize="sm" 
                                color={textColor}
                            >
                                <HStack spacing={1}>
                                    <Icon as={CalendarIcon} />
                                    <Text>{date}</Text>
                                </HStack>
                                <HStack spacing={1}>
                                    <Icon as={TimeIcon} />
                                    <Text>{readTime}</Text>
                                </HStack>
                            </HStack>
                        </VStack>
                    </Box>
                </Link>
            </NextLink>
        </Section>
    );
};

const Posts = () => {
    // Sample post data - can be fetched from CMS or Markdown files later
    const posts = [
        {
            title: "Exchange Student Life in Paris",
            excerpt: "My experience as an exchange student at Sorbonne Université. From language barriers to cultural adaptation, this journey has been full of growth and learning...",
            date: "2025-01-15",
            readTime: "5 min read",
            category: "Study Abroad",
            thumbnail: "/images/posts/paris-exchange.jpg",
            slug: "paris-exchange-life"
        },
        {
            title: "My First Snowboarding Experience",
            excerpt: "The feeling of standing on snow for the first time was both exciting and nerve-wracking. From countless falls to smooth rides, this journey was filled with challenges and joy...",
            date: "2024-12-20",
            readTime: "4 min read",
            category: "Sports",
            thumbnail: "/images/posts/first-snowboard.jpg",
            slug: "first-snowboard-experience"
        },
        {
            title: "Life as a Software Engineer",
            excerpt: "Sharing my experiences working as a software engineer across different companies. From tech stack choices to team collaboration, and balancing work with continuous learning...",
            date: "2024-11-10",
            readTime: "6 min read",
            category: "Tech",
            thumbnail: "/images/posts/software-engineer.jpg",
            slug: "software-engineer-daily"
        },
        {
            title: "Surfing and Life Philosophy",
            excerpt: "Surfing taught me how to harmonize with nature and maintain balance in life. Waiting, seizing the moment, and living in the present...",
            date: "2024-10-05",
            readTime: "4 min read",
            category: "Life",
            thumbnail: "/images/posts/surfing-philosophy.jpg",
            slug: "surfing-philosophy"
        }
    ];

    return (
        <Container maxW="container.lg">
            {/* Page Header */}
            <Section delay={0.1}>
                <Box mb={8} mt={4}>
                    <Heading 
                        as="h2" 
                        fontSize={{ base: '2xl', md: '3xl' }} 
                        mb={3}
                        bgGradient={useColorModeValue(
                            'linear(to-r, blue.500, blue.600)',
                            'linear(to-r, orange.400, orange.500)'
                        )}
                        bgClip="text"
                    >
                        My Life Records
                    </Heading>
                    <Text 
                        fontSize="lg" 
                        color={useColorModeValue('gray.600', 'gray.400')}
                    >
                        Documenting moments and sharing experiences from my journey
                    </Text>
                    <Divider mt={4} borderColor={useColorModeValue('gray.300', 'gray.600')} />
                </Box>
            </Section>

            {/* Posts Grid */}
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mb={8}>
                {posts.map((post, index) => (
                    <PostCard
                        key={post.slug}
                        {...post}
                        delay={0.1 + index * 0.1}
                    />
                ))}
            </SimpleGrid>
        </Container>
    );
};

export default Posts;