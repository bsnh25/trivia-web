import React, { useEffect } from "react";

const UnusedPage = () => {
  const ExpensiveFn = () => {
    for (let i = 0; i < 1000000; i++) {
      console.log(i);
    }

    useEffect(() => {
      ExpensiveFn();
    }, []);
  };
  return (
    <>
      <h2>Somethings</h2>
    </>
  );
};

export default UnusedPage;
