import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../store/authSlice.js";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const {token} = useSelector((state) => state.auth)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login({email, password}))
    }

    return (<div>
        <form className="m-2"
              onSubmit={handleSubmit}>
            <input className="border-2"
                   type="email"
                   placeholder="email"
                   value={email}
                   onChange={(e) => {
                       setEmail(e.target.value)
                   }}/>
            <input className="border-2"
                   type="password"
                   placeholder="password"
                   value={password}
                   onChange={(e) => {
                       setPassword(e.target.value)
                   }}/>
            <button className="mx-2 cursor-pointer" type="submit">로그인</button>
        </form>
    </div>)
}

export default Login;