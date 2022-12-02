import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ButtonBack = styled.button`
  background-color: rgb(247, 76, 8);
  border-style: none;
  border-radius: 5px;
  height: 25px;
  width: 70px;
  margin-right: 30px;
  :hover,
  :focus {
    background-color: #fccab8;
    cursor: pointer;
  }
`;

export const SectionDetails = styled.div`
width: 1000px;
  display: flex;
  margin: 30px auto 0 auto;
`;

export const MovieCard = styled.div`
  display: flex;
`;

export const MovieCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  margin-left: 30px;
  width: 400px;
`;

export const GenresList = styled.ul`
  display: flex;
  flex-direction: row;
  grid-gap: 5px;
`;

export const MovieTitle = styled.h2`
  margin-top: 0;
`;

export const Link = styled(NavLink)`
  :not(:last-child) {
    margin-right: 5px;
  }
  :hover,
  :focus {
    color: rgb(247, 76, 8);
  }
  &.active {
    background-color: rgb(247, 76, 8);
    color: black;
    padding: 2px 7px;
    border-radius: 5px
  }
`;