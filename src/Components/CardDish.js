import React from 'react'

function CardDish(props) {
  
  return (
    <li>
      <a href='javaScript:;' onClick={()=>props.showPopup(props.items.strMeal)}>
       <img src={props.items.strMealThumb} alt="" />
       <h3>{props.items.strMeal}</h3>
       </a>
    </li>
  )
}

export default CardDish
                    