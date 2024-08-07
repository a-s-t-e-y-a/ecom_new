import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { RiCloseLine } from "react-icons/ri";
import useGetAllWhishlist from "@/utils/queries/useGetAllWhishlist";
import WhishlistSingleItem from "../whishlistSIngleItem";
import api from "@/api";
import useDeleteWhishlist from "@/utils/mutations/useDeleteWhishlist";

const WishlistDialog = (props) => {
  const { open, setOpen } = props;
  const [reset, setReset] = useState(false)
  const { data, isLoading, refetch,  } = useGetAllWhishlist();
  const {mutate} = useDeleteWhishlist(refetch)
  useEffect(()=>{
    refetch()
  }, [refetch, reset])

  const removeItem = (id) =>{
    console.log(id);
    mutate(id)
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md overflow-y-auto scrollbar-hide">
                  <div className="flex h-full flex-col overflow-y-auto scrollbar-hide bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Favourite Items
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500 border-none outline-none focus:ring-0"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <RiCloseLine
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </div>
                      {data?.map((info) => (
                        <WhishlistSingleItem key={info.p_id} item={info.pId} info={info} removeItem={removeItem}/>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default WishlistDialog;
