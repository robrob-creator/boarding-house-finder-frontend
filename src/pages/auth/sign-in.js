/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/user";

export default function SignIn() {
  const [errors, setErrors] = useState();
  const navigate = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    let body = {
      email: e.target?.email?.value,
      password: e.target.password?.value,
    };
    let error = {};

    if (body.password === "") {
      error.password = "*password required!";
    }

    if (body.email === "") {
      error.email = "*role required!";
    }
    setErrors(error);

    if (!errors) {
      let res = await login(body);
      if (res.message === "Success") {
        navigate("/");
      }
    }
  };
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm sm:max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center font-bold">Sign in</h1>
          <form onSubmit={(e) => submit(e)}>
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
              <p className="text-red-400 text-xs italic">{errors?.password}</p>
            </div>

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Sign in
            </button>
          </form>

          <div className="text-center text-sm text-grey-dark mt-4">
            By signing in, you agree to the
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
          Dont have an account?
          <a
            className="no-underline border-b border-blue text-blue"
            onClick={() => navigate("/sign-up")}
          >
            Sign up
          </a>
          .
        </div>
      </div>
    </div>
  );
}
