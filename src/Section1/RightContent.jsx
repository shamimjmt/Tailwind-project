import React from 'react'
import Right from './RightCard'

const RightContent = (props) => {
  console.log(props);
  return (
    <div id='right' className='h-full  w-3/4 overflow-x-auto flex flex-nowrap gap-2 bg-blue'>


    {props.users.map(function(elem,idx){
      return <Right key={idx} color={elem.color} id={idx} img={elem.img} tag={elem.tag}/>

    })}


    </div>
  )
}

export default RightContent