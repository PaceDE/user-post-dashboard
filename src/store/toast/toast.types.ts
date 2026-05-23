export type ToastVariant = "success" | "error"
export interface Toast {
    id: string;
    message: string;
    type: ToastVariant;
    duration?: number;

}
export type ToastInput = Omit<Toast, "id">

export interface ToastStore {
    toasts: Toast[],
    addToast: (toast: ToastInput) => void;
    removeToast: (id: string) => void;
}