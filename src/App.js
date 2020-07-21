import React from 'react';
import axios from 'axios';
import Film from './Film';

class App extends React.Component {
  state = {
    isLoading: true,
    films: []
  }
  getFilms = async () => {
    //const films = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    //console.log(movies);
    this.setState({films: movies, isLoading: false});
    //console.log(this.state.films);
  }
  async componentDidMount() {
    // 여기에서 data를 fetch
    /*setTimeout(() => {
      this.setState({ isLoading: false })
    }, 3000);*/

    // data를 fetch하는 방법에는, fetch() method도 있지만, axios()를 주로 사용할 예정
    // yts-proxy.now.sh/list_movie.json
    
    this.getFilms();
  }
  render() {
    const {isLoading, films} = this.state;
    return <div>
      {isLoading? "Loading": films.map(
        film => {
          console.log(film);
          return <Film 
            key={film.id}
            id={film.id} 
            title={film.title} 
            year={film.year} 
            rating={film.rating} 
            summary={film.summary} 
            coverimg={film.medium_cover_image} />
        }
      )}
    </div>
  }
}

export default App;