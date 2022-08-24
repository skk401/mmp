import React from 'react'
// import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
// import { Navbar } from './Header';
import styme from '../assets/document.png'
// import img2 from '../components/uidai.png'
// import img4 from './flag.png'
// import { Footer } from '../components/Footer';
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

const Registration = () => {
    const {t,i18next}=useTranslation();
  return (
    <>
    {/* <Navbar /> */}
    <div className='grid grid-1 sm:grid-cols-2 h-screen w-700'>
    <div className='hidden sm:block'>
        {/* <img className=' w-100 h-auto object-cover ' src={img4} alt="" /> */}
        <img className=' mt-40  ml-20 w-100 h-auto object-cover ' src={styme} alt="" />
    </div>

    <div className='bg-white-100 flex flex-col justify-center'>
        <form className='max-w-[500px] w-full mx-auto '>
            <h2 className='text-4xl font-bold text-center py-5 text-slate-600'>{t('Registration Form')}</h2>
            {/* <img className="h-18 w-22 sm:h-16 ml-48 -z-10" src= {img2} alt="" /> */}
            <h3 className='text-3xl text-center font-semibold text-slate-700'>Uidai</h3>
            <div className='flex flex-col py-2'>
                <label className='ml-4 text-xl my-1 font-semibold'>Full Name</label>
                <input className='border-2 border-amber-300 ... p-2 rounded-md' type="text" placeholder='Enter your name' />
            </div>
            <div className='flex flex-col py-2'/>
                <label className='ml-4 text-xl my-1 font-semibold'>Gender</label>
                <div className='border-2 border-amber-300 ... p-2 rounded-mde'  >
                <Form.Select aria-label="Default select example">
      <option>Select your Gender</option>
      <option value="1">Male</option>
      <option value="2">Female</option>
      <option value="3">Transgender</option>
    </Form.Select>
                <div/>
            </div>
            <div className='flex flex-col py-2'>
                <label className='ml-4 text-xl my-1 font-semibold'>Date of Birth</label>
                <input className='border-2 border-amber-300 ... p-2 rounded-mde' type="Date" />
            </div>
            <div className='flex flex-col py-2'>
                <label className='ml-4 text-xl my-1 font-semibold'>Address</label>
                <input className='border-2 border-amber-300 ... p-2 rounded-mde' type="text" placeholder='Enter your full address' />
            </div>
            <div className='flex flex-col py-2'>
                <label className='ml-4 text-xl my-1 font-semibold'>Pin Code</label>
                <input className='border-2 border-amber-300 ... p-2 rounded-mde' type="text" placeholder='Enter your localiity Pin' />
            </div>
            <div className='flex flex-col py-2'>
                <label className='ml-4 text-xl my-1 font-semibold'>State</label>
                <input className='border-2 border-amber-300 ... p-2 rounded-mde' type="text" placeholder='Enter your State'/>
            </div>
            <div className='flex flex-col py-2'>
                <label className='ml-4 text-xl my-1 font-semibold'>Mobile number</label>
                <input className='border-2 border-amber-300 ... p-2 rounded-mde' type="text" placeholder='Enter your Mobile Number' />
            </div>
            <div className='flex flex-col py-2'>
                <label className='ml-4 text-xl my-1 font-semibold'>E-mail</label>
                <input className='border-2 border-amber-300 ... p-2 rounded-mde' type="text" placeholder='Enter your E-mail' />
            </div>
            <div className='flex flex-col py-2'>
                <label className='ml-4 text-xl my-1 font-semibold'>Old Aadhar number (if exist)</label>
                <input className='border-2 border-amber-300 ... p-2 rounded-mde' type="text" placeholder='Enter your aadhar number' />
            </div>
            <div className='flex flex-col py-2'>
                <label for='file' className='ml-4 text-xl my-1 font-semibold'>Choose a file</label>
                <input className='border-2 border-amber-300 ... p-2 rounded-mde' type="file" />
            </div>
            <button className='border w-full my-5 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xl'>
            <Link to="./Booking">Sign In</Link>
            </button>
            <div className='flex justify-between'>
                <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                <p>Create an account</p>
            </div>
        </form>
    </div>
</div>
</>
  )
}

export default Registration
