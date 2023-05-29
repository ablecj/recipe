import React, { useContext } from "react";
import { AllMenuContext } from "./AllMenuContext";
import { DispatchContext } from "../Context/AppProvider";

function PopUp(props) {
  const dispatch = useContext(DispatchContext);
  
  // useContext Applying
  const allMenu = useContext(AllMenuContext);
  // image shown inside the popup window
  let dishDetails = allMenu
    .filter((items) => {
      return items.strMeal === props.showDishname;
    })
    .map((item) => {
      return (
        <div className="popup-content-data ">
          <div className="popup-image flex">
            <img src={item.strMealThumb} alt="popup-pic" />
            <h5 className="popup-image-content">{item.strCategory}</h5>
          </div>
          <h2>{item.strMeal}</h2>

          <ul className="ingredients flex">
            <li>{item.strIngredient1}</li>
            <li>{item.strIngredient2}</li>
            <li>{item.strIngredient3}</li>
            <li>{item.strIngredient4}</li>
          </ul>

          <button
            onClick={() => {
              dispatch({
                type: "add to cart",
                payload: { title: item.strMeal, img: item.strMealThumb },
              });
            }}
          >
            Order Now
          </button>
          <h5 className="popup-close" onClick={props.closePopupHandler}>
            Close
          </h5>
        </div>
      );
    });
  return (
    <div className="popup">
      <div className="popup-content">{dishDetails}</div>
    </div>
  );
}

export default PopUp;
