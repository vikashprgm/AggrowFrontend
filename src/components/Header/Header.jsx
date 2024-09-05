import React from 'react'
import './header.css'
import { useNavigate } from 'react-router-dom'
const Header = (props) => {
  const navigate = useNavigate()
  return (
    <><div className='header'>
      <div className="header-img">
        <img src='/header-img.webp' alt="" />
      </div>
      <div className="header-content">
        <div className="tagline">
          <h1>" <span className='tagline-hl'>फसल</span> का फैसला</h1>
          <h1><span className='tagline-hl'>टेक्नोलॉजी</span> के साथ "</h1>
        </div>
        <div className="tagline-description">
        <p>Your digital companion for smarter farming -</p>
        <p>We help maintain a balanced supply and ensure fair prices, so you can farm smarter and earn better.</p>
        </div>
        <button onClick={props.value ==="Generate Report"?()=>navigate("/report"):()=>{}} className='header-btn'>{props.value}</button>
      </div>
    </div>
    <hr />
    </>
  )
}

export default Header;
