const AdvancedForm = () => {
  return (
    <form autoComplete="off">
      <label htmlFor="username">Username</label>
      <input id="username" type="text" placeholder="Enter your username" />

      <label htmlFor="username">Job Type</label>
      <select id="country" name="Job Type">
        <option value="">Please select a job type</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Product Manager</option>
            <option value="other">Other</option>
      </select>

      <div className="rule">
        {/* <label></label> */}
        <input className="check" type="checkbox" />
        <span className="accept">I accept the term of service</span>
  
        
      </div>

      <button>Submit</button>
    </form>
  );
};
export default AdvancedForm;
