import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function POA() {
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
                <Dialog.Panel className="w-full max-w-xl max-h-screen transform overflow-y-scroll rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Proof of Address
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                    POA (Proof of Address) documents containing Name & Address
<br></br>1. Passport
<br></br>2. Bank Statement/ Passbook
<br></br>3. Post Office Account Statement/ Passbook
<br></br>4. Ration Card
<br></br>5. Voter ID
<br></br>6. Driving License
<br></br>7. Government Photo ID cards/ service photo identity card issued by PSU
<br></br>8. Electricity Bill (not older than 3 months)
<br></br>9. Water Bill (not older than 3 months)
<br></br>10. Telephone Landline Bill (not older than 3 months)
<br></br>11. Property Tax Receipt (not older than 1 year)
<br></br>12. Credit Card Statement (not older than 3 months)
<br></br>13. Insurance Policy
<br></br>14. Signed Letter having Photo from Bank on letterhead
<br></br>15. Signed Letter having Photo issued by registered Company on letterhead
<br></br>16. Signed Letter having Photo issued by Recognized Educational Institution on letterhead or Photo ID having address issued by Recognized Educational Institution
<br></br>17. NREGS Job Card
<br></br>18. Arms License
<br></br>19. Pensioner Card
<br></br>20. Freedom Fighter Card
<br></br>21. Kissan Passbook
<br></br>22. CGHS/ ECHS Card
<br></br>23. Certificate of Address having photo issued by MP or MLA or MLC or Gazetted Officer or Tehsildar on UIDAI standard certificate format for enrolment/ update
<br></br>24. Certificate of Address issued by Village Panchayat head or 
<br></br>its equivalent authority (for rural areas) on UIDAI standard certificate format for enrolment/ update
<br></br>25. Income Tax Assessment Order
<br></br>26. Vehicle Registration Certificate
<br></br>27. Registered Sale/ Lease/ Rent Agreement
<br></br>28. Address Card having Photo issued by Department of Posts
<br></br>29. Caste and Domicile Certificate having Photo issued by State Govt
<br></br>30. Disability ID Card/ handicapped medical certificate issued by the respective State/ UT Governments/ Administrations
<br></br>31. Gas Connection Bill (not older than 3 months)
<br></br>32. Passport of Spouse
<br></br>33. Passport of Parents (in case of Minor)
<br></br>34. Allotment letter of accommodation issued by Central/ State Govt. (not more than 3 years old)
<br></br>35. Marriage Certificate issued by the Government, containing address
<br></br>36. Bhamashah Card/Jan-Aadhaar card issued by Govt. of Rajasthan
<br></br>37. Certificate from Superintendent/ Warden/ Matron/ Head of Institution of recognized shelter homes or orphanages etc. on UIDAI standard certificate format for enrolment/ update
<br></br>38. Certificate of Address having photo issued by Municipal Councillor on UIDAI standard certificate format for enrolment/ update
<br></br>39. Identity Card issued by recognized educational institutions
<br></br>40. SSLC book having photograph
<br></br>41. School Identity card
<br></br>42. School Leaving Certificate (SLC)/ School Transfer Certificate (TC), containing Name and Address
<br></br>43. Extract of School Records containing Name, Address and Photograph issued by Head of School
<br></br>44. Certificate of Identity containing Name, Address and Photo issued by Recognized Educational Institution signed by Head of Institute on UIDAI standard certificate format for enrolment/ update
<br></br>45. Certificate of identity containing Name, DOB and Photograph issued by Employees’ Provident Fund Organisation (EPFO) on UIDAI standard certificate format for enrolment/ update
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
