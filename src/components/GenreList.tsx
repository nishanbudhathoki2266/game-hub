import { Button, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/img-url';

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
    const { data, isLoading, error } = useGenres();

    if (error) return <Text color='red'>Error fetching genres!</Text>;

    if (isLoading) return <Spinner />

    return (
        <List>
            {data.map(genre => <ListItem key={genre.id} paddingY='5px'>
                <HStack>
                    <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                    <Button fontSize='lg' fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} color={genre.id === selectedGenre?.id ? '#ffa31a' : ''} variant='link' onClick={() => onSelectGenre(genre)}>
                        {genre.name}
                    </Button>
                </HStack>
            </ListItem>)}
        </List>
    )
}
export default GenreList;