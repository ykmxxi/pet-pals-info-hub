
/**
 * UI 렌더링 모듈
 */
import { state } from './state.js';
import { elements } from './dom-elements.js';
import { escapeHtml } from './utils.js';

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
  
  const foods = state.data.forbiddenFoods;
  
  const html = foods.map(food => `
    <article class="card card--danger">
      <h3 class="card__title">${escapeHtml(food.name)}</h3>
      <div class="card__content">
        ${escapeHtml(food.reason)}
      </div>
    </article>
  `).join('');
  
  elements.forbiddenFoodsContainer.innerHTML = html;
  console.log(`금지 음식 ${foods.length}개 렌더링 완료`);
}

/**
 * 행동 해석 아코디언 렌더링
 */
export function renderBehaviors() {
  if (!state.data || !state.data.behaviors) {
    console.error('행동 해석 데이터가 없습니다');
    return;
  }
  
  const behaviors = state.data.behaviors;
  
  const html = behaviors.map((behavior, index) => `
    <div class="accordion__item">
      <button class="accordion__header" 
              data-index="${index}"
              aria-expanded="false"
              onclick="window.toggleAccordion(${index})">
        <span>${escapeHtml(behavior.keyword)}</span>
        <span class="accordion__icon">▼</span>
      </button>
      <div class="accordion__content" id="accordion-${index}">
        ${escapeHtml(behavior.meaning)}
      </div>
    </div>
  `).join('');
  
  elements.behaviorsContainer.innerHTML = html;
  console.log(`행동 해석 ${behaviors.length}개 렌더링 완료`);
}

/**
 * 영양제 추천 카드 렌더링
 */
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
      </div>
    </article>
  `).join('');
  
  elements.supplementsContainer.innerHTML = html;
  console.log(`영양제 추천 ${supplements.length}개 렌더링 완료`);
}

/**
 * 아코디언 토글
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
  
  // 모든 아코디언 닫기
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
  
  // 선택된 아코디언만 열기 (이미 열려있지 않은 경우)
  if (!isOpen) {
    header.setAttribute('aria-expanded', 'true');
    content.classList.add('accordion__content--open');
    icon.classList.add('accordion__icon--open');
  }
  
  console.log(`아코디언 ${index} ${!isOpen ? '열기' : '닫기'}`);
}

/**
 * 영양제 상세 정보 모달 표시
 * @param {number} index - 영양제 인덱스
 */
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

/**
 * 영양제 상세 정보 모달 닫기
 */
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
