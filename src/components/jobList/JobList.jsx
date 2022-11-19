import React from 'react'
import bg1 from "../../assets/images/Group30.png";
import "./joblist.css";
import {AiOutlineSearch} from "react-icons/ai"
import BountyList from '../BountyList/BountyList';
const JobList = ({bgImage}) => {
  return (
    <div className='jobApp'>    
        <div className='jobApp__header' style={{backgroundImage:`url(${bg1})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',height:"300px",}}>
            <div className="header_title">Top Bounty Board for DAOS</div>
            <div className="header_desc">Discover your next career move with over 15 000 opening vacancies, customer support, sowtware, design anywhere in the world or remotely.</div>
    </div>
    <div className="jobList">
        <div className="jobleft">
            <h5>Filters</h5>
            <div className="checkboxList">
            <input type="checkbox" />
            <p>All Bounties</p>
            </div>
            <div className="checkboxList">
            <input type="checkbox" />
            <p>Most Relevant</p>
            </div>
            <div className="checkboxList">
            <input type="checkbox" />
            <p>Recommended</p>
            </div>
            <div className="checkboxList">
            <input type="checkbox" />
            <p>Most Recent</p>
            </div>
            <h5>Location</h5>
                <select name="cars" id="cars">
                    <option value="volvo">India</option>
                    <option value="saab">USA</option>
                    <option value="mercedes">Ireland</option>
                    <option value="audi">Australia</option>
                </select>
                <h5>Type of Work</h5>
                <select name="cars" id="cars">
                    <option value="volvo">Technical</option>
                    <option value="saab">Non-Technical</option>
                </select>

        </div>
        <div className="jobmiddle">
            <div className="searchBar" style={{display:"flex",justifyContent:"space-evenly"}}>
            <AiOutlineSearch style={{height:"100px"}}/>
            <input type="text"
                    placeholder=" Search Courses"
                    name="search" style={{width:"80%",borderRadius:"10px",height:"30px",marginTop:"4%"}}/>
                   
            </div>
            <BountyList/> 
        </div>
        <div className="jobright">
            <h5>Foolwing are the instructions for getting rewrad:</h5>
            <p>You have to pay 50$ to work for any bounty.</p>
            <p>This amount will get locked until you solve the bug. </p>
            <p>Once you are done submit your request for review.</p>
            <p>If all test cases pass , you will recieve your award in solana wallet.</p>

        </div>
    </div>
    </div>
  )
}

export default JobList