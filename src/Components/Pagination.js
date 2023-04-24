import React from 'react'

function Pagination(props) {
  let numberOfPages = [];
  for(let i =1; i<=Math.ceil(props.filterDishes.length/props.itemsPerPage) ; i++){
    numberOfPages.push(i);
  }

  //function for changing the pages
  function showDishesHandler(event){
      let currentPage = event.target.id
      props.setCurrentPage(currentPage)
  }

  let pages = numberOfPages.map((pageNumber)=>{
    return(
      <li id={pageNumber} onClick={showDishesHandler}>{pageNumber}</li>
    )
  })

  return (
    <div className="pagination">
    <ul className='pagination'>
      {pages}
    </ul>
    </div>
  )
}

export default Pagination
