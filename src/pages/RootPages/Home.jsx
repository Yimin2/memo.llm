import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

function Home() {
    const {token} = useSelector((state) => state.auth);

    return (
        <div className="min-h-screen py-12 px-4">
            <div className="container mx-auto max-w-6xl">
                {/* Hero Section */}
                <div className="text-center my-32">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
                        당신의 생각을 기록하세요.
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        간편하고 빠른 메모 관리 시스템
                    </p>
                    {!token && (
                        <div className="flex justify-center gap-4">
                            <Link
                                to="/signup"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 shadow-lg hover:shadow-xl"
                            >
                                시작하기
                            </Link>
                            <Link
                                to="/login"
                                className="bg-white hover:bg-gray-50 text-blue-600 font-semibold py-3 px-8 rounded-lg border-2 border-blue-600 transition duration-200 shadow-lg hover:shadow-xl"
                            >
                                로그인
                            </Link>
                        </div>
                    )}
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition duration-300">
                        <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">빠른 작성</h3>
                        <p className="text-gray-600">
                            직관적인 인터페이스로 생각을 즉시 기록하세요
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition duration-300">
                        <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">체계적 관리</h3>
                        <p className="text-gray-600">
                            모든 메모를 한 곳에서 쉽게 관리하고 찾아보세요
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition duration-300">
                        <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">안전한 보관</h3>
                        <p className="text-gray-600">
                            개인 정보는 안전하게 보호됩니다
                        </p>
                    </div>
                </div>

                {/* CTA Section */}
                {token && (
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg p-12 text-center text-white">
                        <h2 className="text-3xl font-bold mb-4">
                            지금 바로 시작하세요
                        </h2>
                        <p className="text-blue-100 mb-8">
                            새로운 메모를 작성하거나 기존 메모를 관리할 수 있습니다
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link
                                to="/memo"
                                className="inline-block bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-8 rounded-lg transition duration-200 shadow-lg hover:shadow-xl"
                            >
                                메모 작성하기
                            </Link>
                            <Link
                                to="/memolist"
                                className="inline-block bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 shadow-lg hover:shadow-xl"
                            >
                                메모 목록 보기
                            </Link>
                        </div>
                    </div>
                )}

                {!token && (
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg p-12 text-center text-white">
                        <h2 className="text-3xl font-bold mb-4">
                            아직 회원이 아니신가요?
                        </h2>
                        <p className="text-blue-100 mb-8">
                            지금 가입하고 무료로 메모 서비스를 이용하세요
                        </p>
                        <Link
                            to="/signup"
                            className="inline-block bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-8 rounded-lg transition duration-200 shadow-lg hover:shadow-xl"
                        >
                            무료로 시작하기
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;