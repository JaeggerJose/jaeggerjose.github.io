import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'

const style = {
    global: props => ({
        body: {
            bg: mode('#f0e7db', '#202023')(props),
            backgroundImage: mode(
                'linear-gradient(to bottom, #f0e7db 0%, #fff1eb 100%)', // Light: Warm Sand / Summer Vibe
                'linear-gradient(to bottom, #0f2027, #203a43, #2c5364)'  // Dark: Deep Night / Winter Vibe
            )(props),
            backgroundAttachment: 'fixed',
            color: mode('#1a202c', '#f7fafc')(props), // Better contrast text colors
            transition: '0.2s',
            fontSize: '18px', // Increased base font size
            lineHeight: '1.6' // Improved readability
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 24, // Increased from 20
                textUnderlineOffset: 6,
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4,
                textDecorationColor: '#525252'
            }
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode('#3182ce', '#ffbd59')(props), // Blue (Light) / Orange (Dark)
            textUnderlineOffset: 3
        })
    }
}
const fonts = {
    heading: "M PLUS Rounded 1c",
}
const colors = {
    oceanBlue: '#3182ce',
    sunOrange: '#ffbd59'
}
const config = {
    initialColorMode: 'light',
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