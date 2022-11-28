import React from "react";
import { useSelector } from "react-redux";

export default function Logout() {
  const user = useSelector((state) => state.auth);

  return <button></button>;
}
