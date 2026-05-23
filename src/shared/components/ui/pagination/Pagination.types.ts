import { Dispatch, SetStateAction } from "react";

export interface PaginationProps {
    noOfPage: number,
    page: number,
    setPage: Dispatch<SetStateAction<number>>
}