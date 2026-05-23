import { Dispatch, SetStateAction } from "react"
import AddPostForm from "./AddPostForm"

const AddPostModal = ({setModalOpen, userId}:{userId:number,setModalOpen: (value:boolean)=>void}) => {
  return (
    <div>
        <div  className="fixed inset-0 bg-black/40 z-100" onClick={()=>setModalOpen(false)}/>
        <div className="min-w-150 p-4 flex justify-center items-center  rounded-3xl absolute left-1/2 top-1/2 -translate-1/2 bg-bg-primary z-101">
          <AddPostForm userId={userId} setModalOpen={setModalOpen} />
        </div>
      </div>
  )
}

export default AddPostModal