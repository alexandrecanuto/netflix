import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Components
import { FeaturedProgram, Section } from '../../components';
// Actions
import { requestHomeSections } from '../../store/actions/sections';
// Selectors
import { getHomeSections } from '../../store/selectors/sections';
// Styles
import { Container, Sections } from './styles';

const Home = ({ className }) => {
  const [featured, setFeatured] = useState();
  const sections = useSelector(getHomeSections);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!sections || !sections.length) {
      dispatch(requestHomeSections());
    }
  }, [dispatch, sections]);

  useEffect(() => {
    const originals = sections.filter(section => section.id === 'trending')[0],
          randomIndex = originals ? Math.floor(Math.random() * (originals.items.length - 1)) : null,
          newFeatured = randomIndex ? originals.items[randomIndex] : null;
    if (!featured && newFeatured) {
      // console.log('randomIndex:', randomIndex);
      setFeatured(originals.items[randomIndex]); 
    }
  }, [sections, featured]);

  return (
    <Container>
      { featured ? <FeaturedProgram item={featured} /> : null }

      <Sections id="lists">
        { sections.map(section =><Section key={section.id} section={section} />) }
      </Sections>
    </Container>
  );
};

export default Home;
