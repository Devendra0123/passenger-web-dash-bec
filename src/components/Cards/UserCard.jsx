import React from 'react'

const UserCard = ({name, image}) => {
  return (
    <div className='flex items-center gap-[10px]'>
        <div>
            <img src={image} alt="userImage" className='w-[40px] h-[40px] rounded-full border border-primary' />
        </div>
        <p>
            {name}
        </p>
    </div>
  )
}

export default UserCard