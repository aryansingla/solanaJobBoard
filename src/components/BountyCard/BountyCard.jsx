import React from 'react'

const BountyCard = ({name,img,heading,text}) => {
  return (
    <div className='bountyCard'>
        <h5>{name}</h5>
        <div className="details" style={{display:"flex"}}>
        <img src={img} alt="" className='bountyLogo' style={{width:"120px"}}/>
        <h4>{heading}</h4>
        </div> 
        <p>{text}</p>
    </div>
  )
}

export default BountyCard