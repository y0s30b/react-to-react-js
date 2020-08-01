import React from 'react';
import PropTypes from 'prop-types';
import './Film.css';

// state를 필요로 하지 않는 경우 class 대신 function component 이용
function Film({/*id,*/ title, year, rating, summary, coverimg, genres}) {
  //return <h4>{title}</h4>;
  return (<div className="film">
    <img src={coverimg} alt={title} title={title} />
    <div className="film__data">
      <h3 className="film__title">{title}</h3>
      <h5 className="film__year">{year}</h5>
      <ul className="film__genres">
        {genres.map((genre, index) => 
          {return (<li key={index} className="genres__genre">{genre}</li>);})}
      </ul>
      <p className="film__summary">{summary}</p>
    </div>
  </div>);
}

Film.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  coverimg: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Film;