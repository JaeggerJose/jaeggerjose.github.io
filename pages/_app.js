import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layouts/main";
import theme from "../libs/theme";
import Fonts from "../components/layouts/font";
const Website = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts></Fonts>
            <Layout router={router}>
                <Component {...pageProps} key={router.router} />
            </Layout>
        </ChakraProvider>
    )
}
export default Website