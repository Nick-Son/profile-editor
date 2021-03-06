import React from 'react';

const ShowProfile = ({user}) => (
  <div className="show-profile">
    <img src={user.profileImage} alt="profile"/>
    <p><strong>Name: </strong>{user.firstName} {user.lastName}</p>
  </div>
)

export default ShowProfile