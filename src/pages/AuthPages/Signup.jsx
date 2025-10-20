import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {resetSignupSuccess, signup} from "../../store/authSlice.js";
import {useNavigate} from "react-router-dom";
import PATHS from "../../constants/paths.js";


function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const {isSignupSuccess} = useSelector((state) => (state.auth))
    const navigator = useNavigate()
    const {token} = useSelector((state) => state.auth)

    const handleSignup = (e) => {
        e.preventDefault()
        dispatch(signup({email, password}))
    }

    const handleGoBack = () => {
        navigator(-1)
    }

    useEffect(() => {
        if(token) {
            navigator(PATHS.HOME)
        }
    }, []);

    useEffect(() => {
        if (isSignupSuccess) {
            alert("회원가입 성공")
            dispatch(resetSignupSuccess());
            navigator(PATHS.LOGIN)
        }
    }, [isSignupSuccess, dispatch]);
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 relative">
                <button
                    onClick={handleGoBack}
                    className="absolute top-4 left-4 p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition"
                    aria-label="뒤로 가기"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">회원가입</h1>
                    <p className="text-gray-600">새로운 계정을 만드세요</p>
                </div>

                <form onSubmit={handleSignup} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            이메일
                        </label>
                        <input
                            id="email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                            type="email"
                            placeholder="example@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                            비밀번호
                        </label>
                        <input
                            id="password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                            type="password"
                            placeholder="비밀번호를 입력하세요"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
                        type="submit"
                    >
                        회원가입
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-gray-600">
                        이미 계정이 있으신가요?{' '}
                        <a href="/login" className="text-blue-500 hover:text-blue-600 font-medium">
                            로그인
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Signup;