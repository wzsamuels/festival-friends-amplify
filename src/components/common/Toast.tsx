import React, { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
  onClose?: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const Toast: React.FC<ToastProps> = ({ message, type = 'info', duration = 10000, onClose = () => {} }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timeout = setTimeout(() => {
        setVisible(false);
        onClose();
      }, duration);

      return () => clearTimeout(timeout);
    }
  }, [message, duration, onClose]);

  if (!visible) {
    return null;
  }

  const toastColor = {
    success: 'bg-green-950',
    error: 'bg-red-500',
    info: 'bg-blue-500',
    warning: 'bg-yellow-400',
  };

  return (
    <div
      className={`fixed bottom-4 z-50 left-0 w-full  `}
      role="alert"
    >
      <div className={`flex justify-between items-center max-w-sm p-4 rounded-lg shadow-lg ${toastColor[type]} text-white`}>
        <div>
          <p>{message}</p>
        </div>
        <button
          className="ml-4 text-white hover:text-gray-300"
          onClick={() => {
            setVisible(false);
            onClose();
          }}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Toast;
