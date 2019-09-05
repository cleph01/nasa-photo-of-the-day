import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import PhotoCard  from "./components/Photocard.js";



export function App() {

    const [data, setData] = useState([]);

    useEffect( () => {

      // https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY

      // https://henry-mock-nasa-api.herokuapp.com/api

      axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then( response => {
        console.log(response.data);

        setData(response.data);

      });

    }, []);

    
    
    
  return (

    // console.log(data)

    <div className="App">
  
      <p>
        
          Read through the instructions in the README.md file to build your NASA
          app! Have fun 🚀! 
      
      </p>

      {
      
    
          <PhotoCard  title={data.title}
                  url={data.url}
                  explanation={data.explanation} 
                  date={data.date} />
        
      }
      
    </div>
  );
}

export default App;
