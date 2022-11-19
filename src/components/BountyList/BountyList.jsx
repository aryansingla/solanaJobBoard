import React from 'react'
import { list } from "../../data.js";
import BountyCard from '../BountyCard/BountyCard.jsx';
const BountyList = () => {
  return (
    <div className='bountyList'>
        {list.map((item) => (
          <BountyCard
            key={item.id}
            img={item.img}
            name={item.name}
            heading={item.heading}
            text={item.text}
          /> 
        ))} 
    </div>
  )
}

export default BountyList