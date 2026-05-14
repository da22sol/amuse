# AMUSE Clone Coding

> 감성 뷰티 브랜드 AMUSE 공식 웹사이트를 리디자인 및 클론코딩한 반응형 웹 프로젝트입니다.  
> 사용자 인터랙션과 UI 흐름 구현에 집중하여 제작했습니다.

🔗 Live Demo  
https://da22sol.github.io/amuse

---

## Preview

- 메인 비주얼 슬라이드
- 베스트 상품 인터랙션
- 레이어 팝업
- 반응형 모바일 UI
- About 서브페이지 구현

---

## Tech Stack

HTML5 · CSS3 · JavaScript · Swiper.js

---

## Key Features

### Interactive Best Product Slider
베스트 상품 클릭 시 좌측 메인 슬라이더가 해당 이미지로 자연스럽게 이동하도록 연동 구현

### Layer Popup Interaction
레이어 팝업 오픈 및 `setTimeout`을 활용한 5초 자동 닫힘 기능 구현

### Side Menu UI
사이드 메뉴 토글 및 외부 영역 클릭 시 자동 닫힘 처리 구현

### Infinite Text Animation
CSS `keyframes` 기반 무한 텍스트 흐르기 애니메이션 구현

### Responsive Layout
모바일 / PC 전용 섹션 분기 구성  
(`section5`, `section5_mo`)

### CSS Architecture
역할별 CSS 파일 분리 관리

- common.css
- main.css
- sub.css

### Sub Page
`about.html` 서브페이지 제작

---

## Folder Structure

```bash id="v4d8fi"
amuse/
├── index.html
├── about.html
├── css/
│   ├── common.css
│   ├── main.css
│   └── sub.css
├── js/
├── images/
└── fonts/
