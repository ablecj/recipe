import React,{useEffect, useState} from "react";
import Loader from "./Loader";

export const AllMenuContext = React.createContext()

export const AllMenu = (props)=>{
    // state for menu
    let[Menu,setMenu]=useState([]);

    // loading state
    let [loading,setLoading]=useState(true)

    // useeffect 
    useEffect(()=>{
        (async () => {
            setLoading(true)
            const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
            let response = await fetch(API_URL);
            let data = await response.json();
            setMenu(data.meals);
            setLoading(false)
          })();
    },[])

    return(
        <AllMenuContext.Provider value={Menu}>
            {!loading ? props.children : <Loader />}
            
        </AllMenuContext.Provider>
    )
}

