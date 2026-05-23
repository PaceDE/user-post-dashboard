import { create } from "zustand"
import { PostStore } from "../types"


export const usePostStore = create<PostStore>((set, get) => ({
    posts: [],
    status: "idle",

    setStatus: (status) => set({ status }),

    setPosts: (posts) => {
        const existing = JSON.parse(localStorage.getItem("posts") || "[]")
        const updated = [...existing,...posts]
        set({
            posts: updated, status: "success"
        })
    },

    addPost: (post) => {
        const current = get().posts
        const updated = [post, ...current]

        set({
            posts: updated, status: "success"
        })

        const existing = JSON.parse(localStorage.getItem("posts") || "[]")
        const updatedLocal = [post, ...existing];


        localStorage.setItem("posts", JSON.stringify(updatedLocal))
    },
}))