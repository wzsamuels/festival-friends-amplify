import React, { ReactElement } from "react";
import Modal from "../Modal/Modal";

interface Button {
  text: string;
  role: "cancel" | "confirm" | string;
  handler?: () => void;
}

interface CustomAlertProps {
  title: string;
  message: string;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  buttons: Button[];
}

const CustomAlert: React.FC<CustomAlertProps> = ({
  title,
  message,
  isOpen,
  setIsOpen,
  buttons,
}) => {
  const renderButtons = (): ReactElement[] => {
    return buttons.map((button, index) => (
      <button
        key={index}
        type="button"
        className={`inline-flex justify-center px-4 py-2 text-sm font-medium border border-transparent rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
          button.role === "confirm"
            ? "text-white bg-brandYellow focus-visible:ring-brandYellow"
            : "text-gray-700 bg-gray-100 hover:bg-gray-200 focus-visible:ring-gray-500"
        }`}
        onClick={() => {
          {
            button.handler && button.handler();
          }
          setIsOpen(false);
        }}
      >
        {button.text}
      </button>
    ));
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className="w-full max-w-[350px] p-4"
    >
      <div className="mb-4">
        <p className="text-xl text-center text-gray-500">{message}</p>
      </div>
      <div className="flex justify-center  space-x-4">{renderButtons()}</div>
    </Modal>
  );
};

export default CustomAlert;
