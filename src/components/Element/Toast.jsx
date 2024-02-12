// Toast.js
import React, { useEffect } from "react";
import { useToastContext } from "../../Context/ToastContext";

const Toast = ({ message }) => {
  const { setShowToast, showToast } = useToastContext();
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000); // Adjust the time the toast is displayed (in milliseconds)

      return () => {
        clearTimeout(timer);
      };
    }
  }, [showToast, setShowToast]);

  return (
    <div
      style={{
        zIndex: 99,
      }}
      className={`fixed top-4 text-lg right-4 bg-green-700 text-white py-2 px-4 rounded-[25px] ${
        showToast ? "visible" : "invisible"
      }`}
    >
      {message}
    </div>
  );
};

export default Toast;