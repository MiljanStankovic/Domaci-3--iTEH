import React from 'react'
import { GiTeamIdea } from 'react-icons/gi';
import { Link } from 'react-router-dom';

function NavBar( {teamNum} ) {
  return (
    <div className = 'navBar'>
        <Link to="/">Izbor projektnog tima</Link>
        <Link to="/team" className="cart-items">
            <GiTeamIdea style={{marginLeft: 10}}/>
            <div className='cart-num'> {teamNum} </div>
        </Link>
    </div>
  )
}

export default NavBar