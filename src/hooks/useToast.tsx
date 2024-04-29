import { useState } from "react";

export default function useToast() {
  const [isOpen, setisOpen] = useState(false);
  const [message, setMessage] = useState<String>("");

  let timeout: ReturnType<typeof setTimeout> | null = null;
  const toggle = () => {
    setisOpen(!isOpen);
    console.log(isOpen);
    if (timeout) {
      clearTimeout(timeout);
    }
  };

  const setToastMessage = (m: String) => {
    setisOpen(true);

    setMessage(m);
    timeout = setTimeout(() => setisOpen(false), 5000);
  };

  return {
    isOpen,
    toggle,
    setToastMessage,
    message,
  };
}
