import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Right = (props) => {
  return (
    <div className='h-full w-80 shrink-0 p-4'>
      
      <div className='relative h-full   w-full overflow-hidden rounded-4xl'>
        
        <img 
          className='h-full w-full object-cover rounded-4xl' 
          src={props.img} 
          alt="" 
        />
        
        
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent  p-5 flex flex-col justify-between'>
          <h2 className='bg-white rounded-full h-12 w-12 text-2xl font-bold flex justify-center items-center'>{props.id+1}</h2>
          <div>
            <p className=' text-shadow-2xs text-lg leading-relaxed text-white mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt harum laudantium eum, maiores exercitationem molestias.</p>
            <div className=' flex justify-between '>
              <button style={{backgroundColor:props.color}} className=' text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
              <button className='bg-green-600 text-white font-medium px-8 py-2 rounded-full' ><i class="ri-arrow-right-line"></i></button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Right