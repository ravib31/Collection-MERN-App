import React from 'react'
import Slider from '../components/Slider/Slider'
import FeatureProducts from '../components/Feature/FeatureProducts'

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeatureProducts type="featured"/>
      <FeatureProducts type="trending"/>
    </div>
  )
}

export default Home