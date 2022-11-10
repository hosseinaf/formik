import React from "react";
import { useField } from "formik";

const CustomSelct = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log("field", field);
  console.log("meta", meta);
  return (
    <div>
      <label>{label}</label>
      <select
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </div>
  );
};

export default CustomSelct;
