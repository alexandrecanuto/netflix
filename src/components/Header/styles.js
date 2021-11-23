import styled from 'styled-components';
// Images
import ProfileImage from '../../assets/images/profile.png';

export const Author = styled.a`
  font-size: 10px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Container = styled.div`
  background: ${(props) => (props.isBlack ? 'black' : 'transparent')};
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

export const ProjectInfo = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  margin-right: 16px;
`;

export const Spacer = styled.div`
  flex: 1;
`;

export const Version = styled.div`
  background: white;
  border-radius: 4px;
  color: gray;
  font-size: 10px;
  line-height: 10px;
  opacity: 0.75;
  padding: 2px 4px 3px;
`;
