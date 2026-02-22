# 🎯 [Do it! - 할 일 관리 서비스 ](https://todo-list-delta-nine.vercel.app/)

> 간편하고 직관적인 할 일 관리 웹 애플리케이션

## 📌 프로젝트 소개

**Do it!** 은 사용자가 할 일을 효율적으로 관리할 수 있도록 돕는 투두리스트 웹 애플리케이션입니다.
진행 중인 작업과 완료된 작업을 명확하게 구분하여 보여주며, 각 할 일에 메모와 이미지를 첨부할 수 있습니다.

### ✨ 주요 기능

- **할 일 관리**: 할 일 추가, 수정, 삭제 기능
- **진행 상태 관리**: 진행 중/완료 상태 전환
- **상세 정보 추가**: 메모 및 이미지 첨부 기능
- **반응형 디자인**: 모바일, 태블릿, 데스크탑 모든 기기 지원

### 🚀 사용 방법

1. **할 일 추가**: 상단 입력창에 할 일을 입력하고 추가 버튼을 누릅니다.
2. **상태 변경**: 체크박스를 클릭하여 진행 중인 할 일과 완료된 할 일을 전환합니다.
3. **상세 관리**: 할 일 항목을 클릭하여 메모를 작성하거나 이미지를 업로드합니다.

## 📱 화면 구성

### 홈페이지 (할 일 목록)
<img width="1710" height="949" alt="image" src="https://github.com/user-attachments/assets/393c7f4f-7718-4f6d-b6a6-b5a45f92967e" />

- 진행 중인 할 일과 완료된 할 일을 분리하여 표시
- 상단 입력창을 통한 빠른 할 일 추가
- 체크박스 클릭으로 완료/진행 중 상태 전환

### 상세 페이지
<img width="1710" height="949" alt="image" src="https://github.com/user-attachments/assets/e9fd90ec-4af7-4180-8350-5f9641cb3681" />

- 할 일 제목 및 상태 수정
- 메모 작성 및 편집
- 이미지 첨부 (최대 1개, 5MB 이하, 영문 파일명)
- 할 일 삭제

### 로딩 페이지
<img width="1710" height="949" alt="image" src="https://github.com/user-attachments/assets/21b06793-e665-457b-875f-58f657e9f935" />

### Not Found 페이지
<img width="1710" height="949" alt="image" src="https://github.com/user-attachments/assets/5bb665a0-2de7-45fe-b4bf-04f360767202" />
<img width="1710" height="949" alt="image" src="https://github.com/user-attachments/assets/e9daacba-872c-4a8e-84d2-f3ad5fb6bc24" />

## 🛠️ 기술 스택

### Framework & Language

- **Next.js** 15.1.0 (App Router)
- **TypeScript** 5.x
- **React** 19.x

### Styling

- **Tailwind CSS** 4.x
- **NanumSquare** Font

### State Management & Data Fetching

- **TanStack Query (React Query) v5** - 서버 상태 관리 및 캐싱
- **Axios** - HTTP 클라이언트

### Utilities

- **clsx**, **tailwind-merge** - 조건부 클래스 병합
