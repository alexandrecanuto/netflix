import React from 'react';
import { useSelector } from 'react-redux';
// Selectors
import { getProgram } from '../../store/selectors/programs';
// Styles
import { Container, Image } from './styles';

const ProgramCard = ({programId}) => {
  const program = useSelector(state => getProgram(state, programId));

  return (
    <Container>
      <Image 
        alt={program.original_title} 
        src={`https://image.tmdb.org/t/p/w300${program.poster_path}`} 
        title={program.original_title} />
    </Container>
  );
};

export default ProgramCard;