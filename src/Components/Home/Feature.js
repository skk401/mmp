import img2 from '../../assets/booking.png'
import img3 from '../../assets/approval.png'
import img4 from '../../assets/location.png'
import img5 from '../../assets/back-in-time.png'
import flag from '../../assets/flag.jpg'
import {useTranslation} from "react-i18next"
export const Feature = () => {
  const {t,i18next}=useTranslation();
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">{t('The')}</span>
            </span>{' '}
            {t('Services')}
          </h2>
          {/* <p className="text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p> */}
        </div>
        <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-0">
                {/* <svg
                  className="w-12 h-12 text-amber-700"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg> */}
                <img src={img2} />
              </div>
              <h6 className="mb-2 font-semibold leading-5">{t('Slot Booking')}</h6>
              <p className="mb-3 text-sm text-gray-900">
              {t('You have to just Book an online time and date slot as per your convenience')}
              </p>
            </div>
            <a
              href="/" 
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-amber-700 hover:text-deep-purple-800"
            >
              {t('Learn more')}
            </a>
          </div>
          <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
               <img src= {img3}/>
              </div>
              <h6 className="mb-2 font-semibold leading-5">{t('Document Verification')} </h6>
              <p className="mb-3 text-sm text-gray-900">
              {t('The operator will come home and verify all the details and confirm your AADHAR updates')}
              </p>
            </div>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-amber-700 hover:text-deep-purple-800"
            >
              {t('Learn more')}
            </a>
          </div>
          <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
               <img src={img4} />
              </div>
              <h6 className="mb-2 font-semibold leading-5">{t('Location')}</h6>
              <p className="mb-3 text-sm text-gray-900">
                {t('You can choose you location as per your convenience')}
              </p>
            </div>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-amber-700 hover:text-deep-purple-800"
            >
              {t('Learn more')}
            </a>
          </div>
          <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <img src={img5} />
              </div>
              <h6 className="mb-2 font-semibold leading-5">{t('Set Timing')}</h6>
              <p className="mb-3 text-sm text-gray-900">
               {t('You can pick your time for the operator to come.')}
              </p>
            </div>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-amber-700 hover:text-deep-purple-800"
            >
              {t('Learn more')}
            </a>
          </div>
        </div>
      </div>
    );
  };