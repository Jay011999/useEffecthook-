import "./App.css";
import  React from "react";

function App() {  
   const [toggle,setToggle]=React.useState(false);

   const clickHandler =()=>{
      setToggle(!toggle);
   }   
   React.useEffect(()=>{
      document.title= toggle ? "Welcome to turf website" :"Using the useEffect hook"
   },[toggle]);
   return (
      <div>
         <h1>Using the UseEffcetHook:</h1>
         <button onClick={clickHandler}>
            Toggle message!!
         </button>
         {toggle && <h2>Welcome to turf website</h2>}
      </div>
   );
}

export default App;
