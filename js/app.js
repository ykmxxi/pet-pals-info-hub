
/**
 * PetCare 웹앱 메인 JavaScript 파일
 * 앱 초기화 및 이벤트 관리
 */
import { state, updateCurrentPet } from './state.js';
import { elements } from './dom-elements.js';
import { loadPetData } from './data-loader.js';
import { toggleAccordion } from './renderers.js';
import { handleFindHospital } from './hospital-finder.js';
import { closeModal } from './modal.js';

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
  updateCurrentPet(pet);
  await loadPetData(pet);
}

// 앱 초기화
document.addEventListener('DOMContentLoaded', initApp);

// 전역 함수로 노출 (onclick에서 사용)
window.toggleAccordion = toggleAccordion;
window.showSupplementDetail = showSupplementDetail;
window.closeSupplementModal = closeSupplementModal;
