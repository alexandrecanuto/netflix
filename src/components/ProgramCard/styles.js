import styled from 'styled-components';

export const Image = styled.img`
  border-radius: 4px;
  transform: scale(0.95) translateZ(0);
  transition: transform ease 0.35s;
  width: 100%;
  &:hover {
    transform: scale(1);
  }
`;

export const Container = styled.div`
  cursor: pointer;
  overflow: hidden;
  vertical-align: middle;
  display: inline-block;
  width: 16.66666%;

  &:first-of-type {
    margin-left: 4%;
  }

  @media (max-width: 768px) {
    width: 130px;
  }
`;