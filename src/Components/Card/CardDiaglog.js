import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function CardDiaglog({Time}) {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  function HandleClick(e) {
    e.preventDefault();
  }
  return (
    <>
      <span className="flex-grow sm:pl-6 mt-6 sm:mt-0">
        <button
          type="button"
          onClick={openModal}
          className="flex-shrink-0 mt-4 bg-amber-600 hover:bg-amber-700 border-amber-600 hover:border-amber-700 text-sm border-4 text-white py-1 px-2 rounded"
        >
        Book Now!
        </button>
      </span>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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

          <div className="fixed inset-0 ">
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
                <Dialog.Panel className="w-full max-w-xl max-h-screen transform  rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Time Slots available :
                  </Dialog.Title>
                  {Time &&  Time.map((t)=><button className='flex-shrink-0 mt-4 mx-2 bg-none hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-sm border-4 text-amber-500 hover:text-white py-1 px-2 rounded' onClick={(e)=>HandleClick(e)}>{t}</button>)}
                  
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-amber-100 px-4 py-2 text-sm font-medium text-amber-900 hover:bg-amber-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                    Close 
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}