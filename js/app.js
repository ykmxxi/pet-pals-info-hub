
/**
 * PetCare 웹앱 메인 JavaScript 파일
 * 반려동물 정보 제공 기능을 구현합니다.
 */

// 앱 상태 관리
const state = {
  currentPet: 'dog',
  data: null,
  userLocation: null
};

// DOM 요소 참조
const elements = {
  tabButtons: document.querySelectorAll('.tab-button'),
  forbiddenFoodsContainer: document.getElementById('forbidden-foods'),
  behaviorsContainer: document.getElementById('behaviors'),
  supplementsContainer: document.getElementById('supplements'),
  findHospitalBtn: document.getElementById('find-hospital-btn'),
  hospitalModal: document.getElementById('hospital-modal'),
  hospitalList: document.getElementById('hospital-list'),
  modalClose: document.querySelector('.modal__close')
};

/**
 * 앱 초기화
 */
async function initApp() {
  console.log('PetCare 앱 초기화 시작');
  
  // 이벤트 리스너 등록
  bindEvents();
  
  // 초기 데이터 로드
  await loadPetData(state.currentPet);
  
  console.log('PetCare 앱 초기화 완료');
}

/**
 * 이벤트 리스너 바인딩
 */
function bindEvents() {
  // 탭 버튼 클릭 이벤트
  elements.tabButtons.forEach(button => {
    button.addEventListener('click', handleTabClick);
  });
  
  // 동물병원 찾기 버튼 클릭 이벤트
  if (elements.findHospitalBtn) {
    elements.findHospitalBtn.addEventListener('click', handleFindHospital);
  }
  
  // 모달 닫기 이벤트
  if (elements.modalClose) {
    elements.modalClose.addEventListener('click', closeModal);
  }
  
  if (elements.hospitalModal) {
    elements.hospitalModal.addEventListener('click', (e) => {
      if (e.target === elements.hospitalModal) {
        closeModal();
      }
    });
  }
  
  // ESC 키로 모달 닫기
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && elements.hospitalModal && elements.hospitalModal.classList.contains('modal--open')) {
      closeModal();
    }
  });
}

/**
 * 탭 클릭 핸들러
 * @param {Event} event - 클릭 이벤트
 */
async function handleTabClick(event) {
  const pet = event.target.dataset.pet;
  
  if (pet === state.currentPet) return;
  
  console.log(`탭 전환: ${state.currentPet} → ${pet}`);
  
  // 탭 버튼 상태 업데이트
  elements.tabButtons.forEach(btn => {
    btn.classList.remove('tab-button--active');
    btn.setAttribute('aria-expanded', 'false');
  });
  
  event.target.classList.add('tab-button--active');
  event.target.setAttribute('aria-expanded', 'true');
  
  // 상태 업데이트 및 데이터 로드
  state.currentPet = pet;
  await loadPetData(pet);
}

/**
 * 반려동물 데이터 로드
 * @param {string} pet - 동물 종류 ('dog' 또는 'cat')
 */
async function loadPetData(pet) {
  try {
    console.log(`${pet} 데이터 로딩 시작`);
    
    // 로딩 상태 표시
    showLoading();
    
    const response = await fetch(`./data/${pet}.json`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    state.data = data;
    
    console.log(`${pet} 데이터 로딩 완료:`, data);
    
    // UI 렌더링
    renderAllSections();
    
  } catch (error) {
    console.error('데이터 로딩 실패:', error);
    showError('데이터를 불러오는데 실패했습니다. 페이지를 새로고침해주세요.');
  }
}

/**
 * 모든 섹션 렌더링
 */
function renderAllSections() {
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
function renderForbiddenFoods() {
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
function renderBehaviors() {
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
              onclick="toggleAccordion(${index})">
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
function renderSupplements() {
  if (!state.data || !state.data.supplements) {
    console.error('영양제 데이터가 없습니다');
    return;
  }
  
  const supplements = state.data.supplements;
  
  const html = supplements.map(supplement => `
    <article class="card card--success">
      <h3 class="card__title">${escapeHtml(supplement.name)}</h3>
      <div class="card__content">
        <p>${escapeHtml(supplement.benefit)}</p>
        ${supplement.link ? 
          `<a href="${escapeHtml(supplement.link)}" target="_blank" rel="noopener noreferrer" 
             style="color: var(--color-accent); text-decoration: none; font-weight: 600; margin-top: 0.5rem; display: inline-block;">
            자세히 보기 →
          </a>` : ''}
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
function toggleAccordion(index) {
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
 * 동물병원 찾기 핸들러
 */
async function handleFindHospital() {
  console.log('동물병원 찾기 시작');
  
  try {
    // 위치 권한 요청
    const position = await getCurrentPosition();
    state.userLocation = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    
    console.log('사용자 위치:', state.userLocation);
    
    // 모달 열기
    openModal();
    
    // 병원 목록 렌더링 (목 데이터)
    renderHospitalList();
    
  } catch (error) {
    console.error('위치 정보 획득 실패:', error);
    alert('위치 정보를 가져올 수 없습니다. 브라우저 설정을 확인해주세요.');
  }
}

/**
 * 현재 위치 가져오기 (Promise 래핑)
 * @returns {Promise<GeolocationPosition>}
 */
function getCurrentPosition() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported'));
      return;
    }
    
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 300000
    });
  });
}

/**
 * 동물병원 목록 렌더링 (목 데이터)
 */
function renderHospitalList() {
  // TODO: 실제로는 카카오 지도 API를 사용하여 주변 병원 검색
  const mockHospitals = [
    { name: '해피펫 동물병원', address: '서울시 강남구 역삼동 123-45', distance: '0.2km' },
    { name: '사랑스런 동물병원', address: '서울시 강남구 논현동 678-90', distance: '0.5km' },
    { name: '우리펫 종합병원', address: '서울시 강남구 신사동 321-54', distance: '0.8km' },
    { name: '24시 응급동물병원', address: '서울시 강남구 청담동 987-12', distance: '1.2km' },
    { name: '펫케어 동물병원', address: '서울시 강남구 압구정동 456-78', distance: '1.5km' }
  ];
  
  const html = mockHospitals.map(hospital => `
    <div class="hospital-item">
      <div class="hospital-item__name">${escapeHtml(hospital.name)}</div>
      <div class="hospital-item__address">${escapeHtml(hospital.address)} (${hospital.distance})</div>
    </div>
  `).join('');
  
  if (elements.hospitalList) {
    elements.hospitalList.innerHTML = html;
  }
  
  // 지도 영역 업데이트
  const mapElement = document.getElementById('map');
  if (mapElement) {
    mapElement.innerHTML = `
      <div style="text-align: center; color: var(--color-text-secondary);">
        <p>🗺️ 카카오 지도 API 연동 예정</p>
        <p style="font-size: 0.9rem; margin-top: 0.5rem;">
          TODO: 카카오 개발자 센터에서 API 키 발급 후 연동
        </p>
      </div>
    `;
  }
  
  console.log(`동물병원 ${mockHospitals.length}개 렌더링 완료`);
}

/**
 * 모달 열기
 */
function openModal() {
  if (elements.hospitalModal) {
    elements.hospitalModal.classList.add('modal--open');
    document.body.style.overflow = 'hidden';
    console.log('동물병원 모달 열기');
  }
}

/**
 * 모달 닫기
 */
function closeModal() {
  if (elements.hospitalModal) {
    elements.hospitalModal.classList.remove('modal--open');
    document.body.style.overflow = '';
    console.log('동물병원 모달 닫기');
  }
}

/**
 * 로딩 상태 표시
 */
function showLoading() {
  const sections = ['forbidden-foods', 'behaviors', 'supplements'];
  sections.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.innerHTML = '<div class="loading"></div>';
    }
  });
}

/**
 * 에러 메시지 표시
 * @param {string} message - 에러 메시지
 */
function showError(message) {
  const errorHtml = `
    <div style="text-align: center; padding: 2rem; color: var(--color-danger);">
      <h3>⚠️ 오류 발생</h3>
      <p>${escapeHtml(message)}</p>
    </div>
  `;
  
  if (elements.forbiddenFoodsContainer) {
    elements.forbiddenFoodsContainer.innerHTML = errorHtml;
  }
  if (elements.behaviorsContainer) {
    elements.behaviorsContainer.innerHTML = '';
  }
  if (elements.supplementsContainer) {
    elements.supplementsContainer.innerHTML = '';
  }
}

/**
 * HTML 이스케이프 처리
 * @param {string} text - 이스케이프할 텍스트
 * @returns {string} 이스케이프된 텍스트
 */
function escapeHtml(text) {
  if (!text) return '';
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// 앱 초기화
document.addEventListener('DOMContentLoaded', initApp);

// 전역 함수로 toggleAccordion 노출 (onclick에서 사용)
window.toggleAccordion = toggleAccordion;
