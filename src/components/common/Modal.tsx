import React, { Fragment, ReactNode } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { GrClose } from "react-icons/all";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  children: React.ReactNode;
  title: ReactNode;
  onClose?: () => void;
}

const Modal = ({ isOpen, setIsOpen, children, title, onClose }: ModalProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
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

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full h-full max-w-4xl min-h-[500px] transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all overflow-y-auto max-h-[90vh]">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 pb-4 text-gray-900 flex justify-between w-full relative"
                >
                  <span className='w-full after:left-0 after:w-full after:absolute after:h-[1px] after:bottom-0 after:bg-primary-default'>{title}</span>
                  <button onClick={() => { setIsOpen(false); onClose && onClose(); }}><GrClose /></button>
                </Dialog.Title>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;