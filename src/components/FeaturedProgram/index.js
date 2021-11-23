import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// Icons
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// Selectors
import { getProgram } from '../../store/selectors/programs';
// Services
import { APIService } from '../../services';
// Styles
import {
  Buttons,
  Container,
  Description,
  Genres,
  HorizontalFade,
  Info,
  MoreInfoButton,
  Name,
  Points,
  Seasons,
  VerticalFade,
  WatchButton,
  Year,
} from './styles';

const FeaturedProgram = ({ item }) => {
  const [details, setDetails] = useState();
  const [genres, setGenres] = useState();
  const [seasons, setSeasons] = useState();
  const [year, setYear] = useState();
  const program = useSelector((state) => getProgram(state, item));
  const name = program?.name || program?.title || program?.original_name || program?.original_title;

  useEffect(() => {
    // Create an scoped async function in the hook
    async function fetchDetails() {
      const details = await APIService.details.get(program.id, program.media_type);
      setDetails(details);

      // Year:
      const year = new Date(details?.release_date || details?.first_air_date).getFullYear();
      setYear(year);

      // Season / runtime:
      if (details?.runtime) {
        setSeasons(`${details?.runtime} min`);
      } else if (details?.number_of_seasons) {
        const text = details?.number_of_seasons === 1 ? 'season' : 'seasons';
        setSeasons(`${details?.number_of_seasons} ${text}`);
      }

      // Genres:
      if (details?.genres) {
        setGenres(details?.genres.map((genre) => genre.name).join(', '));
      }
    }

    try {
      fetchDetails();
    } catch (e) {
      console.log(e);
    }
  }, [program, name]);

  return (
    <Container backdrop={`https://image.tmdb.org/t/p/original${program.backdrop_path}`}>
      <VerticalFade>
        <HorizontalFade>
          <Name>{name}</Name>
          <Info>
            <Points>{program.vote_average} votes</Points>
            <Year>{year}</Year>
            <Seasons>{seasons}</Seasons>
          </Info>
          <Description>{program.overview}</Description>
          <Buttons>
            <WatchButton>
              <PlayArrowIcon /> Watch
            </WatchButton>
            <MoreInfoButton>
              <InfoOutlinedIcon /> More Info
            </MoreInfoButton>
          </Buttons>
          {!!genres && (
            <Genres>
              <strong>Genres:</strong> {genres}
            </Genres>
          )}
        </HorizontalFade>
      </VerticalFade>
    </Container>
  );
};

export default FeaturedProgram;
