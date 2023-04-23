import { useState } from 'react';
import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from './components/GenreList';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';
import SortSelector from './components/SortSelector';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
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

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }} templateColumns={{
      base: '1fr',
      lg: '200px 1fr'
    }}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList selectedGenre={gameQuery.genre} onSelectGenre={handleSelectGenre} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <div style={{ padding: '10px', display: 'flex', justifyContent: 'space-between', width: 'auto' }}>
          <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={handleSelectPlatform} />
          <SortSelector onSelectSortOrder={handleSelectSortOrder} sortOrder={gameQuery.sortOrder} />
        </div>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  )
}
export default App