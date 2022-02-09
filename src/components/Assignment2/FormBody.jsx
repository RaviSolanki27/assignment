import React, { useState } from "react";
import "./formbody.css";
import ThankYou from "./ThankYou";

function FormBody() {
  const [show, setshow] = useState(false);
  const [first, setfirst] = useState({
    firstname: "",
    lastname: "",
    email: "",
    education: "",
    bio: "",
    dob: 0,
  });

  const updatedata = (e) => {
    setfirst({
      ...first,
      [e.target.name]: e.target.value,
    });
  };

  const submitdata = (e) => {
    e.preventDefault();
    if (
      first.firstname &&
      first.lastname &&
      first.bio &&
      first.dob &&
      first.education &&
      first.email
    ) {
      alert(JSON.stringify(first));
      console.log(first);
      setshow(true);
    } else {
      alert("Please fill all details");
      setshow(false);
    }
  };

  return (
    <div className="formbody">
      <form action="" className="form">
        <div>
          <input
            type="text"
            value={first.firstname}
            name="firstname"
            onChange={updatedata}
          />
          <p>Enter your First name</p>
        </div>
        <div>
          <input
            type="text"
            value={first.lastname}
            name="lastname"
            onChange={updatedata}
          />
          <p>Enter your Last name</p>
        </div>
        <div>
          <input
            type="text"
            value={first.email}
            name="email"
            onChange={updatedata}
          />
          <p>Enter your Email </p>
        </div>
        <div>
          <input
            type="text"
            value={first.education}
            name="education"
            onChange={updatedata}
          />
          <p>Enter your Education </p>
        </div>
        <div>
          <input
            type="text"
            value={first.bio}
            name="bio"
            onChange={updatedata}
          />
          <p>Enter your Bio </p>
        </div>
        <div>
          <input
            type="date"
            value={first.dob}
            name="dob"
            onChange={updatedata}
          />
          <p>Enter your DOB </p>
        </div>
        <div>
          <button type="submit" onClick={submitdata}>
            Submit
          </button>
        </div>
      </form>
      
      {show && <ThankYou />}
    </div>
  );
}

export default FormBody;
