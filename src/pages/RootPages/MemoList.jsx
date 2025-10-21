import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {deleteMemo, getMemos} from "../../utils/memoStorage.js";
import MemoCard from "../../components/MemoCard.jsx";
import PATHS from "../../constants/paths.js";

function MemoList() {
    const [memos, setMemos] = useState([]);
    const {token} = useSelector(state => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate(PATHS.LOGIN);
        }
    }, [token, navigate]);

    useEffect(() => {
        loadMemos();
    }, []);

    const loadMemos = () => {
        const loadedMemos = getMemos();
        setMemos(loadedMemos);
    };

    const handleDeleteMemo = (id) => {
        deleteMemo(id);
        loadMemos(); // 메모 목록 새로고침
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">내 메모</h1>
                <button
                    onClick={() => navigate(PATHS.MEMO)}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition duration-200"
                >
                    메모 작성하기
                </button>
            </div>

            {memos.length === 0 ? (
                <div className="text-center py-16">
                    <svg
                        className="mx-auto h-24 w-24 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                    </svg>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">메모가 없습니다</h3>
                    <p className="mt-2 text-sm text-gray-500">
                        AI와 대화하고 메모를 저장해보세요!
                    </p>
                    <button
                        onClick={() => navigate(PATHS.MEMO)}
                        className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition duration-200"
                    >
                        시작하기
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {memos.map((memo) => (
                        <MemoCard
                            key={memo.id}
                            memo={memo}
                            onDelete={handleDeleteMemo}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default MemoList;