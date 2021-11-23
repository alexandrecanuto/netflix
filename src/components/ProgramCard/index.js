import React from 'react';
import { useSelector } from 'react-redux';
// Selectors
import { getProgram } from '../../store/selectors/programs';
// Styles
import { Container, Image } from './styles';

const ProgramCard = ({ programId }) => {
  const program = useSelector((state) => getProgram(state, programId));
  const name = program.name || program.title || program.original_name || program.original_title;

  return (
    <Container>
      <Image
        alt={name}
        src={`https://image.tmdb.org/t/p/w300${program.poster_path}`}
        title={name}
      />
    </Container>
  );
};

export default ProgramCard;
