import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import ErrorMessageAuth from "../../Authentication/ErrorMessage/ErrorMessageAuth";
import { loginUserModal } from "../../Api/auth.api";
export default function FormLoginModal({ hide }) {
  const dispatch = useDispatch();
  const { currentUserError } = useSelector((state) => state.auth.login);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    setErrorMessage(currentUserError);
  }, [currentUserError, setErrorMessage]);
  const handleClass = (name, baseClass = "form-control") =>
    `${baseClass} ${errors[name] ? "is-invalid" : ""}`;
  const onSubmit = (data) => {
    loginUserModal(data, dispatch);
    hide();
  };
  return (
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
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
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          name="email"
          value={email}
          className={handleClass("email")}
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
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className={handleClass("password")}
          placeholder="Enter password"
        />
        <ErrorMessageAuth name="password" errors={errors} />
      </div>
      {errorMessage && (
        <div className="text-danger" style={{ fontSize: "small" }}>
          {errorMessage}
        </div>
      )}
      <div className="d-grid">
        <button
          type="submit"
          className="btn btn-primary"
          style={{ backgroundColor: "#007074" }}
        >
          Login
        </button>
        <button
          type="button"
          className="btn btn-primary"
          style={{ backgroundColor: "#007074" }}
          onClick={hide}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
