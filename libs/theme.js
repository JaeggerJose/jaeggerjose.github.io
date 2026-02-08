import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  globalCss: {
    body: {
      bg: '#f0e7db',
      backgroundImage: 'linear-gradient(to bottom, #f0e7db 0%, #fff1eb 100%)',
      backgroundAttachment: 'fixed',
      color: '#1a202c',
      fontSize: '18px',
      lineHeight: '1.6',
      _dark: {
        bg: '#202023',
        backgroundImage: 'linear-gradient(to bottom, #0f2027, #203a43, #2c5364)',
        color: '#f7fafc',
      },
    },
    a: {
      color: '#3182ce',
      textUnderlineOffset: '3px',
      _dark: {
        color: '#ffbd59',
      },
    },
  },
  theme: {
    tokens: {
      fonts: {
        heading: { value: "'M PLUS Rounded 1c', sans-serif" },
      },
      colors: {
        oceanBlue: { value: '#3182ce' },
        sunOrange: { value: '#ffbd59' },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)
