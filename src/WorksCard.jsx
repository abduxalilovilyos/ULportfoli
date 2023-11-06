import React from 'react'

const WorksCard = ({photo,title,year,theam,comment}) => {
  return (
    <div className='works__card'>
        <img src={photo}/>
        <div className="workCard__text">
            <h1>{title}</h1>
            <div className="workCard__item">
                <div className="year"><h6>{year}</h6></div>
                <h6>{theam}</h6>
            </div>
            <p>{comment}</p>
        </div>
    </div>
  )
}

export default WorksCard