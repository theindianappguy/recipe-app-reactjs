import React from 'react'

export default function ErrorMessageAuth({errors,name}) {
    if(errors[name]){
        return <div className='invalid-feedback'>{errors[name].message}</div>
    }
    return null
}
