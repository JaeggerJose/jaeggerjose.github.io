import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'

const style = {
    global: props => ({
        body: {
            bg: mode('#f0e7db', '#202023')(props)
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
            color: mode('#3d7aed', '#ff63c3')(props),
            textUnderlineOffset: 3
        })
    }
}
const fonts = {
    heading: "'M PLUS Pounded 1c'",
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
    fonts
})

export default theme