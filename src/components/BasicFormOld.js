import { useState } from "react";

const BasicForm = () => {
  const[email,setEmail]=useState(""); 


  function  handleChange(event){
    setEmail(event.target.value);
  }
  console.log({email})
  return (
    <form autoComplete="off">
      <label htmlFor="email">Email</label>
      <input value={email} onChange={handleChange} id="email" type="email" placeholder="Enter your email" />
      <label htmlFor="email">Age</label>
      <input id="email" type="email" placeholder="Enter your age" />
      <label htmlFor="email">Password</label>
      <input id="email" type="email" placeholder="Enter your password" />
      <label htmlFor="email">Confirm Password</label>
      <input id="email" type="email" placeholder="Confirm Password" />
      <button>Submit</button>
      
    </form>
  );
};
export default BasicForm;
