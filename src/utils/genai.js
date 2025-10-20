import {GoogleGenAI} from "@google/genai";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY
const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY})


const systemInstruction = [
    "당신은 할 일 관리 AI 어시스턴트입니다.",
    `오늘 날짜: ${new Date().toISOString().split("T")[0]}`,
    "사용자가 할 일, 메모, 업무, 계획 등을 입력하면 친절하게 확인하고 정리해서 답변해주세요.",
    "마감 날짜가 필요한 경우 적절한 날짜를 제안하세요.",
    "할 일이 아닌 일반적인 대화나 질문에는 정중하게 응답하되, 할 일 관리에 집중하도록 안내하세요.",
];

const chat = ai.chats.create({
    model: "gemini-2.5-flash",
    config: {
        systemInstruction: systemInstruction
    }
})

export {ai, chat}