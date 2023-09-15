import React from 'react'
import HouseDisplay from '../HouseDisplay'

const Home = ({houses}) => {
  return (
    <div>
        <HouseDisplay houses ={houses}/>
    </div>
  )
}

export default Home