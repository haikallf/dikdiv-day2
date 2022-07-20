import React, { useEffect, useState } from "react";

function UseEfectExample() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // setiap re-render
  useEffect(() => {
    console.log("re-render");
  });

  // onMount, saat pertama kali render saja
  // 2nd arg, dependency array
  useEffect(() => {
    console.log("onMount");
  }, []);

  // onUpdate, setiap salah satu element dari dependency array berubah
  useEffect(() => {
    console.log("first name changed");
  }, [firstName]);

  useEffect(() => {
    console.log("last name changed");
  }, [lastName]);

  return (
    <div>
      <center>
        <h1>useEffect Hook</h1>
        <label htmlFor="firstName">First Name: </label>
        <input
          name="firstName"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <label htmlFor="lastName">Last Name: </label>
        <input
          name="lastName"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </center>
    </div>
  );
}

export default UseEfectExample;
