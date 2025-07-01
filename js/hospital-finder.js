
/**
 * 동물병원 찾기 모듈
 */
import { state, updateUserLocation } from './state.js';
import { elements } from './dom-elements.js';
import { openModal } from './modal.js';
import { escapeHtml } from './utils.js';

/**
 * 동물병원 찾기 핸들러
 */
export async function handleFindHospital() {
  console.log('동물병원 찾기 시작');
  
  try {
    // 위치 권한 요청
    const position = await getCurrentPosition();
    updateUserLocation({
      lat: position.coords.latitude,
      lng: position.coords.longitude
    });
    
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
