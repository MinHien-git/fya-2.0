import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
interface IToast {
  isOpen: Boolean;
  toggle: () => void;
  message: String;
  status?: 0;
}
export default function Toast({ isOpen, toggle, message, status }: IToast) {
  return createPortal(
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          key="toast"
          initial={{ opacity: 0, y: 20, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ease: "easeOut", duration: 0.25 }}
          exit={{ opacity: 0, y: 20, scale: 0.5 }}
          className="rounded-xl px-8 min-w-60 fixed py-6 bottom-6 right-6 h-auto w-auto shadow-3xl bg-light_gray shadow-primary"
        >
          <p className="font-semibold text-sm">{message}</p>
          <div
            className="absolute top-2 right-2 bg-gray-200 rounded-full p-2"
            onClick={toggle}
          >
            <IoCloseSharp className="w-4 h-4" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
