import React from 'react'
import { Link } from 'react-router-dom'
import 'sharedStyles/styles.css'

const Home = (props) => {
  return (
    <div className='centered-container'>
      <p className='large-header'>{'Duckr'}</p>
      <p className='sub-header'>{'Real time, cloud based, modular, scalable, growth hack, social platform. In the cloud'}</p>
      <Link to='/feed'>{'Go to feed'}</Link>
    </div>
  )
}

export default Home
