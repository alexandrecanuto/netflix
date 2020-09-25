import React from 'react';
import { useRouteMatch } from 'react-router-dom';
// Styles
import { Container, Link } from './styles';

const MenuItem = ({ children, to }) => {
  const isActiveRoute = !!useRouteMatch({path: to, exact: true});

  return (
    <Container>
      <Link active={isActiveRoute} href={to}>
        { children }
      </Link>
    </Container>
  );
};

export default MenuItem;