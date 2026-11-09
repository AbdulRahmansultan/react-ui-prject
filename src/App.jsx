import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
import Navbar from './components/Section1/Navbar'

const App = () => {

  const  users = [
  {
    img: 'https://plus.unsplash.com/premium_photo-1661488679945-f8d072c73d90?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    intro: '',
    tag:'Satisfied'
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1661373737351-98fd9370ce37?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    intro: '',
    tag:'Underserved'
  },
  {
    img: 'https://images.unsplash.com/photo-1758873271805-1ff103e28558?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    intro: '',
    tag:'Underbanked'
  },
    {
    img: 'https://images.unsplash.com/photo-1632923945577-6d8e0d803c2f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    intro: '',
    tag:'Underbanked'
  },
  
  ]
  return (
    <div>
        <Section1  users={users}/>
        <Section2 />
        
    </div>
  )
}

export default App
