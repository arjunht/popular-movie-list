import React, { Component } from 'react'
import MovieCard from './MovieCard';

class Dashboard extends Component {
  render() {
    
    const { usersByMovie, movies, users} = this.props;
    
    return (
      <ul>
        {Object.keys(movies).map(id => (
          <MovieCard
            key={id}
            usersWhoLikedMovie={usersByMovie[id]}
            users={users}
            movieInfo={movies[id]}
          />
        ))}
      </ul>
      );
  }
}

export default Dashboard;