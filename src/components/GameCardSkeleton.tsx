import { CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"
import CardContainer from "./CardContainer"


const GameCardSkeleton = () => {
    return (
        <CardContainer >
            <Skeleton height='200px' />
            <CardBody>
                <SkeletonText />
            </CardBody>
        </CardContainer>
    )
}
export default GameCardSkeleton