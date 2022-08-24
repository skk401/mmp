import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function DOB() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <span className="flex-grow sm:pl-6 mt-6 sm:mt-0">
        <button
          type="button"
          onClick={openModal}
          className="rounded-full border-2 border-amber-400 bg-opacity-0 px-1 py-1 text-sm font-medium text-white   focus-visible:ring-2 focus-visible:ring-amber-400 hover:ring-amber-400 hover:bg-amber-400"
        >
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAABmJLR0QA/wD/AP+gvaeTAAAAbklEQVQokaXOwQ2CUBCE4S9BONiC0A51eTHBGujCRM70wIEKsA4vq4cXn3mEP5nL7MzucpAGd7ywYQgvy4An2tAUXpYtgh+68L6cksLlx5L634V02YRbaWHEA1VJuMeCczrItVvMWEvf2c01dJw3ao4OKxTZipIAAAAASUVORK5CYII="></img>
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
                    Proof of Address
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                    DOB (Date of Birth) documents containing Name and DOB
<br></br>1. Birth Certificate
<br></br>2. SSLC Book/ Certificate
<br></br>3. Passport
<br></br>4. Certificate of Date of Birth issued by Group A Gazetted 
<br></br>Officer on UIDAI standard certificate format for enrolment/ update
<br></br>5. A certificate (on UIDAI standard certificate format for enrolment/ update) or ID Card having photo and Date of Birth (DOB) duly signed and issued by a Government authority
<br></br>6. Photo ID card having Date of Birth, issued by Recognized Educational Institution
<br></br>7. PAN Card
<br></br>8. Marksheet issued by any Government Board or University
<br></br>9. Government Photo ID Card/ Photo Identity Card issued by PSU containing DOB
<br></br>10. Central/ State Pension Payment Order 
<br></br>11. Central Government Health Service Scheme Photo Card or Ex-Servicemen Contributory Health Scheme Photo card
<br></br>12. School Leaving Certificate (SLC)/ School Transfer Certificate (TC), containing Name and Date of Birth
<br></br>13. Extract of School Records issued by Head of School containing Name, Date of Birth and Photograph
<br></br>14. Certificate of Identity containing Name, DOB and Photo issued by Recognized Educational Institution signed by Head of Institute on UIDAI standard certificate format for enrolment/ update
<br></br>15. Certificate of identity containing Name, DOB and 
Photograph issued by Employees’ Provident Fund 
Organisation (EPFO) on UIDAI standard certificate format 
for enrolment/ update
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-amber-100 px-4 py-2 text-sm font-medium text-amber-900 hover:bg-amber-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
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