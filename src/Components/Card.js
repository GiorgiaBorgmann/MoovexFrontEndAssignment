import React from 'react';
import './card.css'

export default function Card(props) {

  return (
    <div className='card-container'>
      <div> title: {props.title}</div>
      <div>Information: {props.body}</div>
        </div>
  );
}