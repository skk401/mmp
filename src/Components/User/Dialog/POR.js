import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function POR() {
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
                    Proof of Relationship.
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                    POR (Proof of Relationship) documents containing
Name of applicant and Name of HoF (Head of Family)
<br></br>1. PDS Card
<br></br>2. MNREGA Job Card
<br></br>3. CGHS/ State Government/ ECHS/ ESIC Medical card
<br></br>4. Pension Card
<br></br>5. Army Canteen Card
<br></br>6. Passport
<br></br>7. Birth Certificate issued by Registrar of Birth, Municipal Corporation and other notified local government bodies like Taluk, Tehsil etc.
<br></br>8. Any other Central/ State government issued family entitlement document
<br></br>9. Marriage Certificate issued by the government
<br></br>10. Address card having name and photo issued by Department of Posts
<br></br>11. Bhamashah Card/Jan-Aadhaar card issued by Govt. of Rajasthan
<br></br>12. Discharge card/ slip issued by Government hospitals for birth of a child
<br></br>13. Certificate of Identity having photo issued by MP or MLA or MLC or Municipal Councillor or Gazetted Officer on UIDAI standard certificate format for enrolment/update
<br></br>14. Certificate of Identity having photo and relationship with 
HoF issued by Village Panchayat Head or Mukhiya or its 
equivalent authority (for rural areas) on UIDAI standard 
certificate format for enrolment/ update
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
