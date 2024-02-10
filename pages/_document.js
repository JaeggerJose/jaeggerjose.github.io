import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript} from 'next/document';
import theme from "../libs/theme";

export default class Document extends NextDocument {
    render () {
        return (
            <Html lang="en">
                <Head>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-N0YQWYT632"></script>
                    <script>
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                    
                      gtag('config', 'G-N0YQWYT632');
                    </script>
                </Head>
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
