import { serverFetch } from "@/shared/lib/api/serverFetch";
import { FetchPosts, Post, PostFormData } from "../types";
import { useStore } from "zustand";
import { usePostStore } from "../store/post.store";

export const postApi = {
    fetchPost: (id: string) =>
        serverFetch<FetchPosts>(`/posts?userId=${id}`, {
            next: { revalidate: 60 }
        }),
    
        addPost: async (post: Post) => {
        try {
            await new Promise((resolve) =>
                setTimeout(resolve, 3000)
            )
            usePostStore.getState().addPost(post)

            return { message: "Post added successfully" }
        } catch (error) {
            usePostStore.getState().setStatus("error")
            throw error
        }
    }
}