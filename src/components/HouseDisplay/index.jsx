import React from 'react'
import Home from '../House'
import './index.css'
const HouseDisplay = ({ houses }) => {

    return (
        <div>
            {
                houses.map((currentHouse) => {
                    return (
                        <div className='container'>
                            <h2>{currentHouse.name}</h2>
                            <h2>{currentHouse.address}</h2>
                            <h2>{currentHouse.name}</h2>
                            
                        </div>
                    )
                })

            }
        </div>
    )
}

export default HouseDisplay


// address
// : 
// "123 Lake St, Watertown, MA"
// isSold
// : 
// false
// name
// : 
// "Lakeside Villa"
// price
// : 
// 1000000