import React from 'react'
import UserCard from '../Cards/UserCard'

const Header = () => {
  return (
    <div className='w-full bg-white rounded-[15px] p-[20px]'>
      <div>
        <UserCard name="ABC xyz" image="./asset/logo/1.png" />
      </div>
    </div>
  )
}

export default Header