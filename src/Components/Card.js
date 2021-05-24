import React from 'react';

export default function Card(props) {
  console.log(props.title)
  return (
        <div>
            <div>{props.title}</div>
            <div>{props.body}</div>
        </div>
  );
}