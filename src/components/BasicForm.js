import { useFormik } from "formik";

const BasicForm = () => {
  const { values, handleChange, handleBluer } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
  });

  console.log(values);

  return (
    <form autoComplete="off">
      <label htmlFor="email">Email</label>
      <input
        value={values.email}
        onChange={handleChange}
        onBlur={handleBluer}
        id="email"
        type="email"
        placeholder="Enter your email"
      />
      <label htmlFor="age">Age</label>
      <input
        value={values.age}
        onChange={handleChange}
        onBlur={handleBluer}
        id="age"
        type="number"
        placeholder="Enter your age"
      />

      <label htmlFor="password">Password</label>
      <input
        value={values.password}
        onChange={handleChange}
        id="password"
        type="password"
        placeholder="Enter your password"
      />
      <label htmlFor="ConfirmPassword">Confirm Password</label>
      <input
        value={values.confirmPassword}
        onChange={handleChange}
        id="confirmPassword"
        type="password"
        placeholder="Confirm Password"
      />
      <button>Submit </button>
    </form>
  );
};
export default BasicForm;
