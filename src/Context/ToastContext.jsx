import { useContext, useState } from "react";
import { createContext } from "react";

const INITIAL_STATE = {
  showToast: false,
  setShowToast: false,
  toastMessage: ""
};

const ToastContext = createContext(INITIAL_STATE);

export function ToastProvider({ children }) {
const [showToast, setShowToast] = useState(false)
const [toastMessage, setToastMessage] = useState("")

  const value = {
   toastMessage,
   showToast,
   setShowToast,
   setToastMessage
  };
  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
}

export const useToastContext = () => useContext(ToastContext);