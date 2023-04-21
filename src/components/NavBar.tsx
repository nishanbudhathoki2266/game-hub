import { HStack, Image } from "@chakra-ui/react"
import gamehub from './../assets/gamehub.png'
import ColorModeSwitch from "./ColorModeSwitch"

const NavBar = () => {
    return (
        < HStack justifyContent="space-between" padding='10px'>
            <Image src={gamehub} boxSize='100px' objectFit='contain' />
            <ColorModeSwitch />
        </ HStack>
    )
}
export default NavBar