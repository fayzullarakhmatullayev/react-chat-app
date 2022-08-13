import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BiPowerOff } from "react-icons/bi";
import { logoutRoute } from "../utils/APIRoutes";
import axios from "axios";

const Logout = () => {
  const navigate = useNavigate();
  const handleClick = async () => {
    const id = await JSON.parse(localStorage.getItem("chat-app-user"))._id;
    const data = await axios.get(`${logoutRoute}/${id}`);
    if (data.status === 200) {
      localStorage.clear();
      navigate("/login");
    }
  };

  return (
    <Button onClick={handleClick}>
      <BiPowerOff />
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #9a86f3;
  border: none;
  cursor: pointer;
  svg {
    font-size: 1.3rem;
    color: #ebe7ff;
  }
`;

export default Logout;
