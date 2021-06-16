import React from 'react'


function Person({data,i }) {
 
    const { id, imgage,name,job,discription,DOB,} = data;
    return (
        <div className="person">
         <img src={imgage} alt="picture"/>
           <p>{name}</p> 
           <p> DOB : {DOB}</p>
           <p> JOB : {job}</p>
           <p className="discription"> Discription : {discription}</p>
        </div>
    )
}

export default Person
