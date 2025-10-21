import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {useState} from "react";

// Props message : 사용자 or AI 메세지 객체
export default function ChatMessage({ message, onSave }) {
    // 사용자 메세지 / AI 메세지 확인용 변수
    const isUser = message["role"] === "user";
    const isAi = message["role"] === "ai";
    const [saved, setSaved] = useState(false);

    const handleSave = () => {
        if (onSave) {
            onSave(message.content);
            setSaved(true);
            setTimeout(() => setSaved(false), 2000);
        }
    };

    return (
        // 메세지 role에 따라 정렬 방향 결정
        <div className={`mt-16 flex ${isUser ? "justify-end" : "justify-start"}`}>
            {/* AI 메세지 : 마크다운 표현 */}
            {/* 사용자 메세지 : 일반 텍스트 표현 */}
            {isAi ? (
                <div className="max-w-[90%]">
                    <div className="markdown-content">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {message.content}
                        </ReactMarkdown>
                    </div>
                    <div className="mt-2 flex justify-end">
                        <button
                            onClick={handleSave}
                            disabled={saved}
                            className={`text-sm px-3 py-1 rounded-md transition-colors duration-200 ${
                                saved
                                    ? 'bg-green-500 text-white cursor-not-allowed'
                                    : 'bg-blue-500 text-white hover:bg-blue-600'
                            }`}
                        >
                            {saved ? '✓ 저장됨' : '메모로 저장'}
                        </button>
                    </div>
                </div>
            ) : (
                <div className="p-3 border rounded-xl border-gray-300">
                    {message.content}
                </div>
            )}
        </div>
    );
}