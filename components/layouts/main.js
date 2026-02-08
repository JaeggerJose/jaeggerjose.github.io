import Head from 'next/head'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/static/icon.png" type="image/png" />
                <link rel="apple-touch-icon" href="/static/icon.png" />
                <title>Ming-Hsuan Liao - Homepage</title>
            </Head>

            <Navbar path={router.asPath} />
            <Container maxW="breakpoint-xl" pt={24}>
                {children}
                <Footer />
            </Container>
        </Box>
    )
}

export default Main
