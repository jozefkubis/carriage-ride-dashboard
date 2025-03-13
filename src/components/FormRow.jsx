import React from "react";

const FormRow = ({ label, error, children }) => {
  return (
    <div className="grid grid-cols-[2fr_3fr_2fr] items-center gap-6 border-b py-3 last:border-b-0">
      {label && (
        <label htmlFor={children.props.id} className="font-medium">
          {label}
        </label>
      )}
      {children}
      {error && <span className="text-sm text-red-700">{error}</span>}
    </div>
  );
};

export default FormRow;
