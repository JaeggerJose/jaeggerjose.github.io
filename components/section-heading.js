import { Heading } from '@chakra-ui/react'

const SectionHeading = ({ children, ...props }) => (
    <Heading
        as="h3"
        textDecoration="underline"
        fontSize={24}
        textUnderlineOffset="6px"
        textDecorationThickness="4px"
        mt={3}
        mb={4}
        textDecorationColor="#525252"
        {...props}
    >
        {children}
    </Heading>
)

export default SectionHeading
