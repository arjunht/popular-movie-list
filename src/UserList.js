import React, { Component } from 'react';

class UserList extends Component {
  render() {
    
    const { usersWhoLikedMovie, users } = this.props;
    
    if(usersWhoLikedMovie === undefined || usersWhoLikedMovie.length === 0)
      return <p>No one favorited the movie</p>;
    
    return (
      <ul>
      {usersWhoLikedMovie.map(userID =>
        <li key={userID}>
          {users[userID].name}
        </li>
      )}
      </ul>
    );
  }
}

export default UserList;