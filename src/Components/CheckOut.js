import React from 'react'
import { StateContext } from '../Context/AppProvider'
import { useContext } from 'react'

const CheckOut = () => {
  const cartPackage = useContext(StateContext) 
  console.log("checkout state",cartPackage);

  let cartPackagesAre = cartPackage.cartItems.map((item)=>{
    return (
      <div>
        <img src={item.img} alt=''/>
        <h6>{item.title}</h6>
      </div>
    )
  })

  return (
    
    <div className='checkout'>
      <h2>This is a checkout page</h2>
      <div className='checkout-card'>
      {cartPackagesAre} 
      </div>
      
    </div>
  )
  
}

export default CheckOut
