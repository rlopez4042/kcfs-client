import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import apiUrl from "../../apiUrl";
import Login from "../Login/Login";
import Register from "../Register/Register";

function Introduction() {
    return (
    <div>
        <Register />
        <h1>Intro</h1>
        <p>Intro</p>
    </div>
    )
}
export default Introduction;