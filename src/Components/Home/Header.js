import React from 'react'
import { useRef } from 'react';
import flag from '../../assets/flag.jpg'
import {Link} from "react-router-dom"

import {useTranslation} from "react-i18next"

function Header() {
  const {t,i18next}=useTranslation();
  return (
    <>
      <div className="relative px-4 pt-16 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
        <div className="max-w-xl mx-auto lg:max-w-screen-xl">
          <div className="mb-16 lg:max-w-lg lg:mb-0">
            <div className="max-w-xl mb-6">
              {/* <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  Brand new
                </p>
              </div> */}
              <h2 className="max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight text-red-700 sm:text-5xl sm:leading-none">
                {t('getaadhar')}
                <br className="hidden md:block" />
                <br></br>
                <span className="inline-block text-amber-500">
                  {t('LoginAndBookAnAppointment')}
                </span>
              </h2>
              <p className="text-3xl text-black  md:text-2xl">
                {t('BookYourTimeSlotAsPerYouLike')}
              </p>
            </div>
            <br></br>
            <div className="flex items-center">
              <a
                href="/"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-amber-500 hover:bg-amber-700 focus:shadow-outline focus:outline-none"
              >
               <Link to= "./Login"> {t('Sign in')}</Link>
              </a>
              {/* <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-amber-700-accent hover:text-amber-800"
              >
                Learn more
              </a> */}
            </div>
          </div>
        </div>
        <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
          <img
            // src="https://kitwind.io/assets/kometa/full-browser.png"
            src= {flag}
            className="object-cover object-top w-full h-64 max-w-xl -mb-16 rounded shadow-2xl lg:ml-64 xl:ml-8 lg:-mb-24 xl:-mb-3.5 lg:h-auto lg:max-w-screen-md"
            alt=""
          />
        </div>
      </div>
    </>
  )
}

export default Header