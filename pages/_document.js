import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript} from 'next/document';
import theme from "../libs/theme";
import dynamic from "next/dynamic";
const LognIn = dynamic(import("./LogIn"), { ssr: false });

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
                </body>
            </Html>
        )
    }
}
