import React from "react";

export const Button = ({ children, className = "", ...props }) => (
  <button className={`px-4 py-2 rounded ${className}`} {...props}>
    {children}
  </button>
);

export default Button;