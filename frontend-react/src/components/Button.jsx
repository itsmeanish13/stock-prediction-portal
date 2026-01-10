import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ text, class: className, url, onClick }) => {
  if (url) {
    return (
      <Link to={url} className={`btn ${className}`}>
        {text}
      </Link>
    )
  }

  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
