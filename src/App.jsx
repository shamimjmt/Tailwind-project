import React from 'react'
import Section1 from './Section1/Section1'
import Section2 from './Section2/Section2'

const App = () => {
  const users=[
    {
      img:'https://plus.unsplash.com/premium_photo-1661583687357-f047d7f7b399?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'',
       color:'orange',
      tag:'Satisfied'


    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661608886163-401a8af9448d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'',
      color:'blue',
      tag:'Undeserved'

    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661430668786-9a7c1d321380?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'',
       color:'crimson',
      tag:'Underbackened'

    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661768375570-eaed6b9a615c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'',
       color:'purple',
      tag:'underwear'

    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661670381096-eb1480c91f67?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'',
       color:'black',
      tag:'underocver'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661593338073-d47b3539299a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'',
       color:'green',
      tag:'agent by'
    }
  ]
  return (
    <div className='bc'>
      <Section1 users={users}/>
      
      </div>
  )
}

export default App