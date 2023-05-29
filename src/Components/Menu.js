import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./Hero";
import Dishes from "./Dishes";
import FilterDishes from "./FilterDishes";

import Header from "./Header";
import { AllMenu } from "./AllMenuContext";
import CheckOut from "./CheckOut";
import { AppProvider } from "../Context/AppProvider";

function Menu() {
  return (
    <div>
      <Router>
        <AppProvider>
        <Header />
        <Hero />
        <Routes>
          <Route path="/" element={ <AllMenu>
              <Dishes />
              <FilterDishes />
            </AllMenu>} >
           
          </Route>

          <Route path="/checkout" element={<CheckOut />}>
            
          </Route>

        </Routes>
        </AppProvider>
      </Router>
    </div>
  );
}

export default Menu;
