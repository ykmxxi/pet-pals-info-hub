
/**
 * 데이터 로딩 모듈
 */
import { state, updateData } from './state.js';
import { showLoading, showError } from './utils.js';
import { renderAllSections } from './renderers.js';

/**
 * 반려동물 데이터 로드
 * @param {string} pet - 동물 종류 ('dog' 또는 'cat')
 */
export async function loadPetData(pet) {
  try {
    console.log(`${pet} 데이터 로딩 시작`);
    
    // 로딩 상태 표시
    showLoading();
    
    const response = await fetch(`./public/data/${pet}.json`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    updateData(data);
    
    console.log(`${pet} 데이터 로딩 완료:`, data);
    
    // UI 렌더링
    renderAllSections();
    
  } catch (error) {
    console.error('데이터 로딩 실패:', error);
    showError('데이터를 불러오는데 실패했습니다. 페이지를 새로고침해주세요.');
  }
}
