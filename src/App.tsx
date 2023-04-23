import { useState } from 'react';
import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from './components/GenreList';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

const App = () => {

  const [gameQuery, SetGameQuery] = useState<GameQuery>({} as GameQuery)

  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  const handleSelectGenre = (genre: Genre) => {
    SetGameQuery({ ...gameQuery, genre })
  }

  const handleSelectPlatform = (platform: Platform) => {
    SetGameQuery({ ...gameQuery, platform })
  }

  const handleSelectSortOrder = (sortOrder: string) => {
    SetGameQuery({ ...gameQuery, sortOrder })
  }

  const handleSearchInput = (searchText: string) => {
    SetGameQuery({ ...gameQuery, searchText });
  }

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }} templateColumns={{
      base: '1fr',
      lg: '200px 1fr'
    }}>
      <GridItem area="nav">
        <NavBar onSearch={handleSearchInput} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList selectedGenre={gameQuery.genre} onSelectGenre={handleSelectGenre} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={handleSelectPlatform} />
            </Box>
            <SortSelector onSelectSortOrder={handleSelectSortOrder} sortOrder={gameQuery.sortOrder} />
          </Flex>
        </Box>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  )
}
export default App