import React from 'react';
// Component
import { ProgramCard } from '../';
// Styles
import { Container, RowContainer, RowHeader, Slider } from './styles';

const Section = ({section}) => {
  return (
    <Container>
      <RowHeader>{section.title}</RowHeader>
      <RowContainer>
        <Slider>
          { section.items.map(programId => <ProgramCard key={programId} programId={programId} />) }
        </Slider>
      </RowContainer>
    </Container>
  );
};

export default Section;