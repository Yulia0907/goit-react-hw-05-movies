import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import {
  MoviesList,
  MoviesItem,
  MoviesLink,
  MoviesWrapper,
  Img,
  TitleMovies,
} from './TrendingList.styles';

export const TrendingList = ({ gallery, pathLocation }) => {
  const URLimg = 'https://image.tmdb.org/t/p/w500';
  const location = useLocation();

  return (
    <>
      <MoviesWrapper>
        <MoviesList>
          {gallery && (
            gallery.map(({ id, title, release_date, poster_path }) => {
              return (
                <MoviesItem key={id}>
                  <MoviesLink
                    to={pathLocation + id.toString()}
                    state={{ from: location }}
                  >
                    <Img src={URLimg + poster_path} alt={title} />
                    <TitleMovies>
                      {title} ({release_date.slice(0, 4)})
                    </TitleMovies>
                    
                  </MoviesLink>
                </MoviesItem>
              );
            })
          )}
        </MoviesList>
      </MoviesWrapper>
    </>
  );
};

TrendingList.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  pathLocation: PropTypes.string.isRequired,
};