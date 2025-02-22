import React from 'react';

import './Card.css';

const Card = ({imagePath, imageName, title, description}) => {
  return (
    <div className='container-card'>
      <img src={imagePath} alt={imageName}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
