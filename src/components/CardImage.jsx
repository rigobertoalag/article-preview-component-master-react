import React from 'react'

import drawers from '../images/drawers.jpg'

const CardImage = () => {
  return (
    <div className='card-image-container'>
        <img src={drawers} alt="drawers" className='card-image'/>
    </div>
  )
}

export default CardImage