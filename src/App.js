import Home from "./component/screens/home";
import { Routes, Route } from "react-router-dom";
import SignUp from "./component/screens/signUp";
import { useEffect, useState } from "react";


function App () {
 
  const [ user, setUser ] = useState( {} )
  
  useEffect( () => {
   console.log(user) 
  },[user])
    
  return (
    <Routes>
      <Route path='/' element={
        <div className="flex flex-col w-[100vw] h-[100vh]">
          <SignUp setUser={ setUser } />
          
        </div>
      } />
      <Route path='/home' element={
        <div className="flex flex-col w-[100vw] h-[100vh]">
          <Home loggedUser={user} setUser={setUser} />
        </div>
      } />
    </Routes>
  );
}

export default App;
