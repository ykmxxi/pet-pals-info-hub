import { getRiskLevelIcon, getRiskLevelClass } from './utils/data-utils.js';

/**
 * 금지 음식 목록 렌더링
 * @param {Array} foods - 금지 음식 데이터 배열
 */
export function renderForbiddenFoods(foods) {
  const container = document.getElementById('forbidden-foods');
  if (!container) return;

  container.innerHTML = foods.map(food => {
    const riskIcon = getRiskLevelIcon(food.risk);
    const riskClass = getRiskLevelClass(food.risk);
    return `
      <div class="food-item" data-risk="${food.risk}">
        <h3>${food.name}</h3>
        <p>${food.reason || food.description || ''}</p>
        <span class="risk-label ${riskClass}">${riskIcon} ${food.risk}</span>
      </div>
    `;
  }).join('');
}

/**
 * 행동 목록 렌더링
 * @param {Array} behaviors - 행동 데이터 배열
 */
export function renderBehaviors(behaviors) {
  const container = document.getElementById('behaviors');
  if (!container || !behaviors) return;

  container.innerHTML = behaviors.map(behavior => `
    <div class="behavior-item">
      <h3 class="behavior-title">${behavior.title}</h3>
      <p class="behavior-description">${behavior.description}</p>
      <div class="accordion">
        <div class="accordion-item">
          <div class="accordion-header" onclick="toggleAccordion(this)">
            <h3>원인 및 해결책</h3>
            <span>+</span>
          </div>
          <div class="accordion-content">
            ${behavior.solution || behavior.tips || '추가 정보가 없습니다.'}
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

/**
 * 영양제 목록 렌더링 (개선된 버전)
 * @param {Array} supplements - 영양제 데이터 배열
 */
export function renderSupplements(supplements) {
  const container = document.getElementById('supplements');
  if (!container) return;

  // 카테고리별 필터 버튼 추가
  const categories = [...new Set(supplements.map(s => s.category))];
  const filterButtons = categories.map(category => 
    `<button class="category-filter-btn" data-category="${category}">${category}</button>`
  ).join('');

  container.innerHTML = `
    <div class="supplement-filters">
      <button class="category-filter-btn active" data-category="all">전체</button>
      ${filterButtons}
    </div>
    <div class="supplement-grid" id="supplement-grid">
      ${supplements.map(supplement => `
        <div class="supplement-card" data-category="${supplement.category}">
          <div class="supplement-image">
            <img src="${supplement.image}" alt="${supplement.name}" loading="lazy">
            <div class="supplement-rating">
              <span class="rating-stars">${'★'.repeat(Math.floor(supplement.rating))}${'☆'.repeat(5-Math.floor(supplement.rating))}</span>
              <span class="rating-score">${supplement.rating}</span>
            </div>
          </div>
          <div class="supplement-content">
            <div class="supplement-header">
              <h3 class="supplement-name">${supplement.name}</h3>
              <span class="supplement-category">${supplement.category}</span>
            </div>
            <p class="supplement-description">${supplement.description}</p>
            <div class="supplement-meta">
              <span class="age-group">👶 ${supplement.ageGroup}</span>
              <span class="price">💰 ${supplement.price}</span>
            </div>
            <div class="supplement-benefits">
              ${supplement.benefits.slice(0, 2).map(benefit => 
                `<span class="benefit-tag">${benefit}</span>`
              ).join('')}
            </div>
            <div class="supplement-actions">
              <button class="supplement-detail-btn" onclick="showSupplementDetail(${supplement.id})">
                자세히 보기
              </button>
              <span class="review-count">리뷰 ${supplement.reviews.toLocaleString()}개</span>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  // 카테고리 필터 이벤트 바인딩
  const filterBtns = container.querySelectorAll('.category-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // 활성 버튼 업데이트
      filterBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      
      // 필터링
      const category = e.target.dataset.category;
      const cards = container.querySelectorAll('.supplement-card');
      
      cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/**
 * 모든 섹션 렌더링
 */
export function renderAllSections() {
  const currentData = window.currentPetData;
  console.log('렌더링할 데이터:', currentData);
  
  if (!currentData) {
    console.error('currentPetData가 없습니다.');
    return;
  }

  // 각 섹션별로 렌더링
  if (currentData.forbiddenFoods && Array.isArray(currentData.forbiddenFoods)) {
    console.log('금지 음식 렌더링:', currentData.forbiddenFoods.length, '개');
    renderForbiddenFoods(currentData.forbiddenFoods);
  }
  
  if (currentData.behaviors && Array.isArray(currentData.behaviors)) {
    console.log('행동 해석 렌더링:', currentData.behaviors.length, '개');
    renderBehaviors(currentData.behaviors);
  }
  
  if (currentData.supplements && Array.isArray(currentData.supplements)) {
    console.log('영양제 렌더링:', currentData.supplements.length, '개');
    renderSupplements(currentData.supplements);
  }
}

/**
 * 영양제 상세 정보 모달 표시 (개선된 버전)
 * @param {number} supplementId - 영양제 ID
 */
export function showSupplementDetail(supplementId) {
  // 현재 펫 데이터에서 영양제 찾기
  const currentSupplements = window.currentPetData?.supplements || [];
  const supplement = currentSupplements.find(s => s.id == supplementId);
  
  if (!supplement) return;

  // 기존 모달 제거
  const existingModal = document.getElementById('supplement-modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 새 모달 생성
  const modal = document.createElement('div');
  modal.id = 'supplement-modal';
  modal.className = 'modal modal--open';
  modal.innerHTML = `
    <div class="modal__content supplement-modal-content">
      <div class="modal__header">
        <h3>${supplement.name}</h3>
        <button class="modal__close" onclick="closeSupplementModal()" aria-label="모달 닫기">&times;</button>
      </div>
      <div class="modal__body">
        <div class="supplement-detail-layout">
          <div class="supplement-detail-image">
            <img src="${supplement.image}" alt="${supplement.name}">
            <div class="supplement-detail-rating">
              <div class="stars">${'★'.repeat(Math.floor(supplement.rating))}${'☆'.repeat(5-Math.floor(supplement.rating))}</div>
              <div class="rating-info">
                <span class="rating-score">${supplement.rating}/5</span>
                <span class="review-count">(${supplement.reviews.toLocaleString()}개 리뷰)</span>
              </div>
            </div>
          </div>
          <div class="supplement-detail-info">
            <div class="info-section">
              <h4>📋 기본 정보</h4>
              <div class="info-grid">
                <div class="info-item">
                  <span class="info-label">카테고리:</span>
                  <span class="info-value">${supplement.category}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">적정 연령:</span>
                  <span class="info-value">${supplement.ageGroup}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">가격대:</span>
                  <span class="info-value">${supplement.price}</span>
                </div>
              </div>
            </div>
            
            <div class="info-section">
              <h4>💊 복용 방법</h4>
              <p class="dosage-info">${supplement.dosage}</p>
            </div>
            
            <div class="info-section">
              <h4>✨ 주요 효능</h4>
              <div class="benefits-list">
                ${supplement.benefits.map(benefit => `<span class="benefit-tag">${benefit}</span>`).join('')}
              </div>
            </div>
            
            <div class="info-section">
              <h4>🧪 주요 성분</h4>
              <div class="ingredients-list">
                ${supplement.ingredients.map(ingredient => `<span class="ingredient-tag">${ingredient}</span>`).join('')}
              </div>
            </div>
            
            <div class="info-section warning-section">
              <h4>⚠️ 주의사항</h4>
              <ul class="precautions-list">
                ${supplement.precautions.map(precaution => `<li>${precaution}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // 모달 외부 클릭 시 닫기
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeSupplementModal();
    }
  });
}

/**
 * 영양제 상세 모달 닫기
 */
export function closeSupplementModal() {
  const modal = document.getElementById('supplement-modal');
  if (modal) {
    modal.remove();
  }
}

/**
 * 아코디언 토글
 * @param {HTMLElement} element - 클릭된 아코디언 헤더
 */
export function toggleAccordion(element) {
  const content = element.nextElementSibling;
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
    element.querySelector('span').textContent = '+';
  } else {
    content.style.maxHeight = content.scrollHeight + 'px';
    element.querySelector('span').textContent = '-';
  }
}

// 전역 함수로 등록 (HTML onclick에서 사용하기 위해)
window.showSupplementDetail = showSupplementDetail;
window.closeSupplementModal = closeSupplementModal;
window.toggleAccordion = toggleAccordion;
