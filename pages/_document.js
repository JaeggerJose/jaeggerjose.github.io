import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript} from 'next/document';
import theme from "../libs/theme";
import { Script } from 'next/script';

export default class Document extends NextDocument {
    render () {
        return (
            <Html lang="en">
                <Head>
                  <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-N0YQWYT632"
                    strategy="afterInteractive"
                  />
                  <Script id="google-analytics" strategy="afterInteractive">
                    {`
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){window.dataLayer.push(arguments);}
                      gtag('js', new Date());
            
                      gtag('config', 'G-N0YQWYT632');
                    `}
                  </Script>
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
