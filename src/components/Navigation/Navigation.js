import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'
import PropTypes from 'prop-types'
import { ModalContainer } from 'container'

const NavLinks = ({ isAuthed }) => {
  return isAuthed === true
    ? <ul className='navigation__ul'>
        <li className='navigation__item'>
          <Link to='/' className='navigation__link'>{'Home'}</Link>
        </li>
      </ul>
    : null
}

const ActionLinks = ({ isAuthed }) => {
  return isAuthed === true
    ? <ul className='navigation__ul'>
        <li className='navigation__item'><ModalContainer /></li>
        <li className='navigation__item'>
          <Link to='/logout' className='navigation__link'>{'Logout'}</Link>
        </li>
      </ul>
    : <ul className='navigation__ul'>
        <li className='navigation__item'>
          <Link to='/' className='navigation__link'>{'Home'}</Link>
        </li>
        <li className='navigation__item'>
          <Link to='/auth' className='navigation__link'>{'Authenticate'}</Link>
        </li>
      </ul>
}

const Navigation = (props) => {
  return (
    <div className='navigation'>
      <nav className='navigation__container'>
        <NavLinks isAuthed={props.isAuthed} />
        <ActionLinks isAuthed={props.isAuthed} />
      </nav>
    </div>
  )
}

Navigation.propTypes = ActionLinks.propTypes = NavLinks.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
}

export default Navigation
