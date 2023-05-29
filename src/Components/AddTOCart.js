// import { colours } from 'nodemon/lib/config/defaults'
import React from 'react'
import { StateContext } from '../Context/AppProvider'
import { useContext } from 'react'

const AddTOCart = ({addToCart}) => {

  const cartPackage = useContext(StateContext)
  console.log("cartpackages are",cartPackage);

  let cartPackagesAre = cartPackage.cartItems.map((item)=>{
    return(
      <div>
         <img src={item.img} alt=''/>
        <h6>{item.title}</h6>
      </div>
    )
  })

  // let addToCartResults = addToCart.map((items)=>{
  //   return(
  //     <div>
  //       <img src={items.img} alt=''/>
  //       <h6>{items.title}</h6>
  //     </div>
  //   )
   
  // })

  return (
   <div className='add-to-cart-wrapper'>
    <div className="add-to-cart-item">
      <h6 className='text-center'>CART</h6>
      {cartPackagesAre}
    </div>
   </div>
  )
}

export default AddTOCart
