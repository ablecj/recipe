import React, { useEffect, useState } from "react"
import Hero from "./Hero";
import Dishes from "./Dishes";
import FilterDishes from "./FilterDishes";
import Loader from "./Loader";
import Header from "./Header";

// step1&3
// Create A global context that can be shared to its childrens
export const AllMenuContext =React.createContext();

function Menu(){

  let[Menu,setMenu]=useState([]);
  let[menuCatgry, setMenuCatgry]=useState([]);
  //conditional rendering
  let [loading,setLoading]=useState(true)
  //load single dish datas
  let[singleDish,setSingleDish]=useState([])

  console.log("all menu",Menu);
  console.log("catagory datas are:",menuCatgry);
  
    useEffect(() => {
  //Imediate Invoked Function or IIFE is used inside the useEffect to prevent the error
        (async () => {
          setLoading(true)
          const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
          let response = await fetch(API_URL);
          let data = await response.json();
          setMenu(data.meals);
          setLoading(false)
        })();
        (async () => {
          const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
          let response = await fetch(API_URL);
          let catagoryData = await response.json();
          setMenuCatgry(catagoryData.categories)
          
        })();

        (async () => {
          const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef";
          let response = await fetch(API_URL);
          let singleDishData = await response.json();
          setSingleDish(singleDishData.meals)
         
        })();
        
      },[]);

    return(
        <div>
          <Header />
          <Hero />
          {/* step 2 */}
          <AllMenuContext.Provider value={Menu}>
          {!loading ? <Dishes /> : <Loader />}
          {!loading ? <FilterDishes 
          allMenuCatory={menuCatgry} 
          singleDish={singleDish}
          setSingleDish={setSingleDish}/> : null}
         </AllMenuContext.Provider> 
        </div>
    )
    
}

export default Menu