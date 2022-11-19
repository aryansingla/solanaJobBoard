import React from 'react'
import GirlImg from "../../assets/images/GirlImg.png"
const LandingPage = () => {
  return (
    <div className='flex pt-4'>
      <div className=""><h1 className='text-5xl font-bold '>Find the bug and get your bounty</h1>
<p className='w-40 '>Find You New Job Today! New Job Postings Everyday just for you, browse the job you want and apply wherever you want</p>
<div className=''><h1>Recently occured bugs:</h1>
<ul>
  <li>Bug1</li>
  <li>Bug2</li>
  <li>Bug3</li>
  </ul>
  </div>
</div>
      <div className="">
        <img src={GirlImg} alt="right-image" />
      </div>
    </div>
  )
}

export default LandingPage