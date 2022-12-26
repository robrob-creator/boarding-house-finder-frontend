/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../services/user";

export default function SignUp() {
  const [errors, setErrors] = useState();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    let body = {
      firstName: e.target?.firstName?.value,
      lastName: e.target?.lastName?.value,
      middleName: e.target?.middleName?.value,
      role: e.target?.role?.value,
      phoneNumber: e.target?.phoneNumber?.value,
      email: e.target?.email?.value,
      password: e.target.password?.value,
    };
    let error = {};
    if (body.password !== e.target.confirm_password.value) {
      error.confirm_password = "*password do not match!";
    }
    if (body.firstName === "") {
      error.firstName = "*first name required!";
    }
    if (body.lastName === "") {
      error.lastName = "last name required!";
    }
    if (body.middleName === "") {
      error.middleName = "*middle name required!";
    }
    if (body.role === "") {
      error.middleName = "*role required!";
    }
    if (body.password === "") {
      error.password = "*password required!";
    }
    if (body.phoneNumber === "") {
      error.phoneNumber = "*phone number required!";
    }
    if (body.email === "") {
      error.email = "*role required!";
    }
    setErrors(error);

    if (!errors) {
      let res = await register(body);
      console.log(res);
      navigate("/sign-in");
    }
  };
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm sm:max-w-xl mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center font-bold">Sign up</h1>
          <form onSubmit={(e) => submit(e)}>
            <div className="sm:grid grid-cols-2 gap-4">
              <div className=" mb-4">
                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded "
                  name="firstName"
                  placeholder="First Name"
                />
                <p className="text-red-400 text-xs italic">
                  {errors?.firstName}
                </p>
              </div>
              <div className=" mb-4">
                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded"
                  name="lastName"
                  placeholder="Last Name"
                />
                <p className="text-red-400 text-xs italic">
                  {errors?.lastName}
                </p>
              </div>
              <div className=" mb-4">
                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded"
                  name="middleName"
                  placeholder="Middle Name"
                />
                <p className="text-red-400 text-xs italic">
                  {errors?.middleName}
                </p>
              </div>
              <div className=" mb-4">
                <select
                  name="role"
                  className="block border border-grey-light w-full p-3 rounded"
                  placeholder="Role"
                >
                  <option value="renter">Renter</option>
                  <option value="landlord">Landlord</option>
                </select>
                <p className="text-red-400 text-xs italic">{errors?.role}</p>
              </div>
              <div className=" mb-4">
                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded"
                  name="phoneNumber"
                  placeholder="Phone number"
                />
                <p className="text-red-400 text-xs italic">
                  {errors?.phoneNumber}
                </p>
              </div>
              <div className=" mb-4">
                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded"
                  name="email"
                  placeholder="Email"
                />
                <p className="text-red-400 text-xs italic">{errors?.email}</p>
              </div>
              <div className=" mb-4">
                <input
                  type="password"
                  className="block border border-grey-light w-full p-3 rounded "
                  name="password"
                  placeholder="Password"
                />
                <p className="text-red-400 text-xs italic">
                  {errors?.password}
                </p>
              </div>
              <div className=" mb-4">
                <input
                  type="password"
                  className="block border border-grey-light w-full p-3 rounded"
                  name="confirm_password"
                  placeholder="Confirm Password"
                />
                <p className="text-red-400 text-xs italic">
                  {errors?.confirm_password}
                </p>
              </div>
            </div>
            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Create Account
            </button>
          </form>

          <div className="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the
            <a
              class="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Terms of Service
            </a>{" "}
            and
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="text-grey-dark mt-6">
          Already have an account?
          <a
            className="no-underline border-b border-blue text-blue"
            href="../login/"
            onClick={() => navigate("/sign-up")}
          >
            Log in
          </a>
          .
        </div>
      </div>
    </div>
  );
}
