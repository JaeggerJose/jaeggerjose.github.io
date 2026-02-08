import { AnimatePresence, motion } from "framer-motion"
import { IconButton } from "@chakra-ui/react"
import { LuSun, LuMoon } from "react-icons/lu"
import { useColorMode } from "../ui/color-mode"

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
                    {colorMode === 'dark' ? <LuMoon /> : <LuSun />}
                </IconButton>
            </motion.div>
        </AnimatePresence>
    )
}

export default ThemeToggleButton
