import React, { useEffect, useState } from 'react';

const Syntax = () => {
  const [checkBoxValue, setCheckBoxValue] = useState(false);
  useEffect(() => {
    console.log("in useEffect");
    return () => {
      console.log('in useEffect cleanup');
    }
  }, [checkBoxValue]);

  return (
    <div onClick={() => {
      setCheckBoxValue(!checkBoxValue);
    }}>
      Click me
    </div>
  );
};

export default Syntax;