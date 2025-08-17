# 🛩️ Sky Engineer Academy

> 차세대 항공정비 인재양성을 위한 혁신적 교육 프로그램

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-green)](https://github.com/pages)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)

## 📋 프로젝트 소개

Sky Engineer Academy는 한국공항공사의 사회공헌 아이디어 공모전을 위해 제안된 혁신적인 항공정비 인재양성 프로그램입니다. 실제 항공기 정비기술과 드론 기술을 융합한 세계 최초의 교육 모델을 제시합니다.

### ✨ 주요 특징

- 📱 **완전 반응형 디자인** - 모든 디바이스에서 최적화된 사용자 경험
- 🎨 **모던 UI/UX** - 최신 디자인 트렌드를 적용한 세련된 인터페이스
- ⚡ **인터랙티브 요소** - 스크롤 애니메이션, 카운터 효과, 탭 전환 등
- 🚀 **고성능 최적화** - 빠른 로딩 속도와 부드러운 사용자 경험
- 🎯 **접근성 고려** - 웹 접근성 가이드라인 준수

## 🎯 프로그램 하이라이트

### 3단계 혁신 커리큘럼
1. **기초 융합과정 (4주)** - 실제 B737 동체 해체·조립 실습
2. **심화 전문과정 (8주)** - 드론 자동진단 시스템 개발
3. **창업 연계과정 (4주)** - 사업계획서 작성 및 인큐베이터 입주

### 핵심 성과 목표
- 👥 **72명** - 3년간 전문인력 양성
- 🎓 **95%** - 항공정비사 자격증 취득률
- 💼 **100%** - 수료 후 6개월 내 취업률
- 🚀 **3팀+** - 연간 창업팀 배출

## 🛠️ 기술 스택

### Frontend
- **HTML5** - 시맨틱 마크업과 웹 표준 준수
- **CSS3** - Flexbox, Grid, 커스텀 속성 활용
- **JavaScript (ES6+)** - 모던 자바스크립트 문법 사용
- **Font Awesome** - 아이콘 라이브러리
- **Google Fonts** - 웹 폰트 (Noto Sans KR, Roboto)

### 개발 도구
- **Git** - 버전 관리
- **GitHub Pages** - 호스팅 및 배포
- **GitHub Actions** - CI/CD 자동화

### 주요 기능
- 📊 **인터랙티브 카운터** - 성과 지표 애니메이션
- 🎨 **탭 시스템** - 프로그램 단계별 정보 표시
- 🖼️ **갤러리 필터링** - 카테고리별 이미지 분류
- ❓ **FAQ 아코디언** - 접고 펼치는 질문/답변
- 📝 **지원서 모달** - 팝업 폼과 유효성 검사
- 🔝 **스크롤 투 탑** - 페이지 상단 이동 버튼

## 📁 프로젝트 구조

```
sky-engineer-academy-website/
├── 📄 index.html                 # 메인 HTML 파일
├── 📁 css/
│   ├── 🎨 style.css             # 메인 스타일시트
│   └── ✨ animations.css        # 애니메이션 스타일
├── 📁 js/
│   ├── ⚙️ main.js               # 메인 자바스크립트
│   └── 🎭 animations.js         # 애니메이션 컨트롤러
├── 📁 images/                    # 이미지 파일들
├── 📁 assets/                    # 기타 에셋 파일들
├── 📁 .github/
│   └── 📁 workflows/
│       └── 🚀 deploy.yml        # GitHub Pages 배포 설정
├── 📄 README.md                  # 프로젝트 문서
└── 📄 .gitignore                 # Git 무시 파일 설정
```

## 🚀 설치 및 실행

### 1. 저장소 클론
```bash
git clone https://github.com/yourusername/sky-engineer-academy-website.git
cd sky-engineer-academy-website
```

### 2. 로컬 서버 실행
```bash
# Python 3을 사용하는 경우
python -m http.server 8000

# 또는 Node.js의 live-server 사용
npx live-server
```

### 3. 브라우저에서 확인
```
http://localhost:8000
```

## 🌐 배포

이 프로젝트는 GitHub Pages를 통해 자동으로 배포됩니다.

### GitHub Pages 설정
1. GitHub 저장소의 Settings → Pages로 이동
2. Source를 "GitHub Actions"로 선택
3. main 브랜치에 push하면 자동 배포

### 수동 배포
```bash
# 변경사항 커밋
git add .
git commit -m "Update website"
git push origin main
```

## 💡 주요 기능 설명

### 스크롤 애니메이션
- Intersection Observer API를 활용한 성능 최적화
- 요소가 뷰포트에 들어올 때 애니메이션 트리거
- CPU 사용량 최소화와 부드러운 애니메이션 보장

### 반응형 디자인
- Mobile First 접근법 적용
- CSS Grid와 Flexbox를 활용한 유연한 레이아웃
- 브레이크포인트: 480px, 768px, 1024px

### 성능 최적화
- 이미지 lazy loading 구현
- CSS와 JavaScript 파일 분리로 관리성 향상
- 최소한의 외부 의존성으로 빠른 로딩 속도

## 🎨 디자인 시스템

### 컬러 팔레트
- **Primary**: #667eea (Blue)
- **Secondary**: #764ba2 (Purple)
- **Accent**: #ff6b6b (Red)
- **Success**: #4ecdc4 (Teal)
- **Text**: #333333 (Dark Gray)

### 타이포그래피
- **Headers**: Noto Sans KR (한글), Roboto (영문)
- **Body**: Noto Sans KR (한글), Roboto (영문)
- **크기**: 16px 기본, 반응형 스케일링

### 애니메이션
- **Duration**: 0.3s ~ 1s
- **Easing**: ease, ease-in-out, cubic-bezier
- **Types**: fade, slide, scale, rotate

## 📱 브라우저 지원

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ⚠️ IE 11 (제한적 지원)

## 🔧 개발 가이드

### CSS 구조
```css
/* 1. Reset & Base */
/* 2. Layout Components */
/* 3. UI Components */
/* 4. Utilities */
/* 5. Responsive */
```

### JavaScript 모듈
- `main.js`: 핵심 기능 및 이벤트 리스너
- `animations.js`: 고급 애니메이션 컨트롤러

### 네이밍 컨벤션
- **CSS**: BEM 방법론 사용
- **JavaScript**: camelCase
- **파일명**: kebab-case

## 📊 성능 메트릭

- 🚀 **First Contentful Paint**: < 1.5s
- ⚡ **Largest Contentful Paint**: < 2.5s
- 📱 **Mobile-Friendly**: 100%
- ♿ **Accessibility**: WCAG 2.1 AA 준수

## 🤝 기여하기

1. 이 저장소를 Fork합니다
2. 새로운 기능 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add amazing feature'`)
4. 브랜치에 Push합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 👨‍💼 제안자 정보

**박용환**
- 📧 Email: sanoramyun8@gmail.com
- 📱 Phone: 010-7939-3123
- 🏠 Address: 경기도 용인시 수지구 성복2로 126
- 💼 직업: 아이디어 공모전 전문 콘텐츠 크리에이터

## 📞 문의사항

프로젝트에 대한 문의사항이나 제안이 있으시면 언제든지 연락해 주세요.

---

<div align="center">

**🛩️ Sky Engineer Academy - 미래 항공산업의 주역을 양성합니다 🛩️**

Made with ❤️ by 박용환 | 2025

</div>