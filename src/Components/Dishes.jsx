import { useContext, useState } from "react";
import CardDish from "./CardDish";
import PopUp from "./PopUp";
// step 4 useContext
import { AllMenuContext } from "./Menu";

function Dishes(props){
    // Using useContext in the child
    const allMenu = useContext(AllMenuContext)
    console.log("Global state menu are:",allMenu);

    // state for showing popup messages
    let[showPopup, setShowPopup]=useState(false)

    // to show the dish name of the clicked item
    let[showDishname, setShowDishName]=useState("")

    // show popup function & function passing through props 
    function showPopupHandler(dishName){
        setShowPopup(true)
        setShowDishName(dishName)
    }

    // Lets close the popup
    function closePopupHandler(){
        setShowPopup(false)
    }

    console.log("props are",props);
    let spldishindex = 9
    let splDishes = allMenu && allMenu.length > 0 && allMenu.map((items, index) => {
        if (index < spldishindex) {
            return (
              <CardDish 
              items={items}
              showPopup={showPopupHandler} />
            )
        }
    })
    
    return(
        <section className="dishes">
            {showPopup && <PopUp 
            closePopupHandler={closePopupHandler} 
            showDishname={showDishname}
            />}
            <div className="container">
                <div className="dishes-content text-center">
                <h3>Our Special Dishes</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, ipsa! Ut eum cum amet quis omnis aliquid, error velit reiciendis repudiandae adipisci.</p>
                </div>
                <div className="dishes-list ">
                    <ul className="flex flex-wrap">
                      {splDishes}  
                    </ul>
                </div>
            </div>          
        </section>
    )
}

export default Dishes