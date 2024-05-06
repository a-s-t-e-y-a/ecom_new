import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const Modal = ({ children, isOpen, closeModal, fullWidth = false }) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as="div"
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        ></Transition.Child>

        <div className="fixed  flex items-center justify-center inset-0 overflow-y-auto scrollbar-hide ">
          <Transition.Child
            as="div"
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            className={`${fullWidth ? "w-full h-full" : ""}`}
          >
            <Dialog.Panel
              className={`w-full transform overflow-hidden rounded-lg bg-white ${
                fullWidth ? "" : "p-2"
              } text-left align-middle transition-all`}
            >
              {children}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
