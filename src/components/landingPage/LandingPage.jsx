import React from 'react'
import { FaSearch } from "react-icons/fa";
import GirlImg from "../../assets/images/GirlImg.png"
const LandingPage = () => {
  return (
    <div className='bg-[#E0B0FF]'>
    <div className='flex justify-between pt-4 ml-16'>
      <div className=""><h1 className='text-6xl font-bold '>Find the bug and get  <p className='text-[#EF5DA8]'>
      your bounty</p></h1>
<p className='pt-8 w-80 text-[#4F4F4F]'>Find You New Job Today! New Job Postings Everyday just for you, browse the job you want and apply wherever you want</p>
<div className='mt-4 '><h1 className='text-2xl font-semibold'>Recently occured bugs:</h1>
<ul className='flex mt-4 list-none'>
  <li className='font-semibold mr-36 text-[#EF5DA8] '>Bug1</li>
  <li className='font-semibold mr-36 text-[#EF5DA8]'>Bug2</li>
  <li className='font-semibold mr-36 text-[#EF5DA8]'>Bug3</li>
  </ul>
  </div>
  <div className='flex p-2 mt-3 bg-white rounded-full'><div className='mx-4 mt-1'><FaSearch/></div><p className='font-semibold'>Search For Bugs</p></div>
</div>
      <div style={{width:"40%"}} className='flex justify-end' >
        <img src={GirlImg} alt="right-image" />
      </div>
    </div>
    </div>
  )
}

export default LandingPage