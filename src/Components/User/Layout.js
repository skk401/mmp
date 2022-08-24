import POI from "./Dialog/POI";
import POA from "./Dialog/POA";
import RDocuments from "./RDocuments";
import POR from "./Dialog/POR";
import DOB from "./Dialog/DOB";
export const Layout = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                               <span className="relative text-amber-500">Choose</span>
              </span>{' '}
              an option.
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
            Choose weather to update your an aadhar or to issue a new aadhar for you or your family.
            </p>
          </div>
        </div>
        <div className="max-w-screen-xl sm:mx-auto">
          <div className="grid grid-cols-1 gap-16 row-gap-8 md:grid-cols-2">
            <div className="space-y-8">
                <h2 className="text-amber-500 text-2xl text-center font-sans font-bold tracking-light">New</h2>
                 
                 <div className="border-2 rounded shadow-md px-4 border-amber-400">
                    <p className="text-lg font-md font-semibold text-gray-700 mt-6 mx-20">These are the documents you'll need</p>
                   
                    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex relative pt-10 pb-5 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-amber-500 text-white relative z-10 title-font font-medium text-sm">1</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">

        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Proof of Identification<POI/></h2>
        </div>
      </div>
    </div>
    <div class="flex relative pb-5 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-amber-500 text-white relative z-10 title-font font-medium text-sm">2</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Proof Of Address <POA/></h2>
        </div>
      </div>
    </div>
    <div class="flex relative pb-5 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-amber-500 text-white relative z-10 title-font font-medium text-sm">3</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Proof Of Relationship <POR/></h2>
        </div>
      </div>
    </div>
    <div class="flex relative pb-5 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-amber-500 text-white relative z-10 title-font font-medium text-sm">4</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Date Of Birth <DOB/></h2>
          
        </div>
      </div>
    </div>
  </div>
</section>

                 </div>
            </div>
            <div className="space-y-8">
            <h2 className="text-amber-500 text-2xl text-center font-sans font-bold tracking-light">Update</h2>
                 
                 <div className="border-2 rounded shadow-md px-4 border-amber-400 pb-10">
                    <p className="text-lg font-md font-semibold text-gray-700 mt-6 mx-10">You can only change your Name, DOB/Age, Address, Relationship, Documents, Introducer/HOF details only.</p>
                   <RDocuments/>
                 </div>
            </div>
          </div>
        </div>
      </div>
    );
  };