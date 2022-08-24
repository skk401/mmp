import { Disclosure } from '@headlessui/react'

function RDocuments() {
  return (
    <div className="w-full px-4 pt-16">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-amber-100 px-4 py-2 text-left text-sm font-medium text-amber-900 hover:bg-amber-200 focus:outline-none focus-visible:ring focus-visible:ring-amber-500 focus-visible:ring-opacity-75">
                <span>What documents I need for refund changing name?</span>
                
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              Write full name without salutations/titles. Please bring the original* Proof of Identity (POI) document. (See list A below). Variation in Resident’s Name in contrast to POI is 
permissible as long as the change is minor spelling only, without altering the Name in POI document. For Example: If Resident’s POI reads “Preeti”, then “Priti” can be recorded 
if Resident wants so
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-amber-100 px-4 py-2 text-left text-sm font-medium text-amber-900 hover:bg-amber-200 focus:outline-none focus-visible:ring focus-visible:ring-amber-500 focus-visible:ring-opacity-75">
                <span>What is the procedure for DOB/ AGE?</span>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              Fill in Date of Birth in DDMMYYYY format. If exact Date of Birth is not known, approximate age in Years may be filled in the space provided. Please bring the original Proof of 
Date of Birth (DOB), if available. (See list D below). Declared checkbox may be selected if Resident does not have a valid proof of Date of Birth document. Verified checkbox is 
selected where Resident has provided documents as proof of Date of birth.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-amber-100 px-4 py-2 text-left text-sm font-medium text-amber-900 hover:bg-amber-200 focus:outline-none focus-visible:ring focus-visible:ring-amber-500 focus-visible:ring-opacity-75">
                <span>I have recently changed my address how to change it in aadhaar?</span>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              Write complete address. Please bring the original Proof of Address (POA) document. (See list B below). Please note that the Aadhaar letter will be delivered at the given 
address only.
<br></br>

            
            <br></br> To include name of Parent / Guardian / Spouse as part of the address, enter the name of person in the c/o field.
            <br></br>
            
            <br></br>  Minor Corrections / Enhancements are permissible to make the address complete without altering the base address as mentioned in POA document.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-amber-100 px-4 py-2 text-left text-sm font-medium text-amber-900 hover:bg-amber-200 focus:outline-none focus-visible:ring focus-visible:ring-amber-500 focus-visible:ring-opacity-75">
                <span>How to correct relationship status in Aadhaar?</span>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              In case of children below 5 years, it is mandatory to provide father/mother/guardian details with their Aadhaar or EID number.
<br></br><br></br>If the resident is not holding a Proof of Identity & using the Head of the Family identity for enrolment, it is mandatory to provide Head of the family’s details with his/her Aadhaar 
or EID number. Please bring the original Proof of Relationship (POR) document. For other cases, it is optional 
for the resident to fill up the relationship details.
              </Disclosure.Panel>
              
            </>
          )}

        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-amber-100 px-4 py-2 text-left text-sm font-medium text-amber-900 hover:bg-amber-200 focus:outline-none focus-visible:ring focus-visible:ring-amber-500 focus-visible:ring-opacity-75">
                <span>How to correct my document details in Aadhaar?</span>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              Write the name of Documents for POI and POA. In case proof of Date of Birth is available, then write the name of Date of Birth document. If the resident is not holding a Proof of 
Identity & using the Head of Family based enrolment, then write the name of Proof of Relationship document.
              </Disclosure.Panel>

            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-amber-100 px-4 py-2 text-left text-sm font-medium text-amber-900 hover:bg-amber-200 focus:outline-none focus-visible:ring focus-visible:ring-amber-500 focus-visible:ring-opacity-75">
                <span>How to get enrolled through Head of family?</span>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              Resident who does not have POI and POA may get enrolled through an Introducer/ Head of Family. Pl contact nearest enrolment centre or your Registrar.
              </Disclosure.Panel>
              
            </>
          )}
        </Disclosure>
        
      </div>
    </div>
  )
}
export default RDocuments;