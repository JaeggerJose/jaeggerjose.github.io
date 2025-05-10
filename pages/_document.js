import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript} from 'next/document';
import theme from "../libs/theme";
import dynamic from "next/dynamic";
const LognIn = dynamic(import("./LogIn"), { ssr: false });
const Footer = dynamic(import("../components/footer"), { ssr: false });
export default class Document extends NextDocument {
    render () {
        return (
            <Html lang="en">
                <Head>
                </Head>
                <LognIn/>
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <Main />
                    <NextScript />
                    <Footer>
                    <p>
                        Copyright 2025 JaggerJose. All rights reserved.
                    </p>
                    </Footer>
                </body>

            </Html>
        )
    }
}
