import {useState} from 'react'
import Popup from 'reactjs-popup'

import './index.css'

const Header = props => {
  const [showUserDetails, setUserDetails] = useState(false)

  const onClicktoshowDetails = () => {
    setUserDetails(prevState => !prevState)
    console.log(showUserDetails)
  }

  return (
    <div className='top-container'>
      <nav className='nav-bar-container'>
        <div className='mandir-profile-container'>
          <img
            src='https://play-lh.googleusercontent.com/cxjgWIVHy2T9ufVyyqaR2GayNcAqyTeCrQWpIQIVXoZgE4_7SrU6PcnnRPjScumzYA'
            alt='mandir'
            className='mandir-photo'
          />
          <p className='mandir-name'>Sri Mandir</p>
        </div>
        <ul className='header-items-container'>
          <li className='header-item'>Home</li>
          <li className='header-item'>Puja</li>
          <li className='header-item'>Panchang</li>

          <li className='header-item'>Temples</li>
          <li className='header-item'>Library</li>
        </ul>
        <div className='profile-container'>
          <Popup
            position='top right'
            modal
            trigger={
              <button
                type='button'
                className='profile-button-to-show-details'
                onClick={onClicktoshowDetails}
              >
                <img
                  src='https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg'
                  alt='profile-icon'
                  className='profile-icon'
                />
              </button>
            }
          ></Popup>
        </div>
      </nav>
    </div>
  )
}

export default Header
