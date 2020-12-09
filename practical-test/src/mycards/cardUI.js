import React from 'react';
import { MdEvent} from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import { GrGroup } from "react-icons/gr";


const Card1= props => {
    return(
        <div className="card text-center">
            <div className="overflow">
                <img src= {props.imgsrc}  height = "300" width ="600" alt="image1" className='card-img-top'/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title"> {props.title} </h4>
                <p className="mb-2 text-muted"><MdEvent/>  {props.date}</p>
                <p className="mb-2 text-muted"><MdAccessTime/> {props.time}</p>
                <p className="mb-2 text-muted"><GrGroup/>  {props.seat}</p>
                <h4><b>LKR  {props.price}</b></h4>

            </div>
        </div>

    );
}

export default Card1;