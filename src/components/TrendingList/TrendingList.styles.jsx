import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MoviesList = styled.ul`
  margin-left: auto;
  margin-right: auto;
  font-size: 16px;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(5, 1fr);
`;

export const MoviesItem = styled.li`
  width: 200px;
  transition: 1s;
  display: flex;
  :hover {
    transform: scale(1.1);
  }
`;

export const MoviesLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  ${MoviesItem}:hover & {
    color: rgb(247, 76, 8);
  }
  &.active {
    color: rgb(247, 76, 8);
  }
`;

export const MoviesWrapper = styled.div`
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

export const Img = styled.img`
  width: 200px;
  height: 300px;
  margin-bottom: 5px;
  margin-top: 5px;
`;

export const TitleMovies = styled.h3`
  flex-grow: 1;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  background-color: inherit;
`;

export const Loading = styled.div`
  font-style: italic;
  margin-top: 10px;
`