"use client"

import { usePostStore } from "@/features/post/store/post.store"
import Error from "@/shared/components/ui/error"
import { useToast } from "@/store/toast"
import { ApiError } from "next/dist/server/api-utils"
import { useEffect } from "react"

const ErrorPage = ({ error, reset }: { error: Error | ApiError, reset:()=> void }) => {
  const addToast = useToast(state=>state.addToast)
  const setStatus = usePostStore(s => s.setStatus)
  useEffect(()=> {
    addToast({
      message: "Failed to load posts",
      type: "error"
    })
    setStatus("error");

  },[])
  
  return (
    <div className="flex justify-center items-center h-full">
      <Error title="Failed to load posts" description={error.message} onClick={() => reset()} />
    </div>
  )
}

export default ErrorPage
