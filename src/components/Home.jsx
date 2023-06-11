import React from 'react'
import LeftNav from './LeftNav'
import MainContent from './MainContent'
import RightNav from './RightNav'

const Home = () => {
  return (
    <div className='container max-w-7xl mx-auto'>
        <div className='flex justify-between'>
        <LeftNav/>
        <MainContent/>
        <RightNav/>
        </div>
       
    </div>
  )
}

export default Home