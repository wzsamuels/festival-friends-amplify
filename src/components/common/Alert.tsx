import React, { Fragment, ReactElement } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface Button {
  text: string;
  role: 'cancel' | 'confirm' | string;
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
          button.role === 'confirm'
            ? 'text-white bg-primary-default focus-visible:ring-blue-500'
            : 'text-gray-700 bg-gray-100 hover:bg-gray-200 focus-visible:ring-gray-500'
        }`}
        onClick={() => {
          { button.handler && button.handler()}
          setIsOpen(false);
        }}
      >
        {button.text}
      </button>
    ));
  };

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={() => setIsOpen(false)}
      >
        <div className="min-h-screen px-4 text-center">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                {title}
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-sm text-gray-500">{message}</p>
              </div>
              <div className="mt-4 space-x-4">{renderButtons()}</div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CustomAlert;
