import React, { Fragment, ReactNode } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {XMarkIcon} from "@heroicons/react/24/solid";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  children: React.ReactNode;
  title?: ReactNode;
  onClose?: () => void;
  className?: string;
}

const Modal = ({
                 isOpen,
                 setIsOpen,
                 children,
                 title,
                 onClose,
                 className,
               }: ModalProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-30"
        onClose={() => {
          setIsOpen(false);
          onClose && onClose();
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 flex min-h-screen items-center justify-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={`rounded-2xl bg-white text-left align-middle shadow-xl flex flex-col w-full max-h-screen transform transition-all ${className}`}
              >
                  {title && (
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 p-4 text-gray-900 flex justify-between w-full relative shadow"
                    >
                      <span className="w-full">
                        {title}
                      </span>
                      <button
                        onClick={() => {
                          setIsOpen(false);
                          onClose && onClose();
                        }}
                      >
                        <XMarkIcon className='h-6'/>
                      </button>
                    </Dialog.Title>
                  )}
                  <div className="overflow-y-auto" >
                    {children}
                  </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
