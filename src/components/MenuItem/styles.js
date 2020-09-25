import styled from 'styled-components';

export const Container = styled.li`
  cursor: pointer;
  font-size: 14px;
  line-height: 16px;
  margin-left: 16px;
  transition: color .4s;

  
`;

export const Link = styled.a`
  text-decoration: none;

  ${props => props.active && `
    font-weight: 700;
    cursor: default;
  `}
  ${props => !props.active && `    
    &:hover {
      color: var(--hover-white);
    }
  `}
`;