import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='py-1 flex items-center scroll-m-5 gap-10 h-[85vh]  px-15'>
        
        <LeftContent/>
        <RightContent users={props.users} />
        
    </div>
  )
}

export default Page1Content