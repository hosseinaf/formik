
import BasicForm from "./components/BasicForm";
import AdvancedForm from "./components/AdvancedForm";
import {useState} from "react";
import "./App.css";

function App() {
 const[view,setView]=useState("basic");
  return (
    <div className="App">
   <nav>
     <h3 
     onClick={()=>setView("basic")}
     style={{ color: view === "basic" ? "#fff" : "" }}
     >
       basic
       </h3>
     <h3 onClick={()=>setView("advanced")}
     style={{color:view==="advanced"?"#fff":""}}
     >
       advanced
       </h3>
   </nav>
    {view==="basic"?<BasicForm/>:<AdvancedForm/>}
    </div>
  );
}

export default App;
