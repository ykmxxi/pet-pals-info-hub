
/**
 * 유틸리티 함수들
 */

/**
 * HTML 이스케이프 처리
 * @param {string} text - 이스케이프할 텍스트
 * @returns {string} 이스케이프된 텍스트
 */
export function escapeHtml(text) {
  if (!text) return '';
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/**
 * 로딩 상태 표시
 */
export function showLoading() {
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
export function showError(message) {
  const errorHtml = `
    <div style="text-align: center; padding: 2rem; color: var(--color-danger);">
      <h3>⚠️ 오류 발생</h3>
      <p>${escapeHtml(message)}</p>
    </div>
  `;
  
  const forbiddenFoodsContainer = document.getElementById('forbidden-foods');
  const behaviorsContainer = document.getElementById('behaviors');
  const supplementsContainer = document.getElementById('supplements');
  
  if (forbiddenFoodsContainer) {
    forbiddenFoodsContainer.innerHTML = errorHtml;
  }
  if (behaviorsContainer) {
    behaviorsContainer.innerHTML = '';
  }
  if (supplementsContainer) {
    supplementsContainer.innerHTML = '';
  }
}
