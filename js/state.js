
/**
 * 앱 상태 관리 모듈
 */
export const state = {
  currentPet: 'dog',
  data: null,
  userLocation: null
};

export function updateCurrentPet(pet) {
  state.currentPet = pet;
}

export function updateData(data) {
  state.data = data;
}

export function updateUserLocation(location) {
  state.userLocation = location;
}
