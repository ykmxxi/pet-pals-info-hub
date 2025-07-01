
/**
 * 모달 관리 모듈
 */
import { elements } from './dom-elements.js';

/**
 * 모달 열기
 */
export function openModal() {
  if (elements.hospitalModal) {
    elements.hospitalModal.classList.add('modal--open');
    document.body.style.overflow = 'hidden';
    console.log('동물병원 모달 열기');
  }
}

/**
 * 모달 닫기
 */
export function closeModal() {
  if (elements.hospitalModal) {
    elements.hospitalModal.classList.remove('modal--open');
    document.body.style.overflow = '';
    console.log('동물병원 모달 닫기');
  }
}
