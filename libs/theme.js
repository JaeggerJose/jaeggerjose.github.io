import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'

const style = {
    global: props => ({
        body: {
            color: mode('#000', '#fff')(props),
            bg: mode('#dfc9b2', '#8ba2a3')(props),
            transition: '0.2s'
        }
    })
}

const components = {
    Heading: {
        variants: {
            'secion-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationThickness: 4,
                marginTop: 3,
                marginButtom: 4
            }
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode('#032f39s', '#ff63c3')(props),
            textUnderlineOffset: 3
        })
    }
}
const fonts = {
    heading: "M PLUS Pounded 1c",
}
const colors = {
    glassTeal: '#88ccca'
}
const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
}

const theme = extendTheme({
    config,
    style,
    components,
    colors,
    fonts,
})

export default theme