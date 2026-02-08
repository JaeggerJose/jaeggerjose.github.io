import { Box, chakra } from "@chakra-ui/react"

export const BioSection = (props) => (
    <Box paddingLeft="3.4em" textIndent="-3.4em" mb={2} {...props} />
)

export const BioYear = chakra("span", {
    base: {
        fontWeight: "bold",
        marginRight: "1em",
        fontSize: "1.1rem",
    }
})
