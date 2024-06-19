
//     Search Functionality: Users can search for the weather in any city or location by entering
//     the name in a search bar.
 import './style.css';

 import React from "react";

 const Home = () => { 
     return (<div id="input-container" >
           <h1>Welcome to Weather Forecast.</h1>  
           <label type = "text" for ="city" id = "city-label">
            Enter the city's name
           </label>
           <input id = "city" placeholder="city's name">
                {/*  */}
           </input>
           <button id='submit'>
               Submit
           </button> 
           <h2>
            {/* here the information will be fetched */}
            
           </h2>
     </div>
     
         )
 }

 export default Home;