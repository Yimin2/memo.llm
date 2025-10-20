import React, {useEffect, useState} from 'react'
import ChatContainer from "../../components/ChatContainer.jsx";
import ChatForm from "../../components/ChatForm.jsx";
import {chat} from "../../utils/genai.js";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import PATHS from "../../constants/paths.js";
import {saveMemo} from "../../utils/memoStorage.js";

export default function Memo() {
    const [prompt, setPrompt] = useState("")
    const [messages, setMessages] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const {token} = useSelector(state =>(state.auth))
    const navigate = useNavigate()
    useEffect(() => {
        if(!token) {
            navigate(PATHS.LOGIN)
        }
    }, [token]);

    async function handleSubmit(e) {
        e.preventDefault();
        if (isLoading && !prompt.trim()) {
            return
        }
        setMessages((prev) => [...prev, {role: "user", content: prompt}])
        const currentPrompt = prompt
        setPrompt("")
        setIsLoading(true)
        await generateAiContent(currentPrompt)
        setIsLoading(false)
    }

    async function generateAiContent(currentPrompt) {
        try {
            const response = await chat.sendMessageStream({
                message: currentPrompt
            })

            setMessages((prev) => [...prev, {role: "ai", content: ""}])

            let fullText = ""
            for await (const chunk of response) {
                const chunkText = chunk.text || ""
                console.log(chunkText)
                fullText += chunkText

                setMessages((prev) => {
                    const newMessages = [...prev]
                    newMessages[newMessages.length - 1] = {
                        role: "ai",
                        content: fullText
                    }
                    return newMessages
                })
            }
        } catch (error) {
            console.log(error)
            setMessages((prev) => [...prev, {
                role: "ai",
                content: "오류가 발생했습니다. 다시 시도해주세요."
            }])
        }
    }

    function handleSaveMemo(content) {
        try {
            saveMemo(content)
            alert("메모가 저장되었습니다!")
        } catch (error) {
            console.error("메모 저장 실패:", error)
            alert("메모 저장에 실패했습니다.")
        }
    }


    return (
        <div className="flex flex-col h-screen">
            <ChatContainer messages={messages} onSaveMemo={handleSaveMemo}/>
            <ChatForm
                prompt={prompt}
                setPrompt={setPrompt}
                isLoading={isLoading}
                onSubmit={handleSubmit}
            />
        </div>
    )
}