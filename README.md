# PRD Template & Design Thinking Quiz

Product Requirements Document (PRD) 작성을 위한 템플릿과 디자인씽킹 학습을 위한 퀴즈 시스템입니다.

## 🚀 GitHub Pages 배포

이 프로젝트는 GitHub Pages를 통해 배포됩니다:

- **메인 페이지**: [https://coding-ghost-leejey.github.io/deepdive_6/](https://coding-ghost-leejey.github.io/deepdive_6/)
- **PRD 템플릿**: [https://coding-ghost-leejey.github.io/deepdive_6/prd/prd_template.html](https://coding-ghost-leejey.github.io/deepdive_6/prd/prd_template.html)
- **PRD 샘플**: [https://coding-ghost-leejey.github.io/deepdive_6/prd/prd_sample.html](https://coding-ghost-leejey.github.io/deepdive_6/prd/prd_sample.html)
- **디자인씽킹 퀴즈**: [https://coding-ghost-leejey.github.io/deepdive_6/quiz_1.html](https://coding-ghost-leejey.github.io/deepdive_6/quiz_1.html)

## 📁 프로젝트 구조

```
deepdive_6/
├── index.html              # 메인 페이지
├── quiz_1.html            # 디자인씽킹 퀴즈
├── prd/                   # PRD 관련 파일들
│   ├── prd_template.html  # PRD 작성 템플릿
│   ├── prd_sample.html    # PRD 샘플 문서
│   ├── css/
│   │   ├── style.css      # 기본 스타일
│   │   └── prd_template.css # PRD 템플릿 스타일
│   └── js/
│       ├── script.js      # 기본 스크립트
│       └── prd_template.js # PRD 템플릿 스크립트
└── README.md
```

## ✨ 주요 기능

### PRD 템플릿

- **체계적인 섹션 구성**: Title, Overview, Dependencies & Risks, Success Criteria 등
- **동적 콘텐츠 관리**: Persona, User Stories, Features 등 추가/삭제 가능
- **자동 저장**: 로컬 스토리지에 자동 저장
- **다양한 내보내기**: JSON, HTML, PDF 형식으로 내보내기
- **키보드 단축키**: Ctrl+S (저장), Ctrl+E (내보내기), Ctrl+P (PDF), Ctrl+R (초기화)

### 디자인씽킹 퀴즈

- **공감 단계**: 10문제 (5Whys, 공감하기, 공감지도 등)
- **문제정의 단계**: 10문제 (Impact/Effort Matrix, 정성적/정량적 데이터 수집 등)
- **인터랙티브 답안**: "해답보기" 버튼으로 답안 확인
- **점수 시스템**: 자동 점수 계산 및 결과 표시

## 🛠️ 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: 반응형 디자인, Flexbox, Grid
- **JavaScript (ES6+)**: 동적 콘텐츠 관리, 로컬 스토리지
- **외부 라이브러리**:
  - jsPDF: PDF 생성
  - html2canvas: HTML을 이미지로 변환

## 📱 반응형 디자인

모든 페이지는 모바일, 태블릿, 데스크톱에서 최적화된 경험을 제공합니다.

## 🎨 디자인 테마

- **Black & White 테마**: 깔끔하고 전문적인 디자인
- **Product School 스타일**: 업계 표준 PRD 템플릿 디자인
- **접근성 고려**: 키보드 네비게이션, 포커스 스타일, 색상 대비

## 📝 사용법

1. **PRD 작성**: `prd/prd_template.html`에서 체계적으로 PRD 작성
2. **PRD 샘플 확인**: `prd/prd_sample.html`에서 완성된 PRD 예시 확인
3. **퀴즈 학습**: `quiz_1.html`에서 디자인씽킹 개념 학습
4. **데이터 관리**: 자동 저장된 데이터를 JSON/HTML/PDF로 내보내기

## 🔧 로컬 개발

```bash
# 저장소 클론
git clone https://github.com/coding-ghost-leejey/deepdive_6.git

# 프로젝트 디렉토리로 이동
cd deepdive_6

# 로컬 서버 실행 (Python 3)
python -m http.server 8000

# 브라우저에서 접속
open http://localhost:8000
```

## 📄 라이선스

MIT License

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
