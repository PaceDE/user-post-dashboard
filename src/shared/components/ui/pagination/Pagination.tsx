import React, { Dispatch, SetStateAction } from 'react'
import Button from '../button';
import { PaginationProps } from './Pagination.types';

const Pagination = ({noOfPage, page, setPage}:PaginationProps) => {
  return (
    <div className="flex gap-1 w-full justify-center mt-5">
       <Button onClick={()=> setPage(prev=> Math.max(1,prev-1))}>{"<"}</Button>
        {Array.from({ length: noOfPage }).map((_, idx) => {
          const isActive = page == idx+1;
          return (
            <Button variant={isActive ? "outlined" : "filled"} key={idx} disabled={isActive} onClick={() => setPage(idx + 1)} customStyle={`${isActive ? "hover:bg-transparent hover:text-fg-primary" : ""}`}>
              {idx + 1}
            </Button>
          )
        })}
         <Button onClick={()=> setPage(prev=> Math.min(prev+1,noOfPage))}>{">"}</Button>
      </div>
  )
}

export default Pagination
