// 도움말 토글 기능
function toggleHelp(element) {
  const helpContent = element.parentElement.nextElementSibling;
  helpContent.classList.toggle("show");
}

// 히스토리 아이템 추가
function addHistoryItem() {
  const historyList = document.getElementById("history-list");
  const newItem = document.createElement("div");
  newItem.className = "history-item";
  newItem.innerHTML = `
        <input type="date" class="date-input">
        <input type="text" placeholder="버전 (예: v1.0)" class="version-input">
        <input type="text" placeholder="변경자" class="author-input">
        <input type="text" placeholder="변경 내용" class="change-input">
        <button class="add-btn" onclick="removeHistoryItem(this)">-</button>
    `;
  historyList.appendChild(newItem);
}

// 히스토리 아이템 제거
function removeHistoryItem(button) {
  button.parentElement.remove();
}

// 타임라인 아이템 추가
function addTimelineItem() {
  const timelineContainer = document.querySelector(".timeline-container");
  const newItem = document.createElement("div");
  newItem.className = "timeline-item";
  newItem.innerHTML = `
        <input type="date" class="date-input">
        <input type="text" placeholder="마일스톤 이름" class="milestone-input">
        <textarea placeholder="설명" class="textarea-input small"></textarea>
        <button class="add-btn" onclick="removeTimelineItem(this)">-</button>
    `;
  timelineContainer.appendChild(newItem);
}

// 타임라인 아이템 제거
function removeTimelineItem(button) {
  button.parentElement.remove();
}

// 페르소나 추가
function addPersona() {
  const personaContainer = document.querySelector(".persona-container");
  const newItem = document.createElement("div");
  newItem.className = "persona-item";
  newItem.innerHTML = `
        <input type="text" placeholder="페르소나 이름" class="text-input">
        <textarea placeholder="페르소나 설명 (나이, 직업, 니즈, 목표 등)" class="textarea-input"></textarea>
        <button class="add-btn" onclick="removePersona(this)">-</button>
    `;
  personaContainer.appendChild(newItem);
}

// 페르소나 제거
function removePersona(button) {
  button.parentElement.remove();
}

// 시나리오 추가
function addScenario() {
  const scenarioContainer = document.querySelector(".scenario-container");
  const newItem = document.createElement("div");
  newItem.className = "scenario-item";
  newItem.innerHTML = `
        <input type="text" placeholder="시나리오 제목" class="text-input">
        <textarea placeholder="사용자 시나리오를 단계별로 설명하세요..." class="textarea-input"></textarea>
        <button class="add-btn" onclick="removeScenario(this)">-</button>
    `;
  scenarioContainer.appendChild(newItem);
}

// 시나리오 제거
function removeScenario(button) {
  button.parentElement.remove();
}

// 스토리 추가
function addStory() {
  const storyContainer = document.querySelector(".story-container");
  const newItem = document.createElement("div");
  newItem.className = "story-item";
  newItem.innerHTML = `
        <textarea placeholder="As a [사용자], I want [기능], so that [목적]" class="textarea-input"></textarea>
        <button class="add-btn" onclick="removeStory(this)">-</button>
    `;
  storyContainer.appendChild(newItem);
}

// 스토리 제거
function removeStory(button) {
  button.parentElement.remove();
}

// 기능 추가
function addFeature(type) {
  const featureContainer = document.querySelector(".feature-container");
  const newItem = document.createElement("div");
  newItem.className = "feature-item";

  if (type === "in") {
    newItem.innerHTML = `
            <input type="text" placeholder="기능 이름" class="text-input">
            <textarea placeholder="기능 설명" class="textarea-input small"></textarea>
            <select class="priority-select">
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>
            <button class="add-btn" onclick="removeFeature(this)">-</button>
        `;
  } else {
    newItem.innerHTML = `
            <input type="text" placeholder="기능 이름" class="text-input">
            <textarea placeholder="제외 이유" class="textarea-input small"></textarea>
            <button class="add-btn" onclick="removeFeature(this)">-</button>
        `;
  }

  featureContainer.appendChild(newItem);
}

// 기능 제거
function removeFeature(button) {
  button.parentElement.remove();
}

// 요구사항 추가
function addRequirement() {
  const requirementsContainer = document.querySelector(
    ".requirements-container"
  );
  const newItem = document.createElement("div");
  newItem.className = "requirement-item";
  newItem.innerHTML = `
        <select class="req-type-select">
            <option value="functional">기능적 요구사항</option>
            <option value="non-functional">비기능적 요구사항</option>
        </select>
        <textarea placeholder="요구사항을 구체적으로 설명하세요..." class="textarea-input"></textarea>
        <button class="add-btn" onclick="removeRequirement(this)">-</button>
    `;
  requirementsContainer.appendChild(newItem);
}

// 요구사항 제거
function removeRequirement(button) {
  button.parentElement.remove();
}

// Q&A 추가
function addQA() {
  const qaContainer = document.querySelector(".qa-container");
  const newItem = document.createElement("div");
  newItem.className = "qa-item";
  newItem.innerHTML = `
        <input type="text" placeholder="질문" class="text-input">
        <textarea placeholder="답변" class="textarea-input small"></textarea>
        <button class="add-btn" onclick="removeQA(this)">-</button>
    `;
  qaContainer.appendChild(newItem);
}

// Q&A 제거
function removeQA(button) {
  button.parentElement.remove();
}

// PRD 저장
function savePRD() {
  const prdData = collectPRDData();
  const dataStr = JSON.stringify(prdData, null, 2);
  const dataBlob = new Blob([dataStr], { type: "application/json" });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(dataBlob);
  link.download = "prd_data.json";
  link.click();

  alert("PRD 데이터가 JSON 파일로 저장되었습니다!");
}

// PRD 데이터 수집
function collectPRDData() {
  const data = {};

  // 기본 필드들 수집
  data.title =
    document.querySelector('input[placeholder="프로젝트 이름을 입력하세요"]')
      ?.value || "";
  data.problemStatement =
    document.querySelector(
      'textarea[placeholder="해결하고자 하는 문제를 명확히 정의하세요..."]'
    )?.value || "";
  data.proposedWork =
    document.querySelector(
      'textarea[placeholder="제안하는 해결책과 접근 방법을 설명하세요..."]'
    )?.value || "";
  data.stakeHolders =
    document.querySelector(
      'textarea[placeholder="프로젝트에 영향을 미치는 이해관계자들을 나열하세요..."]'
    )?.value || "";
  data.risks =
    document.querySelector(
      'textarea[placeholder="프로젝트 성공을 방해할 수 있는 위험 요소들을 식별하세요..."]'
    )?.value || "";
  data.dependencies =
    document.querySelector(
      'textarea[placeholder="프로젝트가 의존하는 외부 요소들을 확인하세요..."]'
    )?.value || "";
  data.specific =
    document.querySelector(
      'textarea[placeholder="구체적인 목표를 설정하세요..."]'
    )?.value || "";
  data.measurable =
    document.querySelector(
      'textarea[placeholder="측정 가능한 지표를 정의하세요..."]'
    )?.value || "";
  data.achievable =
    document.querySelector(
      'textarea[placeholder="현실적으로 달성 가능한 목표를 설정하세요..."]'
    )?.value || "";
  data.relevant =
    document.querySelector(
      'textarea[placeholder="비즈니스 목표와 관련된 목표를 설정하세요..."]'
    )?.value || "";
  data.timeBound =
    document.querySelector(
      'textarea[placeholder="명확한 시간 프레임을 설정하세요..."]'
    )?.value || "";
  data.messaging =
    document.querySelector(
      'textarea[placeholder="사용자에게 전달할 핵심 메시지를 작성하세요..."]'
    )?.value || "";
  data.designs =
    document.querySelector(
      'textarea[placeholder="디자인 가이드라인과 원칙을 설명하세요..."]'
    )?.value || "";
  data.otherConsiderations =
    document.querySelector(
      'textarea[placeholder="기타 고려해야 할 사항들을 나열하세요..."]'
    )?.value || "";
  data.noGos =
    document.querySelector(
      'textarea[placeholder="절대 하지 않아야 할 것들을 명시하세요..."]'
    )?.value || "";
  data.postLaunchPlan =
    document.querySelector(
      'textarea[placeholder="출시 후 계획을 상세히 설명하세요..."]'
    )?.value || "";

  // 동적으로 추가된 아이템들 수집
  data.historyItems = collectDynamicItems(".history-item");
  data.timelineItems = collectDynamicItems(".timeline-item");
  data.personas = collectDynamicItems(".persona-item");
  data.scenarios = collectDynamicItems(".scenario-item");
  data.stories = collectDynamicItems(".story-item");
  data.featuresIn = collectDynamicItems(".feature-item");
  data.requirements = collectDynamicItems(".requirement-item");
  data.qaItems = collectDynamicItems(".qa-item");

  return data;
}

// 동적 아이템 수집
function collectDynamicItems(selector) {
  const items = [];
  const elements = document.querySelectorAll(selector);

  elements.forEach((element) => {
    const item = {};
    const inputs = element.querySelectorAll("input, textarea, select");

    inputs.forEach((input) => {
      if (input.placeholder) {
        // placeholder를 키로 사용하되, 특수문자 제거
        const key = input.placeholder.replace(/[^\w가-힣\s]/g, "").trim();
        item[key] = input.value;
      } else if (input.type === "date") {
        item["date"] = input.value;
      } else if (input.type === "text" && !input.placeholder) {
        item["text"] = input.value;
      } else if (input.tagName === "SELECT") {
        item["selection"] = input.value;
      }
    });

    // 빈 아이템이 아닌 경우만 추가
    if (Object.values(item).some((value) => value && value.trim() !== "")) {
      items.push(item);
    }
  });

  return items;
}

// PDF 내보내기
function exportPRD() {
  // 간단한 HTML 내보내기 (실제 PDF 변환은 서버나 라이브러리 필요)
  const prdData = collectPRDData();
  const htmlContent = generateHTML(prdData);

  const dataBlob = new Blob([htmlContent], { type: "text/html" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(dataBlob);
  link.download = "prd_export.html";
  link.click();

  alert("PRD가 HTML 파일로 내보내졌습니다!");
}

// HTML 생성
function generateHTML(data) {
  return `
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PRD Export - ${data.title || "Untitled Project"}</title>
    <style>
        body { 
            font-family: 'Inter', Arial, sans-serif; 
            margin: 40px; 
            line-height: 1.6;
            color: #1a1a1a;
        }
        h1, h2, h3 { color: #1a1a1a; }
        .section { 
            margin-bottom: 30px; 
            padding: 20px; 
            border: 1px solid #e5e5e5; 
            border-radius: 8px; 
            background: #f8f9fa;
        }
        .section h2 {
            border-bottom: 2px solid #1a1a1a;
            padding-bottom: 10px;
            margin-bottom: 20px;
        }
        .subsection {
            margin-bottom: 20px;
        }
        .subsection h3 {
            color: #333;
            margin-bottom: 10px;
        }
        .item {
            background: white;
            padding: 15px;
            margin-bottom: 10px;
            border-radius: 5px;
            border-left: 4px solid #1a1a1a;
        }
        .criteria-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
        }
        .criteria-item {
            background: white;
            padding: 15px;
            border-radius: 5px;
            border: 1px solid #e5e5e5;
        }
        .timeline-item {
            display: grid;
            grid-template-columns: 150px 200px 1fr;
            gap: 15px;
            align-items: start;
            background: white;
            padding: 15px;
            margin-bottom: 10px;
            border-radius: 5px;
            border: 1px solid #e5e5e5;
        }
        .persona-item, .scenario-item, .story-item, .feature-item, .requirement-item, .qa-item {
            background: white;
            padding: 15px;
            margin-bottom: 10px;
            border-radius: 5px;
            border: 1px solid #e5e5e5;
        }
        .history-item {
            display: grid;
            grid-template-columns: 120px 100px 150px 1fr;
            gap: 15px;
            align-items: start;
            background: white;
            padding: 15px;
            margin-bottom: 10px;
            border-radius: 5px;
            border: 1px solid #e5e5e5;
        }
        .priority-high { border-left-color: #dc3545; }
        .priority-medium { border-left-color: #ffc107; }
        .priority-low { border-left-color: #28a745; }
        .req-functional { border-left-color: #007bff; }
        .req-non-functional { border-left-color: #6f42c1; }
    </style>
</head>
<body>
    <h1>${data.title || "Untitled Project"}</h1>
    <p><strong>Generated on:</strong> ${new Date().toLocaleString()}</p>
    
    ${
      data.changeHistory
        ? `
    <div class="section">
        <h2>Change History</h2>
        ${
          data.historyItems && data.historyItems.length > 0
            ? data.historyItems
                .map(
                  (item) => `
                <div class="history-item">
                    <div><strong>Date:</strong> ${
                      item["date"] || item[""] || "N/A"
                    }</div>
                    <div><strong>Version:</strong> ${
                      item["버전 예 v1.0"] || item["버전"] || "N/A"
                    }</div>
                    <div><strong>Author:</strong> ${
                      item["변경자"] || "N/A"
                    }</div>
                    <div><strong>Changes:</strong> ${
                      item["변경 내용"] || "N/A"
                    }</div>
                </div>
            `
                )
                .join("")
            : "<p>No change history recorded.</p>"
        }
    </div>
    `
        : ""
    }
    
    <div class="section">
        <h2>Overview</h2>
        <div class="subsection">
            <h3>Problem Statement</h3>
            <p>${data.problemStatement || "Not specified"}</p>
        </div>
        <div class="subsection">
            <h3>Proposed Work</h3>
            <p>${data.proposedWork || "Not specified"}</p>
        </div>
    </div>
    
    <div class="section">
        <h2>Dependencies & Risks</h2>
        <div class="subsection">
            <h3>Stake Holders</h3>
            <p>${data.stakeHolders || "Not specified"}</p>
        </div>
        <div class="subsection">
            <h3>Risks</h3>
            <p>${data.risks || "Not specified"}</p>
        </div>
        <div class="subsection">
            <h3>Dependencies</h3>
            <p>${data.dependencies || "Not specified"}</p>
        </div>
    </div>
    
    <div class="section">
        <h2>Success Criteria</h2>
        <div class="criteria-grid">
            <div class="criteria-item">
                <h4>Specific (구체적)</h4>
                <p>${data.specific || "Not specified"}</p>
            </div>
            <div class="criteria-item">
                <h4>Measurable (측정 가능)</h4>
                <p>${data.measurable || "Not specified"}</p>
            </div>
            <div class="criteria-item">
                <h4>Achievable (달성 가능)</h4>
                <p>${data.achievable || "Not specified"}</p>
            </div>
            <div class="criteria-item">
                <h4>Relevant (관련성)</h4>
                <p>${data.relevant || "Not specified"}</p>
            </div>
            <div class="criteria-item">
                <h4>Time-bound (시간 제한)</h4>
                <p>${data.timeBound || "Not specified"}</p>
            </div>
        </div>
    </div>
    
    <div class="section">
        <h2>Messaging</h2>
        <p>${data.messaging || "Not specified"}</p>
    </div>
    
    <div class="section">
        <h2>Timeline/Release Planning</h2>
        ${
          data.timelineItems && data.timelineItems.length > 0
            ? data.timelineItems
                .map(
                  (item) => `
                <div class="timeline-item">
                    <div><strong>Date:</strong> ${
                      item["date"] || item[""] || "N/A"
                    }</div>
                    <div><strong>Milestone:</strong> ${
                      item["마일스톤 이름"] || item["text"] || "N/A"
                    }</div>
                    <div><strong>Description:</strong> ${
                      item["설명"] || "N/A"
                    }</div>
                </div>
            `
                )
                .join("")
            : "<p>No timeline items recorded.</p>"
        }
    </div>
    
    <div class="section">
        <h2>Personas</h2>
        ${
          data.personas && data.personas.length > 0
            ? data.personas
                .map(
                  (item) => `
                <div class="persona-item">
                    <h4>${
                      item["페르소나 이름"] || item["text"] || "Unnamed Persona"
                    }</h4>
                    <p>${
                      item["페르소나 설명 나이 직업 니즈 목표 등"] ||
                      item["페르소나 설명"] ||
                      "No description provided"
                    }</p>
                </div>
            `
                )
                .join("")
            : "<p>No personas defined.</p>"
        }
    </div>
    
    <div class="section">
        <h2>User Scenarios</h2>
        ${
          data.scenarios && data.scenarios.length > 0
            ? data.scenarios
                .map(
                  (item) => `
                <div class="scenario-item">
                    <h4>${
                      item["시나리오 제목"] ||
                      item["text"] ||
                      "Untitled Scenario"
                    }</h4>
                    <p>${
                      item["사용자 시나리오를 단계별로 설명하세요"] ||
                      "No scenario description provided"
                    }</p>
                </div>
            `
                )
                .join("")
            : "<p>No user scenarios defined.</p>"
        }
    </div>
    
    <div class="section">
        <h2>User Stories</h2>
        ${
          data.stories && data.stories.length > 0
            ? data.stories
                .map(
                  (item) => `
                <div class="story-item">
                    <p>${
                      item["As a 사용자 I want 기능 so that 목적"] ||
                      item["As a"] ||
                      "No user story provided"
                    }</p>
                </div>
            `
                )
                .join("")
            : "<p>No user stories defined.</p>"
        }
    </div>
    
    <div class="section">
        <h2>Features In</h2>
        ${
          data.featuresIn && data.featuresIn.length > 0
            ? data.featuresIn
                .map(
                  (item) => `
                <div class="feature-item priority-${
                  item["selection"] || "medium"
                }">
                    <h4>${
                      item["기능 이름"] || item["text"] || "Unnamed Feature"
                    }</h4>
                    <p>${item["기능 설명"] || "No description provided"}</p>
                    <p><strong>Priority:</strong> ${
                      item["selection"] || "Medium"
                    }</p>
                </div>
            `
                )
                .join("")
            : "<p>No features defined.</p>"
        }
    </div>
    
    <div class="section">
        <h2>Requirements</h2>
        ${
          data.requirements && data.requirements.length > 0
            ? data.requirements
                .map(
                  (item) => `
                <div class="requirement-item req-${
                  item["selection"] || "functional"
                }">
                    <p><strong>Type:</strong> ${
                      item["selection"] === "non-functional"
                        ? "Non-functional"
                        : "Functional"
                    }</p>
                    <p>${
                      item["요구사항을 구체적으로 설명하세요"] ||
                      "No requirement description provided"
                    }</p>
                </div>
            `
                )
                .join("")
            : "<p>No requirements defined.</p>"
        }
    </div>
    
    <div class="section">
        <h2>Features Out</h2>
        ${
          data.featuresOut && data.featuresOut.length > 0
            ? data.featuresOut
                .map(
                  (item) => `
                <div class="feature-item">
                    <h4>${
                      item["기능 이름"] || item["text"] || "Unnamed Feature"
                    }</h4>
                    <p><strong>Reason for exclusion:</strong> ${
                      item["제외 이유"] || "No reason provided"
                    }</p>
                </div>
            `
                )
                .join("")
            : "<p>No excluded features defined.</p>"
        }
    </div>
    
    <div class="section">
        <h2>Designs</h2>
        <p>${data.designs || "Not specified"}</p>
    </div>
    
    <div class="section">
        <h2>Q & A</h2>
        ${
          data.qaItems && data.qaItems.length > 0
            ? data.qaItems
                .map(
                  (item) => `
                <div class="qa-item">
                    <h4>Q: ${
                      item["질문"] || item["text"] || "No question provided"
                    }</h4>
                    <p><strong>A:</strong> ${
                      item["답변"] || "No answer provided"
                    }</p>
                </div>
            `
                )
                .join("")
            : "<p>No Q&A items defined.</p>"
        }
    </div>
    
    <div class="section">
        <h2>Other Considerations</h2>
        <p>${data.otherConsiderations || "Not specified"}</p>
    </div>
    
    <div class="section">
        <h2>No-gos</h2>
        <p>${data.noGos || "Not specified"}</p>
    </div>
    
    <div class="section">
        <h2>Post Launch Plan</h2>
        <p>${data.postLaunchPlan || "Not specified"}</p>
    </div>
</body>
</html>
    `;
}

// PRD 초기화
function resetPRD() {
  if (confirm("모든 데이터를 삭제하시겠습니까?")) {
    // 모든 입력 필드 초기화
    const inputs = document.querySelectorAll("input, textarea, select");
    inputs.forEach((input) => {
      if (input.type === "checkbox" || input.type === "radio") {
        input.checked = false;
      } else {
        input.value = "";
      }
    });

    // 동적 아이템들 제거 (첫 번째 아이템 제외)
    const dynamicContainers = [
      ".history-list",
      ".timeline-container",
      ".persona-container",
      ".scenario-container",
      ".story-container",
      ".feature-container",
      ".requirements-container",
      ".qa-container",
    ];

    dynamicContainers.forEach((selector) => {
      const container = document.querySelector(selector);
      if (container) {
        const items = container.querySelectorAll(
          ".history-item, .timeline-item, .persona-item, .scenario-item, .story-item, .feature-item, .requirement-item, .qa-item"
        );
        items.forEach((item, index) => {
          if (index > 0) {
            // 첫 번째 아이템은 유지
            item.remove();
          }
        });
      }
    });

    alert("PRD가 초기화되었습니다!");
  }
}

// 페이지 로드 시 초기화
document.addEventListener("DOMContentLoaded", function () {
  // 모든 도움말 내용을 숨김 상태로 시작
  const helpContents = document.querySelectorAll(".help-content");
  helpContents.forEach((content) => {
    content.classList.remove("show");
  });

  // 입력 필드에 자동 저장 기능 추가
  const inputs = document.querySelectorAll("input, textarea, select");
  inputs.forEach((input) => {
    input.addEventListener("input", function () {
      // 로컬 스토리지에 자동 저장
      const key = `prd_${input.placeholder || input.name || "field"}`;
      localStorage.setItem(key, input.value);
    });

    // 페이지 로드 시 저장된 값 복원
    const key = `prd_${input.placeholder || input.name || "field"}`;
    const savedValue = localStorage.getItem(key);
    if (savedValue) {
      input.value = savedValue;
    }
  });
});

// 키보드 단축키
document.addEventListener("keydown", function (e) {
  // Ctrl+S: 저장
  if (e.ctrlKey && e.key === "s") {
    e.preventDefault();
    savePRD();
  }

  // Ctrl+E: 내보내기
  if (e.ctrlKey && e.key === "e") {
    e.preventDefault();
    exportPRD();
  }

  // Ctrl+R: 초기화
  if (e.ctrlKey && e.key === "r") {
    e.preventDefault();
    resetPRD();
  }
});

// 위로 가기 함수
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// 스크롤 이벤트 리스너 - 위로 가기 버튼 표시/숨김
window.addEventListener("scroll", function () {
  const scrollToTopBtn = document.getElementById("scrollToTop");
  if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});
