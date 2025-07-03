/**
 * PetCare 웹앱 메인 JavaScript 파일
 * 앱 초기화 및 이벤트 관리
 */
import { state, updateCurrentPet } from './state.js';
import { elements } from './dom-elements.js';
import { loadPetData } from './data-loader.js';
import { toggleAccordion, showSupplementDetail, closeSupplementModal } from './renderers.js';
import { showBehaviorChat } from './modules/behavior-chat.js';
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
    // 법적 고지 링크인 경우 - 배포 환경에서도 작동하도록 처리
    if (button.tagName === 'A' && button.getAttribute('href') === 'legalnotice.html') {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        // 현재 도메인에서 법적 고지 페이지로 이동
        const currentUrl = window.location.origin;
        window.location.href = `${currentUrl}/legalnotice.html`;
      });
      return;
    }
    
    // 펫 탭 버튼인 경우에만 탭 클릭 이벤트 바인딩
    if (button.dataset.pet) {
      button.addEventListener('click', handleTabClick);
    }
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
  event.preventDefault();
  const pet = event.target.dataset.pet;
  
  if (pet === state.currentPet) return;
  
  console.log(`탭 전환: ${state.currentPet} → ${pet}`);
  
  // 부드러운 전환을 위한 페이드 아웃
  document.body.classList.add('transitioning');
  
  // 탭 버튼 상태 업데이트
  elements.tabButtons.forEach(btn => {
    if (btn.dataset.pet) {
      btn.classList.remove('tab-button--active');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
  
  event.target.classList.add('tab-button--active');
  event.target.setAttribute('aria-expanded', 'true');
  
  // 상태 업데이트 및 데이터 로드
  updateCurrentPet(pet);
  
  // 약간의 지연 후 데이터 로드 (부드러운 전환을 위해)
  setTimeout(async () => {
    await loadPetData(pet);
    document.body.classList.remove('transitioning');
  }, 150);
}

// 앱 초기화
document.addEventListener('DOMContentLoaded', initApp);

// 전역 함수로 노출 (onclick에서 사용)
window.toggleAccordion = toggleAccordion;
window.showSupplementDetail = showSupplementDetail;
window.closeSupplementModal = closeSupplementModal;
window.showBehaviorChat = showBehaviorChat;
