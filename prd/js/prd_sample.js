// 부드러운 스크롤 효과
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// 스크롤 시 헤더 효과
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 100) {
    header.style.transform = "translateY(-10px)";
    header.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
  } else {
    header.style.transform = "translateY(0)";
    header.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
  }
});

// 페이지 로드 시 애니메이션 효과
document.addEventListener("DOMContentLoaded", function () {
  // 섹션들이 순차적으로 나타나는 효과
  const sections = document.querySelectorAll(".section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(section);
  });

  // 통계 카드에 숫자 카운팅 효과
  const statNumbers = document.querySelectorAll(".stat-number");
  const kpiValues = document.querySelectorAll(".kpi-value");

  const animateNumbers = (elements) => {
    elements.forEach((element) => {
      const text = element.textContent;
      const number = parseFloat(text.replace(/[^\d.]/g, ""));

      if (!isNaN(number)) {
        let current = 0;
        const increment = number / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= number) {
            current = number;
            clearInterval(timer);
          }
          element.textContent = text.replace(/\d+/, Math.floor(current));
        }, 30);
      }
    });
  };

  // 통계 카드가 보일 때 숫자 애니메이션 실행
  const statObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateNumbers(
            entry.target.querySelectorAll(".stat-number, .kpi-value")
          );
          statObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  document.querySelectorAll(".stats-grid, .kpi-grid").forEach((grid) => {
    statObserver.observe(grid);
  });
});

// 모바일 메뉴 토글 (필요시 추가)
function toggleMobileMenu() {
  const toc = document.querySelector(".toc");
  toc.classList.toggle("mobile-open");
}

// 키보드 네비게이션 지원
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    // ESC 키로 모바일 메뉴 닫기
    const toc = document.querySelector(".toc");
    toc.classList.remove("mobile-open");
  }
});

// 스크롤 진행률 표시 (Black & White 테마)
function createScrollProgress() {
  const progressBar = document.createElement("div");
  progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: #1a1a1a;
        z-index: 1000;
        transition: width 0.1s ease;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    `;
  document.body.appendChild(progressBar);

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + "%";
  });
}

// 스크롤 진행률 바 생성
createScrollProgress();
