import styled from 'styled-components';

export const Button = styled.button`
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  font-size: 20px;
  font-weight: 700;
  justify-content: center;
  margin-right: 10px;
  opacity: 1;
  padding: 15px 25px;
  padding-left: 20px;
  transition: opacity ease 0.2s;

  &:hover {
    opacity: 0.7;
  }

  & > svg {
    margin-right: 8px;
  }

  @media (max-width: 600px) {
    font-size: 16px;
    padding: 10px 20px;
    padding-left: 15px;
  }
`;

export const MoreInfoButton = styled(Button)`
  background-color: var(--dark-button);
  color: var(--white);

  & > svg {
    fill: var(--white);
  }
`;

export const WatchButton = styled(Button)`
  background-color: var(--white);
  color: var(--background);

  & > svg {
    fill: var(--background);
  }
`;

export const Buttons = styled.div`
  display: flex;
  margin-top: 15px;
`;

export const Container = styled.div`
  background-image: url(${props => props.backdrop});
  background-position: center;
  background-size: cover;
  height: 90vh;

  @media (max-width: 768px) {
    height: 75vh;
  }

  @media (max-width: 320px) {
    height: 90vh;
  }
`;

export const Description = styled.div`
  color: var(--off-white);
  font-size: 20px;
  margin-top: 15px;
  max-width: 40%;

  @media (max-width: 1280px) {
    max-width: 50%;
  }
  @media (max-width: 1024px) {
    font-size: 18px;
    max-width: 60%;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    max-width: 85%;
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const Genres = styled.div`
  margin-top: 15px;
  font-size: 18px;
  color: var(--off-white);

  strong {
    color: var(--off-white);
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const HorizontalFade = styled.div`
  background: linear-gradient(to right, var(--background) 30%, transparent 70%);
  display: flex;
  flex-direction: column;
  height: inherit;
  justify-content: center;
  padding-bottom: 150px;
  padding-top: 70px;
  padding-left: 4%;
  width: inherit;
`;

export const Info = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const Name = styled.div`
  font-size: 60px;
  font-weight: 700;

  @media (max-width: 1024px) {
    font-size: 50px;
  }
  @media (max-width: 768px) {
    font-size: 40px;
  }
  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

export const Points = styled.div`
  color: var(--rating);
  margin-right: 15px;
`;

export const Seasons = styled.div`
  margin-right: 15px;
`;

export const VerticalFade = styled.div`
  background: linear-gradient(to top, var(--background) 10%, transparent 90%);
  height: inherit;
  width: inherit;
`;

export const Year = styled.div`
  margin-right: 15px;
`;