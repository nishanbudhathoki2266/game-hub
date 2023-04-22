import { Card } from "@chakra-ui/react"
import { ReactNode } from "react"

const CardContainer = ({ children }: { children: ReactNode }) => {
    return (
        <Card borderRadius={10} overflow='hidden' _hover={{
            cursor: 'pointer',
            transform: 'scale(1.02)',
            transition: 'transform ease .3s'
        }}>{children}</Card>
    )
}
export default CardContainer