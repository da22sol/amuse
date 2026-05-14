# AMUSE Clone Coding

> 기존 어뮤즈 사이트를 분석하고 사용자 경험 개선을 목표로 리디자인 및 퍼블리싱한 반응형 웹 프로젝트입니다.

🔗 Live Demo  
https://da22sol.github.io/amuse

🔗 Documentation  
https://frosted-brook-b69.notion.site/72dd5648876e402b8e895573b571fd2a?pvs=74

---

## Overview

기존 어뮤즈픽 섹션은 상품과 화보 이미지가 하나의 슬라이드 안에 함께 배치되어 있어  
사용자가 원하는 상품을 탐색하기 불편하다고 판단했습니다.

리디자인 과정에서는 상품과 화보 영역을 분리하고,  
상품 클릭 시 해당 화보 이미지가 연동되도록 인터랙션을 개선하여  
사용자가 인기 상품을 보다 직관적으로 탐색할 수 있도록 구현했습니다.

---

## Tech Stack

- HTML5
- CSS3
- JavaScript
- Swiper.js

---

## Key Features

### Best Product Interaction
- 상품 클릭 시 좌측 화보 슬라이더가 해당 이미지로 이동하도록 구현
- Sticky 레이아웃을 활용하여 화보 이미지를 고정하고 상품 탐색 UX 개선

### Layer Popup
- 레이어 팝업 구현
- `setTimeout`을 활용한 5초 자동 닫힘 기능 구현

### Side Menu
- 사이드 메뉴 토글 기능 구현
- 외부 영역 클릭 시 자동 닫힘 처리

### Infinite Text Animation
- CSS `keyframes` 기반 무한 텍스트 애니메이션 구현

### Responsive Layout
- 모바일 / PC 전용 섹션 분리 구성
- 반응형 레이아웃 대응

### Sub Page
- `about.html` 서브페이지 제작

---

## CSS Structure

```bash
style/
├── main/
│   └── main.css
├── page/
│   └── about.css
└── style.css
