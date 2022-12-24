import React, { useState } from 'react';
import { Cookies, useCookies } from 'react-cookie';

const Test = () => {
   const [name, setName] = useState('');
   const [pwd, setPwd] = useState('');
   const [cookies, setCookie,removeCookie] = useCookies(["All"]);

   const handle = () => {
    // setCookie()
      setCookie('Name', name, { path: '/' });
      setCookie('Password', pwd, { path: '/' });
   };
   
   console.log('cookies',cookies["Name"])
   console.log('cookies',cookies["Password"])

   const delet= ()=>{
    removeCookie("Name")
   }
   return (
      <div className="App">
        <button onClick={delet}>Delete</button>
      <h1>Name of the user:</h1>
      <input
         placeholder="name"
         value={name}
         onChange={(e) => setName(e.target.value)}
      />
      <h1>Password of the user:</h1>
      <input
         type="password"
         placeholder="name"
         value={pwd}
         onChange={(e) => setPwd(e.target.value)}
      />
      <div>
         <button onClick={handle}>Set Cookie</button>
      </div>
   </div>
   );
};

export default Test;