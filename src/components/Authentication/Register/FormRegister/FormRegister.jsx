import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ErrorMessageAuth from "../../ErrorMessage/ErrorMessageAuth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../Api/auth.api";

export default function FormRegister() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { registerMessageError } = useSelector((state) => state.auth.register);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClass = (name, baseClass = "form-control") =>
    `${baseClass} ${errors[name] ? "is-invalid" : ""}`;
  const onSubmit = (data) => {
    registerUser(data, dispatch, navigate);
  };
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h3>Sign Up</h3>
      <div className="mb-3">
        <label>User Name</label>
        <input
          name="username"
          {...register("username", {
            required: { value: true, message: "You must enter your username" },
            maxLength: {
              value: 20,
              message: "Username must be less than 20 characters",
            },
            minLength: {
              value: 4,
              message: "Username must be longer than 4 characters",
            },
          })}
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          className={handleClass("name")}
          placeholder="User Name"
        />
        <ErrorMessageAuth name="name" errors={errors} />
      </div>

      <div className="mb-3">
        <label>Email address</label>
        <input
          {...register("email", {
            required: { value: true, message: "You must enter email" },
            maxLength: { value: 99, message: "email must shorter than 99" },
            minLength: { value: 10, message: "email must longer than 10" },
            validate: {
              email: (v) =>
                /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v) ||
                "email is not valid",
            },
          })}
          type="email"
          value={email}
          className={handleClass("email")}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter email"
        />
        <ErrorMessageAuth name="email" errors={errors} />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          {...register("password", {
            required: { value: true, message: "You must enter password" },
            minLength: {
              value: 6,
              message: "Password must longer 6 character",
            },
            maxLength: {
              value: 99,
              message: "Password must shorter 99 character",
            },
          })}
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className={handleClass("password")}
          placeholder="Enter password"
        />
        <ErrorMessageAuth name="password" errors={errors} />
      </div>
      {registerMessageError && (
        <div className="text-danger">{registerMessageError}</div>
      )}
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <Link to="/login">sign in?</Link>
      </p>
    </form>
  );
}
