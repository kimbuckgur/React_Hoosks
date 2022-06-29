import React from "react";

export const useInput = (initialValue: string, validator: Function) => {
  const [value, setValue] = React.useState(initialValue);
  
  const onChange = (e: any) => {
    const { value } = e.target;
    let willUpdate = true;

    if (typeof validator === "function") {
      willUpdate = validator(value);
    }

    if (willUpdate) {
      setValue(value);
    }
  };

  return { value, onChange };
};
