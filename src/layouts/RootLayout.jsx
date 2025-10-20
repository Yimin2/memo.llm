import React from 'react';
import {Link, Outlet, useLocation, useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {logout} from "../store/authSlice.js";
import PATHS from "../constants/paths.js";

function RootLayout() {
    const location = useLocation();
    const {token} = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logout());
        alert("로그아웃 되었습니다.");
        navigate(PATHS.HOME)
    };

    const isActive = (path) => location.pathname === path;

    // 인증 페이지에서는 네비게이션 바를 숨김
    const hideNav = location.pathname === '/login' || location.pathname === '/signup';

    return (
        <div className="min-h-screen bg-gray-50">
            {!hideNav && (
                <nav className="border-b border-gray-200 backdrop-blur-sm bg-white/80 sticky top-0 z-50">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center space-x-8">
                                <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition">
                                    Memo LLM
                                </Link>

                                {token && (
                                    <div className="hidden md:flex space-x-1">
                                        <Link
                                            to="/"
                                            className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                                                isActive('/')
                                                    ? 'bg-blue-100 text-blue-700'
                                                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                                            }`}
                                        >
                                            홈
                                        </Link>
                                        <Link
                                            to="/memo"
                                            className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                                                isActive('/memo')
                                                    ? 'bg-blue-100 text-blue-700'
                                                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                                            }`}
                                        >
                                            메모 작성
                                        </Link>
                                        <Link
                                            to="/memolist"
                                            className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                                                isActive('/memolist')
                                                    ? 'bg-blue-100 text-blue-700'
                                                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                                            }`}
                                        >
                                            메모 목록
                                        </Link>
                                    </div>
                                )}
                            </div>

                            <div className="flex items-center space-x-4">
                                {token ? (
                                    <button
                                        onClick={handleLogout}
                                        className="bg-white hover:bg-gray-100 text-black font-medium py-2 px-4 rounded-md transition duration-200"
                                    >
                                        로그아웃
                                    </button>
                                ) : (
                                    <div className="flex space-x-3">
                                        <Link
                                            to="/login"
                                            className="text-gray-600 hover:text-gray-900 font-medium py-2 px-4 rounded-md hover:bg-gray-100 transition"
                                        >
                                            로그인
                                        </Link>
                                        <Link
                                            to="/signup"
                                            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition duration-200"
                                        >
                                            회원가입
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>
            )}

            <div>
                <Outlet/>
            </div>
        </div>
    );
}

export default RootLayout;