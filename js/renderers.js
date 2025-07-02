
/**
 * UI 렌더링 모듈
 */
import { state } from './state.js';
import { elements } from './dom-elements.js';
import { escapeHtml } from './utils.js';
import { sortFoodsAlphabetically, getRiskLevelClass, getRiskLevelIcon } from './utils/data-utils.js';

/**
 * 모든 섹션 렌더링
 */
export function renderAllSections() {
  renderForbiddenFoods();
  renderBehaviors();
  renderSupplements();
  
  // 페이드인 애니메이션 적용
  setTimeout(() => {
    document.querySelectorAll('.section').forEach(section => {
      section.classList.add('fade-in');
    });
  }, 100);
}

/**
 * 금지 음식 카드 렌더링
 */
export function renderForbiddenFoods() {
  if (!state.data || !state.data.forbiddenFoods) {
    console.error('금지 음식 데이터가 없습니다');
    return;
  }
  
  let foods = [...state.data.forbiddenFoods];
  
  // 사전순 정렬
  foods = sortFoodsAlphabetically(foods);
  
  // 검색 및 필터 컨트롤 HTML
  const controlsHtml = `
    <div class="search-controls">
      <input type="search" 
             id="food-search" 
             class="search-input" 
             placeholder="음식 이름으로 검색..."
             autocomplete="off">
      <select id="food-filter" class="filter-select">
        <option value="">모든 카테고리</option>
        <option value="채소류">채소류</option>
        <option value="향신료">향신료</option>
        <option value="과자류">과자류</option>
        <option value="과일류">과일류</option>
        <option value="어류">어류</option>
        <option value="유제품">유제품</option>
        <option value="음료류">음료류</option>
        <option value="견과류">견과류</option>
        <option value="감미료">감미료</option>
        <option value="사료류">사료류</option>
        <option value="기타">기타</option>
      </select>
    </div>
  `;
  
  const html = foods.map(food => `
    <article class="card card--danger" data-category="${escapeHtml(food.category)}" data-name="${escapeHtml(food.name.toLowerCase())}">
      <div class="risk-badge ${getRiskLevelClass(food.riskLevel)}">
        ${getRiskLevelIcon(food.riskLevel)} ${food.riskLevel.toUpperCase()}
      </div>
      <h3 class="card__title">${escapeHtml(food.name)}</h3>
      <div class="card__content">
        <p>${escapeHtml(food.reason)}</p>
        
        <div class="first-aid-accordion">
          <button class="first-aid-header" onclick="toggleFirstAid(this)">
            <span>🚨 응급처치 방법</span>
            <span class="accordion__icon">▼</span>
          </button>
          <div class="first-aid-content">
            ${escapeHtml(food.firstAid)}
          </div>
        </div>
        
        <div class="meta">
          <span class="meta__source">출처: ${escapeHtml(food.source)}</span>
          <span class="meta__date">${food.lastUpdated}</span>
        </div>
      </div>
    </article>
  `).join('');
  
  elements.forbiddenFoodsContainer.innerHTML = controlsHtml + '<div class="card-grid" id="foods-grid">' + html + '</div>';
  
  // 검색 및 필터 이벤트 리스너 등록
  setupFoodFilters();
  
  console.log(`금지 음식 ${foods.length}개 렌더링 완료`);
}

/**
 * 검색 및 필터 기능 설정
 */
function setupFoodFilters() {
  const searchInput = document.getElementById('food-search');
  const filterSelect = document.getElementById('food-filter');
  let searchTimeout;
  
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(filterFoods, 300);
    });
  }
  
  if (filterSelect) {
    filterSelect.addEventListener('change', filterFoods);
  }
}

/**
 * 음식 필터링 함수
 */
function filterFoods() {
  const searchInput = document.getElementById('food-search');
  const filterSelect = document.getElementById('food-filter');
  const foodCards = document.querySelectorAll('#foods-grid .card');
  
  const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
  const selectedCategory = filterSelect ? filterSelect.value : '';
  
  foodCards.forEach(card => {
    const foodName = card.dataset.name || '';
    const foodCategory = card.dataset.category || '';
    
    const matchesSearch = !searchTerm || foodName.includes(searchTerm);
    const matchesCategory = !selectedCategory || foodCategory === selectedCategory;
    
    if (matchesSearch && matchesCategory) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
  
  console.log(`필터링 적용: 검색어="${searchTerm}", 카테고리="${selectedCategory}"`);
}

/**
 * 응급처치 아코디언 토글
 * @param {HTMLElement} button - 클릭된 버튼 요소
 */
window.toggleFirstAid = function(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector('.accordion__icon');
  
  if (content.classList.contains('first-aid-content--open')) {
    content.classList.remove('first-aid-content--open');
    icon.classList.remove('accordion__icon--open');
  } else {
    content.classList.add('first-aid-content--open');
    icon.classList.add('accordion__icon--open');
  }
};

export function renderBehaviors() {
  if (!state.data || !state.data.behaviors) {
    console.error('행동 해석 데이터가 없습니다');
    return;
  }
  
  const behaviors = state.data.behaviors;
  
  // 다중 선택 가능한 아코디언으로 변경, 카드 레이아웃 적용
  const html = behaviors.map((behavior, index) => `
    <div class="accordion__item">
      <button class="accordion__header" 
              data-index="${index}"
              data-multi="true"
              aria-expanded="false"
              onclick="window.toggleAccordion(${index})">
        <span class="behavior-keyword">${escapeHtml(behavior.keyword)}</span>
        <span class="accordion__icon">▼</span>
      </button>
      <div class="accordion__content" id="accordion-${index}">
        <div class="behavior-card">
          <div class="behavior-content">
            <div class="behavior-image-section">
              <img src="${behavior.image}" alt="${escapeHtml(behavior.keyword)} 행동" class="behavior-image" loading="lazy" onerror="this.style.display='none'">
            </div>
            <div class="behavior-info-section">
              <div class="behavior-meaning">
                <h4>🔍 행동 의미</h4>
                <p>${escapeHtml(behavior.meaning)}</p>
              </div>
              <div class="behavior-examples">
                <h4>📝 예시 상황</h4>
                <p>${escapeHtml(behavior.examples)}</p>
              </div>
              <div class="behavior-action">
                <h4>💡 대응 방법</h4>
                <p>${escapeHtml(behavior.action)}</p>
              </div>
            </div>
          </div>
          <div class="meta">
            <span class="meta__source">출처: ${escapeHtml(behavior.source)}</span>
            <span class="meta__date">${behavior.lastUpdated}</span>
          </div>
        </div>
      </div>
    </div>
  `).join('');
  
  elements.behaviorsContainer.innerHTML = html;
  console.log(`행동 해석 ${behaviors.length}개 렌더링 완료`);
}

export function renderSupplements() {
  if (!state.data || !state.data.supplements) {
    console.error('영양제 데이터가 없습니다');
    return;
  }
  
  const supplements = state.data.supplements;
  
  const html = supplements.map((supplement, index) => `
    <article class="card card--success">
      <h3 class="card__title">${escapeHtml(supplement.name)}</h3>
      <div class="card__content">
        <p>${escapeHtml(supplement.benefit)}</p>
        <button class="supplement-detail-btn" onclick="showSupplementDetail(${index})" 
                style="color: var(--color-accent); background: none; border: none; text-decoration: none; font-weight: 600; margin-top: 0.5rem; display: inline-block; cursor: pointer;">
          자세히 보기 →
        </button>
        <div class="meta">
          <span class="meta__source">출처: ${escapeHtml(supplement.source)}</span>
          <span class="meta__date">${supplement.lastUpdated}</span>
        </div>
      </div>
    </article>
  `).join('');
  
  elements.supplementsContainer.innerHTML = html;
  console.log(`영양제 추천 ${supplements.length}개 렌더링 완료`);
}

/**
 * 아코디언 토글 (다중 선택 지원)
 * @param {number} index - 아코디언 인덱스
 */
export function toggleAccordion(index) {
  const header = document.querySelector(`[data-index="${index}"]`);
  const content = document.getElementById(`accordion-${index}`);
  const icon = header.querySelector('.accordion__icon');
  
  if (!header || !content || !icon) {
    console.error('아코디언 요소를 찾을 수 없습니다:', index);
    return;
  }
  
  const isOpen = header.getAttribute('aria-expanded') === 'true';
  const isMulti = header.getAttribute('data-multi') === 'true';
  
  // 다중 선택이 아닌 경우 모든 아코디언 닫기 (기존 동작)
  if (!isMulti) {
    document.querySelectorAll('.accordion__header').forEach(h => {
      h.setAttribute('aria-expanded', 'false');
      const headerIcon = h.querySelector('.accordion__icon');
      if (headerIcon) {
        headerIcon.classList.remove('accordion__icon--open');
      }
    });
    
    document.querySelectorAll('.accordion__content').forEach(c => {
      c.classList.remove('accordion__content--open');
    });
  }
  
  // 선택된 아코디언 토글
  if (!isOpen) {
    header.setAttribute('aria-expanded', 'true');
    content.classList.add('accordion__content--open');
    icon.classList.add('accordion__icon--open');
  } else if (isMulti) {
    header.setAttribute('aria-expanded', 'false');
    content.classList.remove('accordion__content--open');
    icon.classList.remove('accordion__icon--open');
  }
  
  console.log(`아코디언 ${index} ${!isOpen ? '열기' : '닫기'}`);
}

export function showSupplementDetail(index) {
  if (!state.data || !state.data.supplements || !state.data.supplements[index]) {
    console.error('영양제 데이터를 찾을 수 없습니다:', index);
    return;
  }
  
  const supplement = state.data.supplements[index];
  
  // 기존 모달이 있다면 제거
  const existingModal = document.getElementById('supplement-modal');
  if (existingModal) {
    existingModal.remove();
  }
  
  // 모달 HTML 생성
  const modalHtml = `
    <div class="modal" id="supplement-modal">
      <div class="modal__content">
        <div class="modal__header">
          <h3>${escapeHtml(supplement.name)} 상세 정보</h3>
          <button class="modal__close" onclick="closeSupplementModal()" aria-label="모달 닫기">&times;</button>
        </div>
        <div class="modal__body">
          <div class="supplement-detail">
            <div class="supplement-section">
              <h4>📋 주요 효과</h4>
              <ul>
                ${supplement.effects.map(effect => `<li>${escapeHtml(effect)}</li>`).join('')}
              </ul>
            </div>
            
            <div class="supplement-section">
              <h4>⚠️ 주의사항</h4>
              <ul>
                ${supplement.precautions.map(precaution => `<li>${escapeHtml(precaution)}</li>`).join('')}
              </ul>
            </div>
            
            <div class="supplement-section">
              <h4>💊 복용 방법</h4>
              <p>${escapeHtml(supplement.dosage)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // 모달을 body에 추가
  document.body.insertAdjacentHTML('beforeend', modalHtml);
  
  // 모달 표시
  const modal = document.getElementById('supplement-modal');
  if (modal) {
    modal.classList.add('modal--open');
    document.body.style.overflow = 'hidden';
    
    // 모달 외부 클릭 시 닫기
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeSupplementModal();
      }
    });
    
    // ESC 키로 모달 닫기
    const escapeHandler = (e) => {
      if (e.key === 'Escape') {
        closeSupplementModal();
        document.removeEventListener('keydown', escapeHandler);
      }
    };
    document.addEventListener('keydown', escapeHandler);
  }
  
  console.log(`영양제 상세 정보 모달 열기: ${supplement.name}`);
}

export function closeSupplementModal() {
  const modal = document.getElementById('supplement-modal');
  if (modal) {
    modal.classList.remove('modal--open');
    document.body.style.overflow = '';
    
    // 애니메이션 후 모달 제거
    setTimeout(() => {
      modal.remove();
    }, 300);
  }
  
  console.log('영양제 상세 정보 모달 닫기');
}
