import styled from 'styled-components';
// Images
import ProfileImage from '../../assets/images/profile.png';

export const Container = styled.div`
  background: ${props => props.isBlack ? 'black' : 'transparent'};
  display: flex;
  height: 70px;
  position: fixed;
  top: 0;
  width: 100%;
  transition: background ease 0.5s;
  z-index: 111;
`;

export const Logo = styled.img`
  height: 25px;
  width: 92.5px;
  margin-right: 25px;
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  align-items: center;
  display: flex;
  flex: 1;
  padding: 0 4%;
`;

export const ProfileButton = styled.button`
  background-image: url(${ProfileImage});
  background-size: cover;
  border-radius: 4px;
  cursor: pointer;
  height: 32px;
  width: 32px;
`;

export const Spacer = styled.div`
  flex: 1;
`;