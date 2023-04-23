import { HStack, Image } from "@chakra-ui/react"
import gamehub from './../assets/gamehub.png'
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"

const NavBar = () => {
    return (
        < HStack padding='10px'>
            <Image src={gamehub} boxSize='100px' objectFit='contain' />
            <SearchInput />
            <ColorModeSwitch />
        </ HStack>
    )
}
export default NavBar