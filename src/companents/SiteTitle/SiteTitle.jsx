import React from 'react'
import './SiteTitle.scss'

function SiteTitle({ title }) {
  return (
    <>
      <div className="siteTitle">
        <span className="siteTitle__span">{title}</span>
      </div>
    </>
  )
}

export default SiteTitle
