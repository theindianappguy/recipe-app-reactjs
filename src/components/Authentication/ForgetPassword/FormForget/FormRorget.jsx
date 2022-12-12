import React, {useState} from "react";
import {useForm} from "react-hook-form";
import ErrorMessageAuth from "../../ErrorMessage/ErrorMessageAuth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPassword } from "../../../Api/auth.api";
import { Button, Modal } from "react-bootstrap";

export default function FormRegister() {
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const navigate = useNavigate();
    const { registerMessageError } = useSelector((state) => state.auth.register);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [email, setEmail] = useState("");
    const [question, setQuestion] = useState(0);
    const [answer, setAnswer] = useState("");

    const handleClass = (name, baseClass = "form-control") =>
        `${baseClass} ${errors[name] ? "is-invalid" : ""}`;
    const handleClick = (data) => {
        const fixData = { ...data, qid: Number(data.qid) };
        try {
            getPassword(fixData, setPassword).then((res) => {
                setShow(true);
                if (res.data == "Câu trả lời không đúng") {
                    setPassword("Your answer is not correct");
                } else setPassword(`Mat khau cua ban la: ${res.data}`);
            });
        } catch (err) {
            console.log(err);
            setPassword(err);
        }
        // TODO: process this with some API
        // 1. Check the correct question
        // 2. Check the correct answer
        // If the logic is true, then display an alert (showing the old password)
    };

    const mockup_questions = [
        { id: 1, content: "How many people are there in your family ?" },
        { id: 2, content: "Where did you lived when you were 6 years old ?" },
        { id: 3, content: "What is your primary school's name ?" },
    ];

    // FE - done, BE - None

    return (
        <form className="form" onSubmit={handleSubmit(handleClick)}>
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
                <select {...register("qid")} className={handleClass("qid")}>
                    <option value={0} disabled selected hidden>
                        Choose a question
                    </option>
                    {mockup_questions?.map((item) => (
                        <option
                            onChange={(e) => setQuestion(Number(e.target.value))}
                            value={Number(item["id"])}
                        >
                            {item["content"]}
                        </option>
                    ))}
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
                    type="text"
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
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{password}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button
                            variant="primary"
                            onClick={() => {
                                navigate("/login");
                            }}
                        >
                            Go to page login
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </form>
    );
}
