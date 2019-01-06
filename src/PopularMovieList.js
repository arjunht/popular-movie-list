import React, { Component } from 'react';

class PopularMovieList extends Component {
  render () {
    const profiles = this.props.profiles;
    const users = this.props.users;
    const movies = this.props.movies;
    
    let popularMovies = [];
    for(let i=1; i<= Object.keys(movies).length; i++) {
      popularMovies.push({id: movies[i].id, name: movies[i].name, 
                       users: profiles.filter(profile => movies[i].id == profile.favoriteMovieID)}) 
    }
    
    return (
      <ul>
        {popularMovies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.name}</h2>
            <p>Liked by:</p>
              {movie.users === undefined || movie.users.length === 0 ? <p>No one favorited the movie</p> :
                <ul>
                  {movie.users.map((profile) => (
                    <li key={profile.id}>
                      {users[profile.userID].name}
                    </li>
                  ))}
                </ul>
              }
          </li>
        ))}
      </ul>
    )
  }
}

export default PopularMovieList