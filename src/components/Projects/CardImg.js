import React from 'react'


export default function cardImg(props) {
  return (
    <figure className='cardImg'>
    <img src={props.image} alt={props.image} className='imgProject'/>
    <figcaption>
        <p>{props.image}</p>
    <p>{props.name}</p><p>{props.tools} - {props.date}</p><br/><p>{props.description}</p>
    </figcaption>
    </figure>
  )
}

