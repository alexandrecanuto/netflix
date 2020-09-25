import styled from 'styled-components';

export const Container = styled.div`
  margin: 12px 0 2vw;
`;

export const RowContainer = styled.div`
  margin-left: -0.4%;
  overflow-x: hidden;
`;

export const RowHeader = styled.h2`
  color: var(--off-white);
  margin-left: 4%;
  margin-bottom: .5em;
  font-size: 1.4vw;
  line-height: 1.25vw;
  @media (max-width: 1280px) {
    font-size: 18px;
    line-height: 18px;
  }
`;

export const Slider = styled.div`
  overflow-x: scroll;
  padding-right: 60px;
  white-space: nowrap;

  ::-webkit-scrollbar {
    display: none;
  }
`;