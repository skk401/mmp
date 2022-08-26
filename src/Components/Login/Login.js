import { t } from 'i18next';
import React from 'react'
import { useState } from 'react';

import {useTranslation} from "react-i18next"
import { Link , useNavigate } from 'react-router-dom';
import axios from "axios";
function LoginComponent() {

    const {t,i18next}=useTranslation();
    const navigate = useNavigate();
    const [data, setData] = useState({
          email: "",
          password: ""
      });
    const handleChange = ({ currentTarget: input }) => {
          setData({ ...data, [input.name]: input.value });
      };

      const onFinish = async (e) => {
        try {
       //   dispatch(showLoading());
       e.preventDefault();
       console.log({data});   
       const response = await axios.post("http://localhost:5000/api/user/login", data);
    
         // dispatch(hideLoading());
          if (response.data.success) {
          alert(response.data.message);
            navigate("/Login/UserDashboard");
          } else {
           alert(response.data.message);
          }
        } catch (error) {
         // dispatch(hideLoading());
        alert("Something went wrong");
        }
      };
    

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
                        <form onSubmit={(e)=>onFinish(e)}>
                            <div>
                                <label for="email" className="block mb-2 text-sm text-gray-600 ">{t('Email Address')}</label>
                                <input type="email" name="email" id="email" placeholder="" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   focus:border-amber-500  focus:ring-amber-500 focus:outline-none focus:ring focus:ring-opacity-40 required" 
                                onChange={handleChange}/>
                            </div>

                            <div className="mt-6">
                                <div className="flex justify-between mb-2">
                                    <label for="password" className="text-sm text-gray-600">{t('Password')}</label>
                                    <a href="#" className="text-sm text-gray-400 focus:text-amber-600 hover:text-amber-600 hover:underline">{t('Forgot password?')}</a>
                                </div>

                                <input type="password" name="password" id="password" placeholder="" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-amber-500  focus:ring-amber-500 focus:outline-none focus:ring focus:ring-opacity-40 required" 
                                onChange={handleChange}/>
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