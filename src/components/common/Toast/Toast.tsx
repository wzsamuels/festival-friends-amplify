import React, { useEffect, useState } from "react";
import { ToastData } from "../../../types";

interface ToastProps {
  toastData: ToastData;
  duration?: number;
  onClose?: () => void;
}

const Toast: React.FC<ToastProps> = ({
  toastData,
  onClose,
  duration = 3000,
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (toastData.message) {
      setVisible(true);
      const timeout = setTimeout(() => {
        setVisible(false);
        onClose && onClose();
      }, duration);

      return () => clearTimeout(timeout);
    }
  }, [toastData, duration, onClose]);

  if (!visible) {
    return null;
  }

  const toastColor = {
    success: "bg-brandYellow",
    error: "bg-red-500",
    info: "bg-blue-500",
    warning: "bg-yellow-400",
  };

  return (
    <div className={`fixed bottom-4 z-50 left-4 w-full  `} role="alert">
      <div
        className={`flex justify-between items-center max-w-sm p-4 rounded-lg shadow-lg ${
          toastColor[toastData.type]
        } text-white`}
      >
        <div>
          <p>{toastData.message}</p>
        </div>
        <button
          className="ml-4 text-white hover:text-gray-300"
          onClick={() => {
            setVisible(false);
            onClose && onClose();
          }}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Toast;
