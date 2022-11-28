import React from 'react'

export default function ErrMessageAuthBackend({error}) {
    console.log(error);
   return error?<div className='invalid-feedback'>{error}</div>:null
}