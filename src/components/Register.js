import React, { useState } from "react";

const Register = ({ handleRoute, loadUser }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleChangeFirstName = (event) => {
    const fName = event.target.value;
    setFirstName(fName);
  };
  const handleChangeLastName = (event) => {
    const lName = event.target.value;
    setLastName(lName);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (event) => {
    const email = event.target.value;
    setEmail(email);
  };
  const handleChangePassword = (event) => {
    const password = event.target.value;
    setPassword(password);
  };
  const handleClick = () => {
    fetch("http://localhost:7000/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: `${firstName} ${lastName}`,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.name === `${firstName} ${lastName}` && data.email === email) {
          loadUser(data);
          handleRoute("home");
        }
      });
  };

  return (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="fname">
                First Name
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="fname"
                id="fname"
                value={firstName}
                onChange={handleChangeFirstName}
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="lname">
                Last Name
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="lname"
                id="lname"
                value={lastName}
                onChange={handleChangeLastName}
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
                value={email}
                onChange={handleChangeEmail}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={handleChangePassword}
              />
            </div>
          </fieldset>
          <div className="">
            <input
              onClick={handleClick}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Register"
            />
          </div>
        </div>
      </main>
    </article>
  );
};

export default Register;
