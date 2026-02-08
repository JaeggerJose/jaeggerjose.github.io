import { AnimatePresence, motion } from "framer-motion"
import { IconButton } from "@chakra-ui/react"
import { LuSun } from "react-icons/lu"
import { useColorMode, useColorModeValue } from "../ui/color-mode"

const SnowflakeIcon = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" {...props}>
    <path d="M22 11h-2.17l1.24-2.14a1 1 0 0 0-1.74-1l-1.5 2.6-2.6-1.5 1-1.74a1 1 0 1 0-1.74-1l-1.24 2.14V2a1 1 0 0 0-2 0v2.17l-1.24-2.14a1 1 0 0 0-1.74 1l1 1.74-2.6 1.5-1.5-2.6a1 1 0 0 0-1.74 1l1.24 2.14H2a1 1 0 0 0 0 2h2.17l-1.24 2.14a1 1 0 0 0 1.74 1l1.5-2.6 2.6 1.5-1 1.74a1 1 0 0 0 1.74 1l1.24-2.14V22a1 1 0 0 0 2 0v-2.17l1.24 2.14a1 1 0 0 0 1.74-1l-1-1.74 2.6-1.5 1.5 2.6a1 1 0 0 0 1.74-1l-1.24-2.14H22a1 1 0 0 0 0-2z" />
  </svg>
)

const ThemeToggleButton = () => {
    const { toggleColorMode, colorMode, mounted } = useColorMode()

    // 等 client mount 後再渲染，避免 hydration mismatch
    if (!mounted) return <IconButton aria-label="Toggle theme" size="sm" variant="ghost" />

    return (
        <AnimatePresence mode="wait" initial={false}>
            <motion.div
                style={{ display: 'inline-block' }}
                key={colorMode}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <IconButton
                    aria-label="Toggle theme"
                    colorPalette={colorMode === 'dark' ? 'orange' : 'blue'}
                    onClick={toggleColorMode}
                    size="sm"
                >
                    {colorMode === 'dark' ? <SnowflakeIcon /> : <LuSun />}
                </IconButton>
            </motion.div>
        </AnimatePresence>
    )
}

export default ThemeToggleButton
