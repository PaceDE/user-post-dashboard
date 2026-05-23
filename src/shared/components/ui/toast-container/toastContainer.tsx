"use client";

import { useToast } from "@/store/toast";
import { AnimatePresence, motion } from "motion/react";
import { memo, useEffect } from "react";
import { IoClose } from "react-icons/io5";

const backgroundColors = {
    primary: {
        success: "bg-[#82c285]",
        error: "bg-[#fb8a71]",
    },
    light: {
        success: "bg-[#e6f4e7]",
        error: "bg-[#ffe6df]",
    },
    bar: {
        success: "border-[#82c285]",
        error: "border-[#fb8a71]",
    }
};

export const ToastContainer = () => {
    const toasts = useToast(state=>state.toasts);
    const removeToast = useToast(state=>state.removeToast)

    const handleClose = (id: string) => {
        removeToast(id);
    };

    return (
        <div>
            <div style={{ position: "fixed", top: 20, right: 20, zIndex: 9999 }}>
                <AnimatePresence>
                    {toasts.map((toast, index) => {
                    
                        const primaryColor = backgroundColors.primary[toast.type] 
                        const lightColor = backgroundColors.light[toast.type] 
                        const barColor = backgroundColors.bar[toast.type] 

                        return (

                            <motion.div
                                key={toast.id}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 50 }}
                                transition={{ duration: 0.4}}
                                className={`relative text-fg-inverse mb-4 px-2 py-3 pr-14 ${lightColor} border-l-4 ${barColor} rounded-b-xl cursor-pointer overflow-hidden`}
                            >
                                {toast.message}

                                <IoClose onClick = {()=>handleClose(toast.id)} className="absolute top-2 right-2 text-xl text-secondary cursor-pointer md:hidden" />

                                <motion.div
                                    initial={{ width: "100%" }}
                                    animate={{ width: "0%" }}
                                    transition={{ duration: toast.duration ? toast.duration / 1000 - 1 : 3, ease: "linear" }}
                                    className={`${primaryColor} absolute bottom-0 left-0 h-1 rounded-b-xl`}
                                />
                            </motion.div>
                        )
                    })}
                </AnimatePresence>
            </div>

        </div >
    );
}