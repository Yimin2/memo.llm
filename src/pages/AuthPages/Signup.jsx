import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {resetSignupSuccess, signup} from "../../store/authSlice.js";


function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const {isSignupSuccess} = useSelector((state) => (state.auth))

    const handleSignup = (e) => {
        e.preventDefault()
        dispatch(signup({email, password}))
    }
    useEffect(() => {
        if (isSignupSuccess) {
            alert("회원가입 성공")
            dispatch(resetSignupSuccess());
        }
    }, [isSignupSuccess, dispatch]);
    return (<div>
        <form onSubmit={handleSignup}>
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
            <button className="mx-2 cursor-pointer"
                    type="submit">회원가입
            </button>
        </form>
    </div>);
}

export default Signup;