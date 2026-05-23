import z from "zod";
import { postSchema } from "./validations/postSchema";

export interface Post {
    id:number,
    userId:number,
    body:string,
    title:string
}


export type FetchPosts = Post[]

export type PostCardData = Post;

export type StatusVariant= "idle" | "loading" | "success" | "error"

export interface PostStore {
    posts: Post[];
    status: StatusVariant;

    setPosts:(posts:Post[]) => void
    addPost: (post:Post) => void
    setStatus: (status: StatusVariant) => void
}

export type PostFormData = z.infer<typeof postSchema>