import React from 'react';
import PropTypes from 'prop-types';

// state를 필요로 하지 않는 경우 class 대신 function component 이용
function Film({id, title, year, rating, summary, coverimg}) {
    return <h4>{title}</h4>;
}

Film.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    coverimg: PropTypes.string.isRequired
};

export default Film;