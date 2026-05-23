"use client"

import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { postSchema } from "../validations/postSchema"
import { Post, PostFormData } from "../types"
import { usePostStore } from "../store/post.store"
import { useToast } from "@/store/toast"
import InputField from "@/shared/components/ui/InputField.tsx"
import { Dispatch, SetStateAction, useState } from "react"
import { postApi } from "../api/post.api"
import Button from "@/shared/components/ui/button"

function generateId() {
  return Math.floor((Date.now() + Math.random()) * 1000) + 10;
}

export default function AddPostForm({ userId, setModalOpen }: { userId: number, setModalOpen: (value: boolean) => void }) {
  const addToast = useToast(s => s.addToast);

  const { control, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: "",
      body: "",
    },
  })

  const onSubmit = async (data: PostFormData) => {
    try {
      const newPost: Post = {
        id: generateId(),
        userId,
        title: data.title,
        body: data.body,
      }
      await postApi.addPost(newPost)
      addToast({ message: "Post added Succesfully", type: "success" });
      setModalOpen(false);
      reset()
    } catch (err) {
      addToast({ message: "Failed to add Post. Please try again", type: "error" });

    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 border rounded flex flex-col gap-3 w-full h-full"
    >
      {/* Title */}
      <InputField name="title" type="text" label="Title" placeholder="Enter a title" control={control} autoComplete="email" />
      {/* Body */}
      <InputField name="body" type="text" label="Body" placeholder="Enter a body" control={control} />


      <Button
        type="submit"
        disabled={isSubmitting}

      >
        {isSubmitting ? "Adding..." : "Add Post"}
      </Button>
    </form>
  )
}