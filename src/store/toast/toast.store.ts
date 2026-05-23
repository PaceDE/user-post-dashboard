import { nanoid } from "nanoid";
import { ToastStore } from "./toast.types";
import { create } from "zustand";

export const useToast = create<ToastStore>((set) => ({
    toasts: [],
    removeToast: (id) => (
        set((state) => ({
            toasts: state.toasts.filter(toast => toast.id !== id)
        }))
    ),
    addToast: (toast) => {
        const id = nanoid();
        const duration = toast.duration || 3000

        set((state) => ({
            toasts: [...state.toasts, { ...toast, id }]

        }));

        setTimeout(()=> {
            set((state)=>({
               toasts: state.toasts.filter(toast => toast.id !== id)
        }))
        },duration)
    }
}))