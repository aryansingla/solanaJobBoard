import React from 'react'

const BountyCard = ({name,img,heading,text}) => {
  return (
    <div className='bountyCard'>
        <div className="details" style={{display:"flex" , justifyContent:"space-between"}}>
        <h5>{name}</h5>
        <button style={{width:"80px",height:"30px",marginTop:"50px",backgroundColor:"#4128ad",borderStyle:"none",borderRadius:"8px",color:"white"}}>Get details</button>
        </div>
        <div className="details" style={{display:"flex"}}>
        <img src={img} alt="" className='bountyLogo' style={{width:"120px"}}/>
        <h4>{heading}</h4>
        <h4>{heading}</h4>
        </div> 
        <p>{text}</p>
    </div>
  )
}

export default BountyCard