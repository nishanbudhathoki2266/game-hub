import { Card } from "@chakra-ui/react"
import { ReactNode } from "react"

const CardContainer = ({ children }: { children: ReactNode }) => {
    return (
        <Card borderRadius={10} overflow='hidden' width="300px">{children}</Card>
    )
}
export default CardContainer