import "./App.css";
import React, { useEffect, useState } from "react";
import Loading from "./Components/Loading/Loading.jsx";
//import Person from "./Components/Person/Person.jsx";
import { FaHeartbeat } from "react-icons/fa";
import Review from "./Components/Review/Review.jsx";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    setData([]);

    fetch(`api/v1/data`)
      .then((response) => response.json())
      .then((respAdat) => setData(respAdat))
      .catch((error) => {
        console.log("error", error);
        setData(null);
      })
      .finally(() => {
        console.log("fetch end");
        setloading(false);
      });
    return () => {
      // cleanup
    };
  }, []);

  console.log("person data=", data);

  return (
    <div className="App">
      <FaHeartbeat className="icon" />
      <h1>Review</h1>

      <div>
        { loading ? <Loading />
                  : data === null 
                      ? ( <p>Upps something happend</p> ) 
                      : (
                            <div>
                               {  data.length >0 &&  <Review data={data}  key={'9'.toString()}/> }
                            </div>
                        )
        } 
      </div>
    </div>
  );
};

export default App;
