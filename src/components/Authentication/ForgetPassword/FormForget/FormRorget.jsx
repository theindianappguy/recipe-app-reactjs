import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ErrorMessageAuth from "../../ErrorMessage/ErrorMessageAuth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearRedux } from "../../../../Redux/auth.slice";

export default function FormRegister() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { registerMessageError } = useSelector((state) => state.auth.register);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [email, setEmail] = useState("");
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    const handleClass = (name, baseClass = "form-control") => `${baseClass} ${errors[name] ? "is-invalid" : ""}`;
    const onSubmit = (data) => {
        // console.log(data)
        // TODO: process this with some API
        // 1. Check the correct question
        // 2. Check the correct answer
        // If the logic is true, then display an alert (showing the old password)

    };

    const mockup_questions = [{"id": 1, "content": "How many people are there in your family ?"},
                                {"id": 2, "content": "Where did you lived when you were 6 years old ?"},
                                {"id": 3, "content": "What is your primary school's name ?"},]
    
    // FE - done, BE - None
    
    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <h3>Retake the private Q&A</h3>
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
                <label>Private Q&A</label>
                <select {...register("question")} className={handleClass("question")}>
                <option value="" disabled selected hidden>Choose a question</option>
                {
                    mockup_questions?.map(item => (
                        <option value={item["id"]}>{item["content"]}</option>
                    ))
                }
                </select>
            </div>

            <div className="mb-3">
                <label>Answer</label>
                <input
                    {...register("answer", {
                        required: { value: true, message: "You must enter your answer" },
                        minLength: {
                            value: 0,
                            message: "Answer must be longer 5 character",
                        },
                        maxLength: {
                            value: 99,
                            message: "Answer must be shorter 99 character",
                        },
                    })}
                    type="answer"
                    value={answer}
                    onChange={(e) => {
                        setAnswer(e.target.value);
                    }}
                    className={handleClass("answer")}
                    placeholder="Enter your answer"
                />
                <ErrorMessageAuth name="answer" errors={errors} />
            </div>

            {registerMessageError && (
                <div className="text-danger">{registerMessageError}</div>
            )}
            <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </div>
        </form>
    );
}
