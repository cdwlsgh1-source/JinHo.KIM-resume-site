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
// ------------------------------------------------------------
const projects = [
  {
    title: "시스템 구축 및 검증",
    company: "Emerson",
    logo: "assets/logos/emerson.png",
    description: "Ovation Demo kit setup for User group conference",
    tags: ["VM Ware", "Cisco Switch", "Putty"],
    period: "26년 05월 ~ 26년 06월 (2개월)",
    role: [
      "VM–Controller 간 통신 장애를 실물 PC와 VM의 IP 대역 표준화 및 Network Bridge 기반 Gateway 구성으로 해결하여 통신 에러율 0%를 달성.",
      "Switch Configuration 분석을 통해 Speed 및 PortFast 설정 누락을 식별하고 재설정하여 Controller Log 수집 누락 0건을 달성.",
      "표준 VM 기반 Clone 구축 방식을 적용하여 Demo Kit 6대의 Config 작업을 표준화하고 구축 생산성을 향상.",
    ],
    achievement: "Demo Kit 6대 표준 구축 및 고객 시연(Test) 성공률 100% 달성",
  },
  {
    title: "네트워크 인프라 구축 및 개선",
    company: "Emerson",
    logo: "assets/logos/emerson.png",
    description: "Network Switch Replacement - 한국중부발전 신서천본부",
    tags: ["LAN Tool", "Network Cable Tester"],
    period: "26년 04월 ~ 26년 05월 (1개월)",
    role: [
      "Network Switch 100Mbps→1Gbps 교체 이후 발생한 통신 장애를 Cable Tester 기반 원인 분석을 통해 RJ-45 커넥터 접속 불량으로 진단하고 재압착 작업으로 통신 정상화 100%를 달성.",
      "100여 개 이상의 Network Cable 복구 과정에서 병목이던 케이블 커팅·피복 제거 작업을 선제 수행하여 작업을 분업화하고 케이블 복구 시간을 건당 5분 이내로 단축.",
      "Network 설치 외주업체와 작업 분담 체계를 구축하여 대량 재작업 상황에서도 시스템 복구 일정을 지연 없이 준수.",
    ],
    achievement: "Network Cable 전수 재압착을 통해 통신 정상화 100%를 달성하고 케이블 접속 불량으로 인한 재발 장애 0건을 유지.",
  },
  {
    title: "Cyber Security",
    company: "Honeywell",
    logo: "assets/logos/honeywell.png",
    description: "DCS Cyber Security Update (MS Patch 및 Anti-virus 설치)",
    tags: ["LAN Tool", "Network Cable Tester"],
    period: "25년 03월 ~ 25년 11월 (11개월)",
    role: [
      "Window Server System File 손상으로 인한 MS Patch 실패 문제를 OS 및 DCS System 재설치를 통해 Patch 성공률 100% 달성.",
      "Patch이후 공유프린터 통신장애를 패치내용 분석을 통해 문제원인을 특정하고, 레지스트리를 변경하여 장애 재발율 0%으로 유지.",
      "작업 중 발생 가능한 시스템 장애에 대비해 PC 이미지 백업을 구축하여, 긴급 상황 시 복구 시간을 1시간 이내로 단축.",
      "공정의 제품 출하 일정을 피해 작업을 수행하기 위해 고객과의 지속적인 소통하여 일정 조율.",
    ],
    achievement: "Window MS Patch 실패 문제 원인규명을 통해 시스템 정상화 100% 달성.",
  },
  {
    title: "시스템 유지보수",
    company: "Honeywell",
    logo: "assets/logos/honeywell.png",
    description: "정기 유지보수",
    tags: ["LAN Tool", "Network Cable Tester"],
    period: "25년 01월 ~ 25년 03월 (3개월)",
    role: [
      "이미지 복원 프로그램을 활용을 통해 Console PC System 재설치 시간 평균 1일에서 3시간으로 단축.",
      "통신 계측Range 수정을 통해 지속적으로 발생하는 통신 장애 알람클리어 및 에러카운트률 0% 달성.",
      "정기점검 항목 체크리스트화를 통해 정기점검 소요시간 25% 단축.",
      "정기점검중 발생한 문제를 고객사에게 보고 및 즉각 조치하여 시스템 안정성 확보.",
    ],
    achievement: "정기점검 중 발생된 시스템 알람 100% 해소를 통해 시스템 안정성 확보.",
  },
  {
    title: "시스템 Overhaul",
    company: "Honeywell",
    logo: "assets/logos/honeywell.png",
    description: "한화솔루션케미칼 TA DCS Overhaul 작업",
    tags: ["Acronis", "ChatGPT"],
    period: "24년 12월 ~ 25년 02월 (3개월)",
    role: [
      "Console PC 부팅 문제를 Chat GPT를 활용하여 Error Code 발견 및 RAM 카드 제거 조치를 통해 장애 재발율 0%으로 유지.",
      "정전으로 인한 시스템 Shutdown 발생시 긴급 복구 작업 수행을 통해 시스템 정상화 1시간 소요.",
      "작업중 발생한 문제에 대한 조치사항을 보고서 작성을 통해 향후 대응방안을 전달.",
      "24년 공사도급신고 서류를 기반으로 작성한 절차서를 통해 25년 도급신고 1차 반려후 2차 통과.",
    ],
    achievement: "Overhaul 작업중 발생한 시스템 장애 100% 클리어.",
  },
  {
    title: "시스템 설치",
    company: "Honeywell",
    logo: "assets/logos/honeywell.png",
    description: "Huchems 5NA 공장 DCS System Upgrade",
    tags: ["VM Ware", "Putty", "Cisco"],
    period: "24년 04월 ~ 24년 07월 (4개월)",
    role: [
      "시뮬레이션을 활용한 데이터베이스 변환 테스트한 결과, 최종 데이터 적용시 오류 검출률 0% 달성.",
      "Network 케이블 제작을 통해 Switch Uplink 검증테스트 결과 오류발생률 0% 달성.",
      "Switch IOS 최신 펌웨어 업데이트를 실시하여 운영 중 장애 발생건수 0건을 유지하며 네트워크 안정성 100% 달성.",
      "시스템 설치 체크리스트를 작성을 통해 프로젝트 계획 일정 대비 작업 기간을 30% 단축.",
      "준공서류 작성시 고객사 검토항목 13건중 1건의 수정사항을 보안하기 위해, 현장 재조사를 실시하여 수정한 결과 준공 심사 통과.",
    ],
    achievement: "시스템 설치 메뉴얼 및 체크리스트 작성·적용을 통해 FAT 테스트 성공률 100%달성",
  },
  {
    title: "자동제어 로직설계",
    company: "Honeywell",
    logo: "assets/logos/honeywell.png",
    description: "LG화학 VCM 폐가스소각로 Logic DCS 수용작업",
    tags: ["VM Ware"],
    period: "22년 11월 ~ 23년 03월 (5개월)",
    role: [
      "로직 계선 설계를 통해 18개의 로직 테스트 오류발생률 0% 달성 및 벤더사 로직 설계 요구사항 100% 충족.",
      "스케일 변환 수식을 적용하여 두 계측기의 범위를 0.1% 이내로 보정한 결과, 제어 안정성을 100% 확보.",
      "시뮬레이션을 활용한 20회 이상 로직테스트 결과를 바탕으로, 고객사 로직 시현에서 로직 오류 검출률 0% 달성.",
      "PLC 벤더사 Logic Diagram 오류 5건 검출 및 검증 요청을 통해 안정적인 로직을 설계.",
    ],
    achievement: "제어로직에 대한 시뮬레이션 테스트를 통해 잠재적 오류를 사전에 식별하고 개선하여, 로직 무결성 100% 달성.",
  },
];

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
// 렌더링
// ------------------------------------------------------------
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
        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">${project.title}</h3>
        <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">${project.description}</p>
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
// 초기화
// ------------------------------------------------------------
renderSkills();
renderProjects();
renderStats();
renderCareers();
renderCertificates();
renderCourses();
renderEducations();
updateHeaderBackground();
updateActiveNav();
observeFadeIns();
