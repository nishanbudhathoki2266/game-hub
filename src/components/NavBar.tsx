import { HStack, Image } from "@chakra-ui/react"
import gamehub from './../assets/gamehub.png'
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"

interface Props {
    onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
    return (
        < HStack padding='10px'>
            <Image src={gamehub} boxSize='100px' objectFit='contain' />
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch />
        </ HStack>
    )
}
export default NavBar