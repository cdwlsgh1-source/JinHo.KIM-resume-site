// ------------------------------------------------------------
// 성과 지표: 실제 데이터(projects/skills/certificates)와 경력 시작일을 기준으로
// 자동 계산되어 #stats-grid에 렌더링됩니다. 항목을 추가/수정하면 숫자도 함께 갱신됩니다.
// ------------------------------------------------------------
const careerStartDate = new Date(2022, 1, 1); // 한국하니웰(주) 입사일(2022.02) 기준

function getStats() {
  const careerYears = Math.floor((Date.now() - careerStartDate) / (1000 * 60 * 60 * 24 * 365.25));
  return [
    { value: `${careerYears}년+`, label: "실무 경력" },
    { value: `${projects.length}`, label: "완료 프로젝트" },
    { value: `${skills.length}`, label: "보유 기술 스택" },
    { value: `${certificates.length}`, label: "보유 자격증" },
  ];
}

// ------------------------------------------------------------
// 기술 스택 데이터: 이 배열에 항목을 추가/수정하면 #skills-grid에 자동 반영됩니다.
// ------------------------------------------------------------
const skills = [
  { name: "클로드 코드 (AI Tool)", icon: "🤖" },
  { name: "DCS (분산제어설비)", icon: "🏭" },
  { name: "Logic & Sequence", icon: "🔁" },
  { name: "SCADA", icon: "📡" },
  { name: "HMI", icon: "🎛️" },
  { name: "TCP/IP & Modbus Protocol", icon: "🌐" },
  { name: "Cisco Switch", icon: "🔌" },
  { name: "VMware", icon: "🖥️" },
  { name: "AutoCAD", icon: "📐" },
];

// ------------------------------------------------------------
// 프로젝트 데이터: 이 배열에 객체를 추가하면 #projects-grid 카드가 자동으로 늘어납니다.
// 카드를 클릭하면 아래 필드가 모두 모달 팝업으로 표시됩니다.
// cardTitle/cardText는 카드 미리보기 전용 문구이며, title/description은 상세 모달 전용 문구입니다.
// ------------------------------------------------------------
const projects = [
  {
    title: "Window 설정 자동화 Program 개발",
    cardTitle: "System Window 설정 시간 70% 단축",
    company: "Emerson",
    logo: "assets/logos/emerson.png",
    description: "Ovation Demo kit setup for User group conference",
    cardText: "Window 설정 자동화 Program 개발",
    tags: ["VM Ware", "Cload Code"],
    period: "26년 06월 ~ 26년 07월 (2개월)",
    role: [
      "4W1H 기반 개발 순서 6단계 세분화 및 단계별 테스트 10회 이상 수행으로 오류 재발률 0% 유지",
      "클로드 터미널 기반 실행 방식 전환으로 토큰 사용량 86% 절감",
      "팀원 기능 추가 요청 2건 협의·반영으로 요구사항 수용률 100% 달성",
    ],
    achievement: "자동화 프로그램 개발을 통해 System Window 설정 시간 70% 단축",
  },
  {
    title: "Demo 시스템 구축 및 검증",
    cardTitle: "Demo 장비 6대 설치 후 테스트 오류 0건",
    company: "Emerson",
    logo: "assets/logos/emerson.png",
    description: "Ovation Demo kit setup for User group conference",
    cardText: "Demo 시스템 구축 및 검증",
    tags: ["VM Ware", "Cisco Switch", "Putty"],
    period: "26년 05월 ~ 26년 06월 (2개월)",
    role: [
      "실물 PC–VM IP 대역 표준화와 Network Bridge 기반 Gateway 구성으로 VM–Controller 통신 장애 해소, 통신 에러율 0%",
      "Switch Configuration 분석으로 Speed·PortFast 설정 누락 식별 및 재설정 수행, 로그 수집 누락 0건",
      "표준 VM 기반 Clone 구축 방식 적용으로 Config 작업 표준화, 구축 리드타임 20분",
      "유경험자와 이슈 원인 가설 공유 및 설정 검증 협의로 네트워크 설정 방향성 합의",
    ],
    achievement: "VM Ware 시뮬레이션 반복검증을 통한 Demo 장비 6대 설치 후 테스트 오류 0건 달성",
  },
  {
    title: "네트워크 인프라 구축 및 개선",
    cardTitle: "네트워크 장애복구 100% 달성",
    company: "Emerson",
    logo: "assets/logos/emerson.png",
    description: "Network Switch Replacement",
    cardText: "네트워크 인프라 구축 및 개선",
    tags: ["LAN Tool", "Network Cable Tester"],
    period: "26년 04월 ~ 26년 05월 (1개월)",
    role: [
      "Cable Tester 기반 원인 분석으로 RJ-45 접속 불량 2건 특정하여 장애 원인 규명률 100%",
      "케이블 커팅·피복 제거 선행 분업으로 복구 리드타임 건당 5분 이내 단축",
      "외주업체와 작업 분담·일정 합의로 일일 처리량 50건 확보, 계획 대비 준수율 100% 유지.",
    ],
    achievement: "Network Cable 전수 재압착을 통해 네트워크 장애복구 100% 달성",
  },
  {
    title: "Cyber Security",
    cardTitle: "패치 성공률 100% 달성",
    company: "Honeywell",
    logo: "assets/logos/honeywell.png",
    description: "DCS Cyber Security Update (MS Patch 및 Anti-virus 설치)",
    cardText: "Cyber Security",
    tags: ["LAN Tool", "Network Cable Tester"],
    period: "25년 03월 ~ 25년 11월 (11개월)",
    role: [
      "OS 및 DCS 재설치로 MS Patch 실패 원인 제거하여 패치 성공률 100% 달성",
      "패치 내용 분석 후 레지스트리 변경으로 공유프린터 통신장애 재발율 0% 유지",
      "PC 이미지 백업 체계 구축으로 긴급 복구 소요시간 1시간 이내 단축",
      "고객과 작업 일정 조율로 제품 출하 영향 0건 유지",
    ],
    achievement: "Window MS Patch 실패 문제 제거를 통한 패치 성공률 100% 달성",
  },
 
  {
    title: "DCS 시스템 Overhaul",
    cardTitle: "긴급복구 정상화 100% 달성",
    company: "Honeywell",
    logo: "assets/logos/honeywell.png",
    description: "한화솔루션케미칼 TA DCS Overhaul 작업",
    cardText: "DCS 시스템 Overhaul",
    tags: ["Acronis", "ChatGPT"],
    period: "24년 12월 ~ 25년 02월 (3개월)",
    role: [
      "Console PC 부팅 오류를 Error Code 분석 및 RAM 카드 제거로 조치하여 장애 재발율 0% 유지",
      "정전 상황 Shutdown 발생 시 복구 시나리오 적용으로 긴급 복구 작업 1시간 내 성공률 100% 달성",
      "장애 조치사항 보고서를 통한 재발 방지 대응",
    ],
    achievement: "사전 긴급복구 메뉴얼 작성을 통한 DCS 시스템 긴급복구 정상화 100% 달성",
  },
  {
    title: "DCS 시스템 설치",
    cardTitle: "FAT/SAT 오류 검출 0건 달성",
    company: "Honeywell",
    logo: "assets/logos/honeywell.png",
    description: "Huchems 5NA 공장 DCS System Upgrade",
    cardText: "DCS 시스템 설치",
    tags: ["VM Ware", "Putty", "Cisco"],
    period: "24년 04월 ~ 24년 07월 (4개월)",
    role: [
      "시뮬레이션 기반 데이터베이스 변환 테스트로 최종 적용 오류 검출률 0% 달성",
      "Network 케이블 제작 및 Switch Uplink 검증 테스트로 링크 오류 발생률 0% 달성",
      "시스템 설치 체크리스트 표준화로 계획 대비 작업 기간 30% 단축",
      "준공서류 지적사항 1건 대응을 위한 현장 재조사 수행으로 준공 심사 통과율 100% 확보",
    ],
    achievement: "설치 표준 체크리스트 작성을 통해 FAT/SAT 오류 검출 0건 달성",
  },
  {
    title: "자동제어 로직설계",
    cardTitle: "제어로직 무결성 100% 달성",
    company: "Honeywell",
    logo: "assets/logos/honeywell.png",
    description: "LG화학 VCM 폐가스소각로 Logic DCS 수용작업",
    cardText: "자동제어 로직설계",
    tags: ["VM Ware"],
    period: "22년 11월 ~ 23년 03월 (5개월)",
    role: [
      "로직 개선 설계로 로직 테스트 오류발생률 0% 유지, 요구사항 충족률 100%",
      "스스케일 변환 수식 적용으로 계측기 범위 오차 0.1% 이내 보정, 제어 안정성 확보율 100%",
      "시뮬레이션 기반 로직 테스트 20회 수행으로 고객사 시현 오류 검출률 0% 유지",
      "PLC 벤더 Logic Diagram 오류 5건 검출 후 검증 요청으로 수정 반영률 100% 달성",
    ],
    achievement: "시뮬레이션 테스트 반복검증을 통해 제어로직 무결성 100% 달성",
  },
];

// ------------------------------------------------------------
// 경력사항 데이터: #career-list에 타임라인으로 렌더링됩니다.
// ------------------------------------------------------------
const careers = [
  {
    company: "한국에머슨(주)",
    period: "2026.04 - 재직중",
    role: "Field Service Engineer",
    bullets: [
      "Demo Kit 6대 표준 구축 및 고객 시연(Test) 성공률 100% 달성",
      "Network Cable 전수 재압착을 통해 통신 정상화 100%를 달성하고 케이블 접속 불량으로 인한 재발 장애 0건을 유지.",
    ],
  },
  {
    company: "한국하니웰(주)",
    period: "2022.02 - 2025.11",
    role: "Field Service Engineer",
    bullets: [
      "Window MS Patch 실패 문제 원인규명을 통해 시스템 정상화 100% 달성.",
      "정기점검 중 발생된 시스템 알람 100% 해소를 통해 시스템 안정성 확보.",
      "시스템 설치 메뉴얼 및 체크리스트 작성·적용을 통해 FAT 테스트 성공률 100%달성.",
      "제어로직에 대한 시뮬레이션 테스트를 통해 잠재적 오류를 사전에 식별하고 개선하여, 로직 무결성 100% 달성.",
    ],
  },
];

// ------------------------------------------------------------
// 자격증 데이터: #certificates-grid에 렌더링됩니다.
// ------------------------------------------------------------
const certificates = [
  { name: "CCNA (Cisco Certified Network Associate)", issuer: "Cisco", date: "2025.09.14", result: "Pass", logo: "assets/logos/cisco.png" },
  { name: "네트워크 관리사 2급", issuer: "한국정보통신자격협회", date: "2023.12.12", result: "Pass", logo: "assets/logos/korea-cert.png" },
  { name: "기계설계산업기사", issuer: "고용노동부", date: "2020.09.11", result: "Pass", logo: "assets/logos/korea-cert.png" },
  { name: "건설기계설비기사", issuer: "국토교통부", date: "2020.09.11", result: "Pass", logo: "assets/logos/korea-cert.png" },
  { name: "일반기계기사", issuer: "산업통상자원부", date: "2020.06.26", result: "Pass", logo: "assets/logos/korea-cert.png" },
  { name: "TOEIC", issuer: "ETS", date: "2020.11.22", result: "750점", emoji: "🔤" },
];

// ------------------------------------------------------------
// 교육 이수 데이터: #courses-grid에 렌더링됩니다.
// ------------------------------------------------------------
const courses = [
  { name: "클로드 코드 완벽 마스터:<br>AI 개발 워크플로우 기초부터 실전까지", institute: "인프런", period: "2026.06 - Present", logo: "assets/logos/claude.png" },
  { name: "혼자 공부하는 클로드 코딩", institute: "한빛미디어", period: "2026.06", logo: "assets/logos/claude.png" },
  { name: "AZ-900 기초과정", institute: "인프런", period: "2026.06", logo: "assets/logos/microsoft.png" },
  { name: "Cisco CCNA 200-301 완전정복", institute: "Udemy", period: "2025.06 - 2025.09", logo: "assets/logos/cisco.png" },
  { name: "이것이 Window Server 2016 서버다", institute: "한빛미디어", period: "2022.06 - 2022.07", logo: "assets/logos/microsoft.png" },
];

// ------------------------------------------------------------
// 학력 데이터: #education-list에 렌더링됩니다.
// ------------------------------------------------------------
const educations = [
  { school: "전남대학교", degree: "기관시스템공학 전공 학사", period: "2014.03 - 2021.02", location: "여수", gpa: "3.27/4.5" },
  { school: "광주제일고등학교", degree: "이과", period: "2011.03 - 2014.02", location: "광주" },
];

// ------------------------------------------------------------
// 렌더링 (실제 화면에 보이는 섹션 순서: 통계 → 기술스택 → 프로젝트 → 경력 → 자격증/교육이수 → 학력)
// ------------------------------------------------------------
function renderStats() {
  const grid = document.getElementById("stats-grid");
  grid.innerHTML = getStats()
    .map(
      (stat) => `
      <div class="rounded-2xl bg-slate-50 border border-slate-200 dark:bg-white/5 dark:border-white/10 px-4 py-6 text-center">
        <p class="text-3xl font-extrabold text-slate-900 dark:text-white mb-1">${stat.value}</p>
        <p class="text-sm text-slate-500 dark:text-slate-400">${stat.label}</p>
      </div>
    `
    )
    .join("");
}

function renderSkills() {
  const grid = document.getElementById("skills-grid");
  grid.innerHTML = skills
    .map(
      (skill) => `
      <div class="flex items-center gap-3 rounded-xl bg-slate-50 border border-slate-200 dark:bg-white/5 dark:border-white/10 px-4 py-4 hover:border-brand-400/50 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
        <span class="text-2xl">${skill.icon}</span>
        <span class="font-medium text-slate-700 dark:text-slate-200">${skill.name}</span>
      </div>
    `
    )
    .join("");
}

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  grid.innerHTML = projects
    .map(
      (project, index) => `
      <div class="project-card fade-in flex flex-col rounded-2xl bg-slate-50 border border-slate-200 dark:bg-white/5 dark:border-white/10 p-6 cursor-pointer" data-index="${index}" tabindex="0" role="button" aria-haspopup="dialog">
        <img src="${project.logo}" alt="${project.company} 로고" class="w-10 h-10 object-contain mb-4" />
        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">${project.cardTitle}</h3>
        <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">${project.cardText}</p>
        <div class="mt-auto flex flex-wrap gap-2">
          ${project.tags
            .map(
              (tag) =>
                `<span class="text-xs font-semibold text-brand-300 bg-brand-500/10 rounded-full px-3 py-1">${tag}</span>`
            )
            .join("")}
        </div>
      </div>
    `
    )
    .join("");

  observeFadeIns();
}

function renderCareers() {
  const list = document.getElementById("career-list");
  list.innerHTML = careers
    .map(
      (career) => `
      <div class="career-item relative pl-8">
        <h3 class="text-lg font-bold text-slate-900 dark:text-white">${career.company}</h3>
        <p class="text-sm text-brand-400 font-semibold mb-3">${career.role} · ${career.period}</p>
        <ul class="flex flex-col gap-1.5 text-sm text-slate-500 dark:text-slate-400 leading-relaxed list-disc list-inside">
          ${career.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
        </ul>
      </div>
    `
    )
    .join("");
}

function renderLogoBadge(item) {
  if (item.logo) {
    return `<img src="${item.logo}" alt="${item.issuer || item.institute || ""} 로고" class="w-9 h-9 object-contain flex-shrink-0" />`;
  }
  return `<span class="w-9 h-9 flex items-center justify-center text-xl flex-shrink-0">${item.emoji}</span>`;
}

function renderCertificates() {
  const grid = document.getElementById("certificates-grid");
  grid.innerHTML = certificates
    .map(
      (cert) => `
      <div class="rounded-2xl bg-slate-50 border border-slate-200 dark:bg-white/5 dark:border-white/10 p-5">
        <div class="flex items-start gap-3 mb-1">
          ${renderLogoBadge(cert)}
          <div>
            <p class="font-bold text-slate-900 dark:text-white">${cert.name}</p>
            <p class="text-sm text-slate-500 dark:text-slate-400">${cert.issuer}</p>
          </div>
        </div>
        <div class="flex items-center justify-between mt-2">
          <p class="text-xs text-brand-400 font-semibold">${cert.date}</p>
          <span class="text-xs font-semibold text-brand-300 bg-brand-500/10 rounded-full px-3 py-1">${cert.result}</span>
        </div>
      </div>
    `
    )
    .join("");
}

function renderCourses() {
  const grid = document.getElementById("courses-grid");
  grid.innerHTML = courses
    .map(
      (course) => `
      <div class="rounded-2xl bg-slate-50 border border-slate-200 dark:bg-white/5 dark:border-white/10 p-5">
        <div class="flex items-start gap-3 mb-1">
          ${renderLogoBadge(course)}
          <div>
            <p class="font-bold text-slate-900 dark:text-white">${course.name}</p>
            <p class="text-sm text-slate-500 dark:text-slate-400">${course.institute}</p>
          </div>
        </div>
        <p class="text-xs text-brand-400 font-semibold mt-2">${course.period}</p>
      </div>
    `
    )
    .join("");
}

function renderEducations() {
  const list = document.getElementById("education-list");
  list.innerHTML = educations
    .map(
      (edu) => `
      <div class="flex items-center justify-between gap-4 rounded-2xl bg-slate-50 border border-slate-200 dark:bg-white/5 dark:border-white/10 p-5">
        <div>
          <p class="font-bold text-slate-900 dark:text-white">${edu.school}</p>
          <p class="text-sm text-slate-500 dark:text-slate-400">${edu.degree} · ${edu.location}</p>
          ${edu.gpa ? `<p class="text-xs text-brand-400 font-semibold mt-1">학점 ${edu.gpa}</p>` : ""}
        </div>
        <p class="text-sm text-brand-400 font-semibold whitespace-nowrap">${edu.period}</p>
      </div>
    `
    )
    .join("");
}

// ------------------------------------------------------------
// 프로젝트 상세 모달
// ------------------------------------------------------------
const numberEmojis = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"];

function numberEmoji(index) {
  return numberEmojis[index] || `${index + 1}.`;
}

const projectModal = document.getElementById("project-modal");
const projectModalBackdrop = document.getElementById("project-modal-backdrop");
const projectModalClose = document.getElementById("project-modal-close");
const projectsGrid = document.getElementById("projects-grid");

function openProjectModal(project) {
  document.getElementById("modal-title").textContent = project.title;
  document.getElementById("modal-company").textContent = project.company;
  const companyLogo = document.getElementById("modal-company-logo");
  companyLogo.src = project.logo;
  companyLogo.alt = `${project.company} 로고`;
  document.getElementById("modal-description").textContent = project.description;
  document.getElementById("modal-period").textContent = project.period;
  document.getElementById("modal-role").innerHTML = project.role
    .map((line, i) => `<li class="flex items-start gap-2"><span>${numberEmoji(i)}</span><span>${line}</span></li>`)
    .join("");
  document.getElementById("modal-achievement").textContent = project.achievement;
  document.getElementById("modal-tags").innerHTML = project.tags
    .map(
      (tag) =>
        `<span class="text-xs font-semibold text-brand-300 bg-brand-500/10 rounded-full px-3 py-1">${tag}</span>`
    )
    .join("");

  projectModal.classList.remove("hidden");
  projectModal.classList.add("flex");
  document.body.classList.add("modal-open");
}

function closeProjectModal() {
  projectModal.classList.add("hidden");
  projectModal.classList.remove("flex");
  document.body.classList.remove("modal-open");
}

projectsGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".project-card");
  if (!card) return;
  openProjectModal(projects[Number(card.dataset.index)]);
});

projectsGrid.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest(".project-card");
  if (!card) return;
  event.preventDefault();
  openProjectModal(projects[Number(card.dataset.index)]);
});

projectModalClose.addEventListener("click", closeProjectModal);
projectModalBackdrop.addEventListener("click", closeProjectModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !projectModal.classList.contains("hidden")) {
    closeProjectModal();
  }
});

// ------------------------------------------------------------
// 모바일 메뉴 토글
// ------------------------------------------------------------
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const iconOpen = document.getElementById("icon-open");
const iconClose = document.getElementById("icon-close");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  iconOpen.classList.toggle("hidden");
  iconClose.classList.toggle("hidden");
});

document.querySelectorAll(".mobile-link").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    iconOpen.classList.remove("hidden");
    iconClose.classList.add("hidden");
  });
});

// ------------------------------------------------------------
// 다크/라이트 테마 토글
// ------------------------------------------------------------
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// ------------------------------------------------------------
// 헤더 스크롤 배경 + 스크롤 스파이
// ------------------------------------------------------------
const header = document.getElementById("header");
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-link");
const mobileLinks = document.querySelectorAll(".mobile-link");

function updateHeaderBackground() {
  header.classList.toggle("scrolled", window.scrollY > 20);
}

function updateActiveNav() {
  let currentSection = sections[0]?.id;
  const scrollPosition = window.scrollY + 120;

  sections.forEach((section) => {
    if (scrollPosition >= section.offsetTop) {
      currentSection = section.id;
    }
  });

  [...navLinks, ...mobileLinks].forEach((link) => {
    link.classList.toggle("active", link.dataset.section === currentSection);
  });
}

window.addEventListener("scroll", () => {
  updateHeaderBackground();
  updateActiveNav();
});

// ------------------------------------------------------------
// 스크롤 진입 애니메이션
// ------------------------------------------------------------
function observeFadeIns() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".fade-in:not(.visible)").forEach((el) => observer.observe(el));
}

// ------------------------------------------------------------
// 초기화 (화면 순서: 통계 → 기술스택 → 프로젝트 → 경력 → 자격증 → 교육이수 → 학력)
// ------------------------------------------------------------
renderStats();
renderSkills();
renderProjects();
renderCareers();
renderCertificates();
renderCourses();
renderEducations();
updateHeaderBackground();
updateActiveNav();
observeFadeIns();
