import React from 'react'
import ReactPaginate from 'react-paginate';
export const Paginate = ({selectMovie}) => {

    const handlePageClick=(data)=>{
        console.log(data.selected+1)
        selectMovie(data.selected+1)
    }
    const pageCount=500;

  return (
    <>
    <ReactPaginate
      breakLabel="...."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel="< previous"
      containerClassName={"pagination justify-content-center p-3  m-auto" }
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      breakClassName={"page-item"}
      nextClassName={"page-item"}
      nextLinkClassName={"page-link"}
      previousLinkClassName={"page-link"}
      previousClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  </>
  )
}
