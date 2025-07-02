
/**
 * 행동 해석 채팅 모듈
 */
import { state } from '../state.js';
import { escapeHtml } from '../utils.js';

/**
 * 행동 FAQ 채팅 모달 표시
 */
export function showBehaviorChat() {
  // 기존 모달이 있다면 제거
  const existingModal = document.getElementById('behavior-chat-modal');
  if (existingModal) {
    existingModal.remove();
  }
  
  // 모달 HTML 생성
  const modalHtml = `
    <div class="modal" id="behavior-chat-modal">
      <div class="modal__content" style="max-width: 600px;">
        <div class="modal__header">
          <h3>🤖 행동 해석 채팅</h3>
          <button class="modal__close" onclick="closeBehaviorChat()" aria-label="모달 닫기">&times;</button>
        </div>
        <div class="modal__body">
          <div class="chat-container">
            <div class="chat-messages" id="chat-messages">
              <div class="chat-message bot-message">
                <div class="message-content">
                  안녕하세요! 반려동물의 행동에 대해 궁금한 것이 있으시면 언제든 물어보세요. 🐾
                </div>
              </div>
            </div>
            <div class="chat-input-container">
              <input type="text" 
                     id="chat-input" 
                     class="chat-input" 
                     placeholder="예: 우리 강아지가 계속 빙빙 도는데 왜 그런가요?"
                     autocomplete="off">
              <button id="chat-send" class="chat-send-btn">전송</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // 모달을 body에 추가
  document.body.insertAdjacentHTML('beforeend', modalHtml);
  
  // 모달 표시
  const modal = document.getElementById('behavior-chat-modal');
  if (modal) {
    modal.classList.add('modal--open');
    document.body.style.overflow = 'hidden';
    
    // 이벤트 리스너 등록
    setupChatEvents();
    
    // 입력 필드에 포커스
    const chatInput = document.getElementById('chat-input');
    if (chatInput) {
      setTimeout(() => chatInput.focus(), 300);
    }
    
    // 모달 외부 클릭 시 닫기
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeBehaviorChat();
      }
    });
    
    // ESC 키로 모달 닫기
    const escapeHandler = (e) => {
      if (e.key === 'Escape') {
        closeBehaviorChat();
        document.removeEventListener('keydown', escapeHandler);
      }
    };
    document.addEventListener('keydown', escapeHandler);
  }
  
  console.log('행동 해석 채팅 모달 열기');
}

/**
 * 채팅 이벤트 설정
 */
function setupChatEvents() {
  const chatInput = document.getElementById('chat-input');
  const chatSend = document.getElementById('chat-send');
  
  if (chatInput && chatSend) {
    // 전송 버튼 클릭
    chatSend.addEventListener('click', handleChatSend);
    
    // Enter 키 처리
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        handleChatSend();
      }
    });
  }
}

/**
 * 채팅 메시지 전송 처리
 */
function handleChatSend() {
  const chatInput = document.getElementById('chat-input');
  const chatMessages = document.getElementById('chat-messages');
  
  if (!chatInput || !chatMessages) return;
  
  const message = chatInput.value.trim();
  if (!message) return;
  
  // 사용자 메시지 추가
  const userMessageHtml = `
    <div class="chat-message user-message">
      <div class="message-content">${escapeHtml(message)}</div>
    </div>
  `;
  chatMessages.insertAdjacentHTML('beforeend', userMessageHtml);
  
  // 입력 필드 초기화
  chatInput.value = '';
  
  // 봇 응답 생성 (타이핑 효과)
  showTypingIndicator();
  
  setTimeout(() => {
    hideTypingIndicator();
    const botResponse = generateBotResponse(message);
    const botMessageHtml = `
      <div class="chat-message bot-message">
        <div class="message-content">${botResponse}</div>
      </div>
    `;
    chatMessages.insertAdjacentHTML('beforeend', botMessageHtml);
    
    // 스크롤을 맨 아래로
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 1000 + Math.random() * 1000);
  
  // 스크롤을 맨 아래로
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

/**
 * 타이핑 인디케이터 표시
 */
function showTypingIndicator() {
  const chatMessages = document.getElementById('chat-messages');
  if (!chatMessages) return;
  
  const typingHtml = `
    <div class="chat-message bot-message typing-indicator" id="typing-indicator">
      <div class="message-content">
        <div class="typing-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  `;
  chatMessages.insertAdjacentHTML('beforeend', typingHtml);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

/**
 * 타이핑 인디케이터 숨기기
 */
function hideTypingIndicator() {
  const typingIndicator = document.getElementById('typing-indicator');
  if (typingIndicator) {
    typingIndicator.remove();
  }
}

/**
 * 봇 응답 생성
 */
function generateBotResponse(userMessage) {
  const lowerMessage = userMessage.toLowerCase();
  
  // 현재 데이터에서 관련 행동 찾기
  if (state.data && state.data.behaviors) {
    for (const behavior of state.data.behaviors) {
      const keyword = behavior.keyword.toLowerCase();
      if (lowerMessage.includes(keyword) || keyword.includes(lowerMessage.split(' ')[0])) {
        return `
          <strong>${behavior.keyword}</strong>에 대해 말씀하시는 것 같네요!<br><br>
          <strong>의미:</strong> ${behavior.meaning}<br><br>
          <strong>예시:</strong> ${behavior.examples}<br><br>
          <strong>대응 방법:</strong> ${behavior.action}<br><br>
          <small>출처: ${behavior.source} (${behavior.lastUpdated})</small>
        `;
      }
    }
  }
  
  // 일반적인 키워드 기반 응답
  if (lowerMessage.includes('꼬리') || lowerMessage.includes('tail')) {
    return '꼬리 움직임은 반려동물의 감정을 나타내는 중요한 신호입니다. 위의 행동 해석 목록에서 "꼬리 흔들기" 항목을 확인해보세요!';
  }
  
  if (lowerMessage.includes('울') || lowerMessage.includes('소리') || lowerMessage.includes('하울링')) {
    return '반려동물이 우는 소리를 내는 것은 다양한 의미가 있습니다. "하울링" 항목을 참고하시거나, 지속적으로 문제가 된다면 수의사와 상담하세요.';
  }
  
  if (lowerMessage.includes('핥') || lowerMessage.includes('lick')) {
    return '핥기 행동은 애정 표현일 수도 있고 스트레스의 신호일 수도 있습니다. 위의 "핥기" 항목을 확인해보세요!';
  }
  
  if (lowerMessage.includes('파') || lowerMessage.includes('dig')) {
    return '파기 행동은 반려동물의 본능적인 행동입니다. "파기 행동" 항목에서 자세한 정보를 확인하실 수 있어요.';
  }
  
  // 기본 응답
  const responses = [
    '흥미로운 질문이네요! 위의 행동 해석 목록에서 관련 정보를 찾아보시거나, 지속적인 문제라면 수의사와 상담하시는 것을 권장합니다.',
    '반려동물의 행동은 다양한 의미를 가질 수 있어요. 더 구체적인 상황을 알려주시면 더 정확한 답변을 드릴 수 있습니다.',
    '해당 행동에 대한 정보를 찾지 못했습니다. 수의사나 동물 행동 전문가와 상담하시는 것을 권장합니다.',
    '반려동물의 건강과 행동에 대해서는 전문가의 조언이 가장 중요합니다. 걱정되시면 가까운 동물병원에 문의해보세요.'
  ];
  
  return responses[Math.floor(Math.random() * responses.length)];
}

/**
 * 행동 채팅 모달 닫기
 */
export function closeBehaviorChat() {
  const modal = document.getElementById('behavior-chat-modal');
  if (modal) {
    modal.classList.remove('modal--open');
    document.body.style.overflow = '';
    
    // 애니메이션 후 모달 제거
    setTimeout(() => {
      modal.remove();
    }, 300);
  }
  
  console.log('행동 해석 채팅 모달 닫기');
}

// 전역 함수로 노출
window.closeBehaviorChat = closeBehaviorChat;
