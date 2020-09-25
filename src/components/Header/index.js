import React from 'react';
// Components
import { MenuItem } from '../';
// Images
import NetflixLogo from '../../assets/images/netflix.svg';
// Styles
import { Container, Logo, Menu, Nav, ProfileButton, Spacer } from './styles';

const Header = ({ isBlack }) => {
  return (
    <Container isBlack={isBlack}>
      <Nav>
        <Logo src={NetflixLogo} />

        <Menu>
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/tv-shows">TV Shows</MenuItem>
          <MenuItem to="/movies">Movies</MenuItem>
          <MenuItem to="/recently-added">Recently Added</MenuItem>
          <MenuItem to="/my-list">My List</MenuItem>
        </Menu>

        <Spacer />

        <ProfileButton />
      </Nav>
    </Container>
  );
};

export default Header;
