import React from 'react';
import '../App.css';

let AvatarImg = 'images/avatar/avatar152x152.png';

function Avatar(){
  return(
    <div className="avatar">
      <div>
        <img src={AvatarImg} alt="Avatar" />
        <div>Madame Ristow</div>
      </div>
      <br />
    </div>
  )
}

export default Avatar;