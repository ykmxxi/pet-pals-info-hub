
/**
 * 데이터 관리 유틸리티
 */

/**
 * 외부 데이터를 기존 데이터에 추가하는 함수
 * @param {Object} currentData - 현재 데이터
 * @param {Object} newData - 추가할 데이터
 * @returns {Object} 병합된 데이터
 */
export function appendData(currentData, newData) {
  const mergedData = { ...currentData };
  
  // 금지 음식 데이터 추가
  if (newData.forbiddenFoods && Array.isArray(newData.forbiddenFoods)) {
    mergedData.forbiddenFoods = [...(currentData.forbiddenFoods || []), ...newData.forbiddenFoods];
  }
  
  // 행동 해석 데이터 추가
  if (newData.behaviors && Array.isArray(newData.behaviors)) {
    mergedData.behaviors = [...(currentData.behaviors || []), ...newData.behaviors];
  }
  
  // 영양제 데이터 추가
  if (newData.supplements && Array.isArray(newData.supplements)) {
    mergedData.supplements = [...(currentData.supplements || []), ...newData.supplements];
  }
  
  console.log('데이터 병합 완료:', mergedData);
  return mergedData;
}

/**
 * 데이터 업데이트 시뮬레이션 함수 (크롤링/제보 데이터 가정)
 * @param {string} petType - 반려동물 타입 ('dog' 또는 'cat')
 * @returns {Promise<Object>} 새로운 데이터
 */
export async function fetchNewData(petType) {
  // 실제로는 외부 API나 크롤링 데이터를 가져오는 로직
  const mockNewData = {
    forbiddenFoods: [
      {
        name: "신규 금지 음식",
        reason: "외부 제보로 추가된 위험 음식입니다.",
        riskLevel: "medium",
        category: "기타",
        firstAid: "수의사와 상담하세요.",
        source: "사용자 제보",
        lastUpdated: new Date().toISOString().split('T')[0]
      }
    ]
  };
  
  // 비동기 처리 시뮬레이션
  return new Promise(resolve => {
    setTimeout(() => resolve(mockNewData), 1000);
  });
}

/**
 * 금지 음식을 사전순으로 정렬
 * @param {Array} foods - 음식 배열
 * @returns {Array} 정렬된 음식 배열
 */
export function sortFoodsAlphabetically(foods) {
  return foods.sort((a, b) => {
    // 한글과 영문 모두 지원하는 정렬
    return a.name.localeCompare(b.name, 'ko', { numeric: true });
  });
}

/**
 * 위험도별 색상 반환
 * @param {string} riskLevel - 위험도 ('low', 'medium', 'high', 'critical')
 * @returns {string} CSS 클래스명
 */
export function getRiskLevelClass(riskLevel) {
  const riskClasses = {
    low: 'risk-low',
    medium: 'risk-medium', 
    high: 'risk-high',
    critical: 'risk-critical'
  };
  return riskClasses[riskLevel] || 'risk-medium';
}

/**
 * 위험도별 아이콘 반환
 * @param {string} riskLevel - 위험도
 * @returns {string} 아이콘 문자
 */
export function getRiskLevelIcon(riskLevel) {
  const riskIcons = {
    low: '⚠️',
    medium: '⚠️',
    high: '🚨',
    critical: '☠️'
  };
  return riskIcons[riskLevel] || '⚠️';
}
