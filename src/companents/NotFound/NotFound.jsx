import React from 'react'
import './NotFound.scss'
import { useNavigate } from 'react-router-dom'

function NotFound() {
  const back = useNavigate()
  return (
    <>
      <div className="notfound">
        <h3>Page Not Found</h3>
        <button onClick={() => back(-1)}>Back</button>
      </div>
    </>
  )
}

export default NotFound
