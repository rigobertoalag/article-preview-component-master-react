import React from 'react'

import CardImage from './CardImage';
import CardText from './CardText';

const Card = () => {
  return (
    <div className='card-container'>
        <CardImage />
        <CardText />
    </div>
  )
}

export default Card;