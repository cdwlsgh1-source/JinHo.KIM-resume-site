# 김진호 - Field Service Engineer 프로필

DCS/자동제어 분야 Field Service Engineer 김진호의 개인 프로필 & 포트폴리오 원페이지 웹사이트입니다.

## 사용 기술

- HTML5 / CSS3 / JavaScript (Vanilla)
- Tailwind CSS (CDN)

## 주요 기능

- 원페이지 스크롤 구성: 프로필 · 성과 지표 · 기술 스택 · 프로젝트 · 경력사항 · 자격증/교육이수 · 학력 · 연락처
- 프로젝트 카드 클릭 시 회사명 · 기간 · 성과 · 역할 · 기술을 보여주는 상세 모달
- 스크롤 스파이 내비게이션 및 섹션 진입 애니메이션
- 다크 모드(기본) / 라이트 모드 토글 (선택한 테마는 localStorage에 저장)

## 실행 방법

별도의 빌드나 설치 과정 없이 `index.html`을 브라우저로 열면 바로 확인할 수 있습니다.

## 폴더 구조

```
my-profile-site/
├─ index.html          # 마크업 + Tailwind 설정
├─ style.css            # 커스텀 애니메이션, 다크/라이트 보조 스타일
├─ script.js             # 데이터(프로젝트/경력/자격증 등) + 렌더링 + 인터랙션 로직
└─ assets/
   ├─ profile.jpeg       # 프로필 사진
   └─ logos/             # 회사·자격증·교육기관 로고 이미지
```

## 콘텐츠 수정 방법

프로필, 성과 지표, 기술 스택, 프로젝트, 경력, 자격증/교육이수, 학력 데이터는 모두 `script.js` 상단의 배열(`skills`, `projects`, `careers`, `certificates`, `courses`, `educations`)에서 관리됩니다. 배열의 값만 수정하거나 항목을 추가하면 화면에 자동으로 반영됩니다.
