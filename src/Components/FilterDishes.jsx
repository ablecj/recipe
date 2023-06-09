import React, { useContext, useState,useEffect } from 'react'
import Pagination from './Pagination';
import CardDish from './CardDish';
// useContext importing
import { AllMenuContext } from './AllMenuContext';

function FilterDishes(props) {

  let[menuCatgry, setMenuCatgry]=useState([]);
  //conditional rendering
  
  //load single dish datas
  let[singleDish,setSingleDish]=useState([])

  const allMenu = useContext(AllMenuContext)
  console.log("single dish props",props.singleDish);
  console.log("all menu:",props.allMenu);
  
  // let [allMenus,setAllMenu]=useState(props.allMenu)
  let[filterDishes, setFilterDishes]=useState([])
  let[activeDish,setActiveDish]=useState("Beef")
  //pagination
  let [currentPage,setCurrentPage]=useState(1)
  let [itemsPerPage,setItemPerPage]=useState(4)

  let indexOfLastDish = currentPage * itemsPerPage;
  //1*4 =4
  //2*4 = 8
  //3*4 = 12
  let indexOfFirestDish = indexOfLastDish - itemsPerPage
  //4-4 = 0
  //8-4 = 4
  //12-4 = 8

  let showTheseDishes = filterDishes.slice(indexOfFirestDish,indexOfLastDish)

  // console.log("all menu",Menu);
  console.log("catagory datas are:",menuCatgry);
  
    useEffect(() => {
  //Imediate Invoked Function or IIFE is used inside the useEffect to prevent the error
      
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



  
// lets show only single dish
let singleDishFirst = singleDish.map((item,index)=>{
  let maxItem=8
  if(index < maxItem){
    return(
      <li>
       <img src={item.strMealThumb} alt=''/>
       <h3>{item.strMeal}</h3>
      </li>
    )
  }
  
})

  console.log(props.allMenuCatory);

  //Show Dishes onClick
  function showFilteredDishesHandler(catagory){
    setSingleDish([])
    setActiveDish(catagory)
      let filteredDishesAre=allMenu.filter((items)=>{
            return(
              items.strCategory === catagory
            )
          }).map((items)=>{
            return(
              <CardDish items={items} />
            )
          })
          console.log("filtered dishes are",filteredDishesAre);
          setFilterDishes(filteredDishesAre)
  }
  console.log("filtered dishes Array:",filterDishes.length);

//Lets show the All Catagories
 let allCatgries= menuCatgry.map((item)=>{
    return(
      <li  className={item.strCategory === activeDish? "active" : ""} onClick={()=>{showFilteredDishesHandler(item.strCategory)}}>
        {item.strCategory}
        </li>
    )
  })

  return (
    <div className='filtered-dish'>
        <div className="container">
            <div className="text-center">
                <h2>Choose Your Dishes</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, eaque aut provident incidunt facere est at ducimus quam accusantium quia exercitationem nisi ad nostrum. Veniam impedit praesentium ducimus!</p>
            </div>
            <div className="filtered-dish">
              <ul>
                {allCatgries}
              </ul>
            </div>
            <div className="filtered-dish-list ">
              <ul className='flex flex-wrap'>
                  {singleDishFirst}
                  {singleDishFirst !=0 || filterDishes.length !=0 ? showTheseDishes:
                  <div className='alert'>
                    <h3>Sorry, No items found.</h3>
                    <h4>Please try anothre dishes!</h4>
                   </div>}
              </ul>
            </div>
        </div>
        <Pagination
         filterDishes={filterDishes}
         itemsPerPage = {itemsPerPage}
         setCurrentPage={setCurrentPage}/>
    </div>
  )
}

export default FilterDishes
