import { t } from 'i18next';
import React from 'react'
import { useState } from 'react';

import {useTranslation} from "react-i18next"

function LoginComponent() {

    const {t,i18next}=useTranslation();
    
    // Email 
    const [email, setemail] = useState("");
    // Password
    const [pass, setPass] = useState("");


  return (
    <>
                
<div className="bg-white ">
        <div className="flex justify-center h-screen">
            <div className="hidden bg-cover lg:block lg:w-2/3 bg-[url('./assets/Login.png')] bg-white">
                <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-0">
                    <div>   
                        <h2 className="text-4xl font-bold text-black shadow-black">{t('uidai')}</h2>
                        
                        {/* <p className="max-w-xl mt-3 text-black shadow-black">Book an operator to Verify or Update your Aadhar.</p> */}
                    </div>
                </div>
            </div>
            
            <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                <div className="flex-1">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-center text-gray-700 ">{t('uidai')}</h2>
                        
                        <p className="mt-3 text-gray-500">{t('Sign in to access your account')}</p>
                    </div>

                    <div className="mt-8">
                        <form onSubmit="#">
                            <div>
                                <label for="email" className="block mb-2 text-sm text-gray-600 ">{t('Email Address')}</label>
                                <input type="email" name="email" id="email" placeholder="example@example.com" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   focus:border-amber-500  focus:ring-amber-500 focus:outline-none focus:ring focus:ring-opacity-40 required" 
                                onChange={(e) => setemail(e.target.value)}/>
                            </div>

                            <div className="mt-6">
                                <div className="flex justify-between mb-2">
                                    <label for="password" className="text-sm text-gray-600">{t('Password')}</label>
                                    <a href="#" className="text-sm text-gray-400 focus:text-amber-600 hover:text-amber-600 hover:underline">Forgot password?</a>
                                </div>

                                <input type="password" name="password" id="password" placeholder="Your Password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-amber-500  focus:ring-amber-500 focus:outline-none focus:ring focus:ring-opacity-40 required" 
                                onChange={(e) => setPass(e.target.value)}/>
                            </div>

                            <div className="mt-6">
                                <button
                                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-amber-600 rounded-md hover:bg-amber-500 focus:outline-none focus:bg-amber-500 focus:ring focus:ring-amber-400 focus:ring-opacity-50"
                                    type="submit"
                                    >
                                    {t('Sign in')}
                                </button>
                            </div>

                        </form>

                        <p className="mt-6 text-sm text-center text-gray-400">{t('Dont have an account yet')} <a href="/SignUp" className="text-amber-600 focus:outline-none focus:underline hover:underline">Sign up</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default LoginComponent