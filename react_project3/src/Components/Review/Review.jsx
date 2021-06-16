import React, { useState,useEffect} from "react";
import { FaHeartbeat, FaChevronLeft,  FaChevronRight } from "react-icons/fa";
                                     
function Review({ data }) {




  const [index, setIndex] = useState(0);

  console.log( 'review=',data,data.length,' index=',index);
  if ( data.length === 0)
    return ''
    
  const { name, job, img, discription, DOB } = data[index]; // index change => people will change

const checkNumber = (number)=>{                                 //number =if the number is bigger than the last item index-e akkor olyan indexu item mar nincs
    if(number > data.length-1){                                     // array length 5 akkor a legmagasabb index 4 
                                                                    //data.length -1 = legmagassabb index
                                                                    
        return 0;      //tehat az elso item mert annak az indexe 0
    }
    if (number<0){          // olyan indexu nincs adja vissza az utolso itemet (data.length -1)
            return(data.length -1)
    }
    return (number)  // ha egyik sem igaz a fentiek kozul return teh number
}


const nextPerson = ()=>{
    setIndex((index)=>{
        let newIndex = index +1;
        return checkNumber(newIndex)            //check the number than get teh new index (prev or next ..)
    })
}
const prevPerson = ()=>{
    setIndex((index)=>{
        let newIndex = index -1
        return checkNumber(newIndex)
    })
}

const randomPerson =()=>{
    let randomNumber =Math.floor (Math.random() * data.length)
    console.log('randomNumber',randomNumber)
    if (randomNumber === index){
        randomNumber = index + 1 //hogy elkeruljuk az ismetlest egymas utani kattintas soha ne adjon ugyan azt
    }
    setIndex(checkNumber(randomNumber))     //avoid repetition and check the number(fg) shouldnt be less than 0 or bigger than  my higest index
} 
if (document.getElementById('divimg') !== null){
document.getElementById('divimg').style.backgroundImage= `url('${img}')`;
//console.log('change imgfiv');
}

  return (
    <div className="review">
     {/*  <img src={img} alt={name} /> */}
      <div id="divimg" className="img"></div>
      <h4>{name}</h4>
      <p> DOB : {DOB}</p>
      <p> JOB : {job}</p>
      <p className="discription"> Discription : {discription}</p>
      <div className="btn_container">
        <button className="prev_btn" onClick={prevPerson}>
          Left Arrow 
    
            <FaChevronLeft /> 
        </button>
        <button className="next_btn" onClick={nextPerson}>
           <FaChevronRight /> 
          Right Arrow
        </button>
        <div className="surprise_btn">
          <button onClick={randomPerson}>Surprise Me</button>
        </div>
      </div>
    </div>
  );
}

export default Review;
