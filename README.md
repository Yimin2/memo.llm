# 🤖 Memo LLM - AI 할 일 관리 애플리케이션

Google Gemini AI를 활용한 실시간 채팅 기반 할 일 관리 시스템

## 📋 프로젝트 소개

AI와 자연스러운 대화를 통해 할 일을 관리하는 React 기반 웹 애플리케이션입니다.
Google Gemini 2.5 Flash 모델을 사용하여 실시간 스트리밍 채팅으로 할 일을 정리하고, 중요한 내용은 메모로 저장하여 관리할 수 있습니다.

## ✨ 주요 기능

### 💬 AI 채팅 기반 할 일 관리
- Google Gemini 2.5 Flash 모델과 실시간 스트리밍 대화
- 자연어로 할 일을 입력하면 AI가 친절하게 정리
- 마감일, 우선순위 자동 제안
- 채팅 히스토리 실시간 표시

### 📝 메모 저장 및 관리
- AI 응답에서 중요한 내용을 메모로 저장
- 카드 형식으로 메모 목록 표시
- 반응형 그리드 레이아웃 (모바일/태블릿/데스크톱)
- React Markdown으로 메모 렌더링
- 메모 삭제 기능
- 로컬 스토리지 기반 데이터 저장

### 🔐 사용자 인증 및 회원 관리
- **회원가입**: 이메일/비밀번호 기반 신규 계정 생성
- **로그인**: Supabase Auth를 통한 안전한 인증
- **로그아웃**: 네비게이션 바에서 언제든지 로그아웃 가능
- **로그인 상태 유지**: Redux Persist로 새로고침 후에도 로그인 유지
- **보호된 라우트**: 로그인하지 않으면 메모 작성/목록 페이지 접근 불가
- **자동 리다이렉트**: 미인증 사용자는 자동으로 로그인 페이지로 이동

## 🛠️ 기술 스택

### Frontend
- **React 19** - UI 라이브러리
- **Vite 7** - 빌드 도구 및 개발 서버
- **React Router DOM v7** - 클라이언트 사이드 라우팅
- **Redux Toolkit** - 상태 관리
- **Redux Persist** - 상태 영속화 (로그인 유지)
- **Tailwind CSS 4** - 유틸리티 기반 스타일링

### AI & Backend Services
- **Google Gemini API (@google/genai)** - AI 채팅 및 자연어 처리
- **Gemini 2.5 Flash** - 실시간 스트리밍 응답 모델
- **Supabase** - 사용자 인증 및 회원 관리
- **Axios** - HTTP 클라이언트

### UI Components
- **React Markdown** - 마크다운 렌더링
- **remark-gfm** - GitHub Flavored Markdown 지원

### State Management
- **localStorage** - 메모 데이터 저장
- **Redux Toolkit** - 전역 상태 관리 (인증)

## 📁 프로젝트 구조

```
memo.llm/
├── src/
│   ├── components/        # 재사용 가능한 컴포넌트
│   │   ├── ChatContainer.jsx   # 채팅 메시지 컨테이너
│   │   ├── ChatForm.jsx        # 메시지 입력 폼
│   │   ├── ChatMessage.jsx     # 개별 메시지 컴포넌트
│   │   └── MemoCard.jsx        # 메모 카드 컴포넌트
│   ├── layouts/           # 레이아웃 컴포넌트
│   │   └── RootLayout.jsx      # 네비게이션 바 포함 레이아웃
│   ├── pages/             # 페이지 컴포넌트
│   │   ├── AuthPages/          # 인증 관련 페이지
│   │   │   ├── Login.jsx
│   │   │   └── Signup.jsx
│   │   └── RootPages/          # 메인 페이지
│   │       ├── Home.jsx
│   │       ├── Memo.jsx
│   │       └── MemoList.jsx
│   ├── router/            # 라우팅 설정
│   │   └── index.js
│   ├── store/             # Redux 스토어
│   │   ├── index.js            # 스토어 설정
│   │   └── authSlice.js        # 인증 상태 관리
│   ├── utils/             # 유틸리티 함수
│   │   ├── genai.js            # Gemini API 설정
│   │   └── memoStorage.js      # 로컬 스토리지 관리
│   ├── constants/         # 상수 정의
│   │   └── paths.js            # 라우트 경로
│   ├── main.jsx           # 앱 진입점
│   └── index.css          # 글로벌 스타일
├── public/
├── .env                   # 환경 변수 (gitignore)
└── package.json
```

## 📄 페이지 구성

| 페이지 | 경로 | 설명 |
|--------|------|------|
| 홈 | `/` | 서비스 소개 및 시작 페이지 |
| 로그인 | `/login` | 사용자 로그인 |
| 회원가입 | `/signup` | 신규 사용자 등록 |
| 메모 작성 | `/memo` | AI와 채팅하며 할 일 관리 |
| 메모 목록 | `/memolist` | 저장된 메모 조회 및 관리 |

## 🚀 시작하기

### 환경 변수 설정

`.env` 파일을 프로젝트 루트에 생성하고 다음 내용을 추가하세요:

```env
# Google Gemini API Key
VITE_GEMINI_API_KEY=your_gemini_api_key_here

# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**API 키 발급 방법:**

1. **Google Gemini API Key**
   - Google AI Studio에서 발급: https://makersuite.google.com/app/apikey
   - 무료로 사용 가능

2. **Supabase Keys**
   - Supabase 프로젝트 생성: https://supabase.com
   - Project Settings > API에서 URL과 anon key 확인
   - 무료 티어 사용 가능

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프리뷰
npm run preview
```

## 💡 주요 기능 사용법

### 1. 회원가입 및 로그인
1. 홈페이지에서 "회원가입" 버튼 클릭
2. 이메일과 비밀번호 입력하여 계정 생성
3. 로그인 페이지에서 이메일/비밀번호로 로그인
4. 로그인 성공 시 자동으로 메모 작성 페이지로 이동

### 2. AI와 채팅하기
1. 로그인 후 `/memo` 페이지로 이동
2. 입력창에 할 일을 자연어로 입력 (예: "내일 오후 3시 회의 준비")
3. AI가 실시간으로 답변을 스트리밍으로 제공
4. 채팅 히스토리가 화면에 표시됨

### 3. 메모 저장하기
1. AI 응답 아래의 "메모로 저장" 버튼 클릭
2. 로컬 스토리지에 자동 저장
3. "메모가 저장되었습니다!" 알림 확인

### 4. 메모 관리하기
1. 네비게이션 바에서 "메모 목록" 클릭
2. `/memolist` 페이지에서 저장된 메모 확인
3. 카드 형식으로 표시된 메모 조회 (생성일시 포함)
4. 삭제 버튼(휴지통 아이콘)으로 불필요한 메모 제거

### 5. 로그아웃
1. 네비게이션 바 우측 상단의 "로그아웃" 버튼 클릭
2. 로그아웃 확인 알림
3. 자동으로 홈페이지로 이동

## 🔒 보안

- API 키 및 민감한 정보는 환경 변수로 관리
- `.env` 파일은 `.gitignore`에 포함되어 Git 추적 제외
- Redux Persist로 인증 상태 안전하게 유지

## 📝 개발 규칙

- 기능별 브랜치 생성 후 개발 진행
- 1시간마다 기능 브랜치에 커밋
- 작은 목표 완료 시 GitHub를 통해 main 브랜치로 병합
- main/master 브랜치는 항상 최신 상태 유지
- 문제 해결 시간은 최대 30분으로 제한

## 🎯 향후 계획

- [ ] AI가 메모 내용을 참조하여 맥락있는 대화
- [ ] 백엔드 API 연동 (메모 클라우드 저장)
- [ ] 메모 검색 및 필터링 기능
- [ ] 메모 태그 및 카테고리 시스템
- [ ] 다크 모드 지원
- [ ] 메모 수정 기능
- [ ] 메모 우선순위 및 정렬
- [ ] Vercel 배포

## 📜 라이선스

이 프로젝트는 개인 학습 목적으로 제작되었습니다.

## 👨‍💻 개발자

이민구