import React from 'react';
import './card.css'

export default function Card(props) {

  return (
    <div className='card-container'>
            <div>{props.title}</div>
            <div>{props.body}</div>
        </div>
  );
}