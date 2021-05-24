import React, { useState, useEffect } from 'react';
import axios from 'axios'

export default function Card(props) {
    
  return (
        <div>
            <div>{props.title}</div>
            <div>{props.body}</div>
        </div>
  );
}