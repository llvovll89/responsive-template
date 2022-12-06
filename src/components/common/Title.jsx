import React from 'react'
import './Title.css'

export const Title = ({title}) => {
  return (
    <>
        <h2 className="title" data-aos='fade-in-zoom'>
          {title}
        </h2>
    </>
  )
}
