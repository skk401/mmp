import React, { useState } from "react";
import uidai from "../assets/uidai.png"
import {Link} from "react-router-dom";

import i18next from "../i18n"
import {useTranslation} from "react-i18next"

const changeLanguage = (ln)=>{
  return ()=>{
    i18next.changeLanguage(ln)
    console.log('lanuage ch to ${ln}');
  };
};

export const Navbar = ({headerRef, statsRef , pricingRef}) => {

  const {t,i18next}=useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const goRef = () =>{
    pricingRef.current.scrollIntoView({behavior : "smooth" , block:"end"})
    console.log(pricingRef);
  }
  return (
    <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div class="relative flex items-center justify-between">
        <div class="flex items-center">
          <a
            href="/"
            aria-label="Company"
            title="Company"
            class="inline-flex items-center mr-8"
          >
          <img className="h-14 w-18 sm:h-12" src= {uidai} alt="" />
            <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              {t('AADHAAR')}
            </span>
          </a>
          <ul class="flex items-center hidden space-x-8 lg:flex">
            <li>
              <a
                href="./"
                aria-label="Our product"
                title="Our product"
                class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-amber-600"
              >
               <Link to="/">{t('HOME')}</Link>
              </a>
            </li>
            <li>
              <a
                href="/"
                aria-label="Our product"
                title="Our product"
                class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-amber-600"
              >
               <Link to="./Feature">{t('Features')}</Link>
              </a>
            </li>
            <li>
              <a
                class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-amber-600"
                onClick={() => {goRef()}}
              >
                {t('Pricing')}
              </a>
            </li>
            <li>
              <a
                href="/Footer"
                aria-label="About us"
                title="About us"
                class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-amber-600"
              >
                {t('Contact Us')}
              </a>
            </li>


            <div>
                    <button class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-amber-600" onClick={changeLanguage('en')}>{t('English')}</button>
                    <span>/</span>
                    <button class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-amber-600" onClick={changeLanguage('hi')}>{t('Hindi')}</button>
            </div>
          
          </ul>
          
        </div>
        <ul class="flex items-center hidden space-x-8 lg:flex">
          <li>
            <a
              href="/"
              aria-label="Sign in"
              title="Sign in"
              class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-amber-600"
            >
             <Link to="/Signup">{t('Sign in')}</Link>
            </a>
          </li>
          <li>
            <a
              href="/"
              class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-amber-600 hover:bg-amber-800 focus:shadow-outline focus:outline-none"
              aria-label="Sign up"
              title="Sign up"
            >
            <Link to="/Registration">{t('Registration')}</Link> 
            </a>
          </li>
        </ul>
        <div class="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div class="absolute top-0 left-0 w-full z-10">
              <div class="p-5 bg-white border rounded shadow-sm">
                <div class="flex items-center justify-between mb-4">
                  <div>
                    <a
                      href="/"
                      aria-label="Company"
                      title="AADHAR"
                      class="inline-flex items-center"
                    >
                        
                     <img className="h-10 w-10 sm:h-10" src= {uidai} alt="" />
                      <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        {t('AADHAR')}
                      </span>
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul class="space-y-4">
                    <li>
                      <a
                        href="/"
                        aria-label="Home"
                        title="Home"
                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-amber-600"
                      >
                        <Link to="/">{t('HOME')}</Link>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="Features"
                        title="Features"
                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-amber-600"
                      >
                        {t('Features')}
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="Pricing"
                        title="Pricing"
                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-amber-600"
                      >
                        {t('Pricing')}
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="Contact us"
                        title="Contact us"
                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-amber-600"
                      >
                        {t('Contact us')}
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="Sign in"
                        title="Sign in"
                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-amber-600"
                      >
                         <Link to="/Signup">{t('Sign in')}</Link>
                      </a>
                    </li>
                
                    <div>
                    <button class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-amber-600" onClick={changeLanguage('en')}>{t('English')}</button>
                    <span>/</span>
                    <button class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-amber-600" onClick={changeLanguage('hi')}>{t('Hindi')}</button>
                    </div>


                    <li>
                      <a
                        href="/"
                        class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-amber-600 hover:bg-yellow-900 focus:shadow-outline focus:outline-none"
                        aria-label="Sign up"
                        title="Sign up"
                      >
                        {t('Sign up')}
                      </a>
                    </li>
                    
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};