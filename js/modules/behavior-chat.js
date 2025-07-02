
import { state } from '../state.js';

export function showBehaviorChat() {
  // 기존 모달이 있다면 제거
  const existingModal = document.getElementById('behavior-chat-modal');
  if (existingModal) {
    existingModal.remove();
  }
  
  // 행동 해석 데이터 가져오기
  const behaviors = state.data?.behaviors || [];
  const behaviorKeywords = behaviors.map(b => b.keyword).join(', ');
  
  // 모달 HTML 생성
  const modalHtml = `
    <div class="modal" id="behavior-chat-modal">
      <div class="modal__content chat-modal">
        <div class="modal__header">
          <h3>🤖 행동 해석 상담</h3>
          <button class="modal__close" onclick="closeBehaviorChat()" aria-label="모달 닫기">&times;</button>
        </div>
        <div class="modal__body">
          <div class="chat-container">
            <div class="chat-messages" id="behavior-chat-messages">
              <div class="chat-message bot-message">
                <div class="message-content">
                  안녕하세요! 반려동물의 행동에 대해 궁금한 점이 있으시면 언제든 물어보세요. 
                  <br><br>
                  현재 해석 가능한 행동: <strong>${behaviorKeywords}</strong>
                </div>
              </div>
            </div>
            <div class="chat-input-container">
              <input type="text" class="chat-input" id="behavior-chat-input" 
                     placeholder="예: 우리 강아지가 꼬리를 계속 흔드는데 무슨 의미인가요?"
                     maxlength="200">
              <button class="chat-send-btn" onclick="sendBehaviorMessage()">전송</button>
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
    
    // 입력창에 포커스
    const input = document.getElementById('behavior-chat-input');
    if (input) {
      setTimeout(() => input.focus(), 100);
      
      // Enter 키로 메시지 전송
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          sendBehaviorMessage();
        }
      });
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
  
  console.log('행동 해석 상담 모달 열기');
}

// 전역 함수로 노출
window.closeBehaviorChat = function() {
  const modal = document.getElementById('behavior-chat-modal');
  if (modal) {
    modal.classList.remove('modal--open');
    document.body.style.overflow = '';
    
    // 애니메이션 후 모달 제거
    setTimeout(() => {
      modal.remove();
    }, 300);
  }
  
  console.log('행동 해석 상담 모달 닫기');
};

window.sendBehaviorMessage = function() {
  const input = document.getElementById('behavior-chat-input');
  const messagesContainer = document.getElementById('behavior-chat-messages');
  
  if (!input || !messagesContainer) return;
  
  const message = input.value.trim();
  if (!message) return;
  
  // 사용자 메시지 추가
  const userMessageHtml = `
    <div class="chat-message user-message">
      <div class="message-content">${escapeHtml(message)}</div>
    </div>
  `;
  messagesContainer.insertAdjacentHTML('beforeend', userMessageHtml);
  
  // 입력창 초기화
  input.value = '';
  
  // 타이핑 인디케이터 표시
  const typingHtml = `
    <div class="chat-message bot-message typing-message">
      <div class="message-content">
        <div class="typing-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  `;
  messagesContainer.insertAdjacentHTML('beforeend', typingHtml);
  
  // 스크롤을 맨 아래로
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
  
  // 2초 후 AI 응답 생성
  setTimeout(() => {
    // 타이핑 인디케이터 제거
    const typingMessage = messagesContainer.querySelector('.typing-message');
    if (typingMessage) {
      typingMessage.remove();
    }
    
    // AI 응답 생성
    const response = generateBehaviorResponse(message);
    const botMessageHtml = `
      <div class="chat-message bot-message">
        <div class="message-content">${response}</div>
      </div>
    `;
    messagesContainer.insertAdjacentHTML('beforeend', botMessageHtml);
    
    // 스크롤을 맨 아래로
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }, 2000);
};

function generateBehaviorResponse(userMessage) {
  const behaviors = state.data?.behaviors || [];
  const lowerMessage = userMessage.toLowerCase();
  
  // 키워드 매칭으로 관련 행동 찾기
  const matchedBehavior = behaviors.find(behavior => 
    lowerMessage.includes(behavior.keyword.toLowerCase()) ||
    behavior.keyword.toLowerCase().includes(lowerMessage.split(' ')[0])
  );
  
  if (matchedBehavior) {
    return `
      <strong>${matchedBehavior.keyword}</strong>에 대한 해석을 드릴게요!
      <br><br>
      <strong>🔍 의미:</strong> ${matchedBehavior.meaning}
      <br><br>
      <strong>📝 예시:</strong> ${matchedBehavior.examples}
      <br><br>
      <strong>💡 대응방법:</strong> ${matchedBehavior.action}
      <br><br>
      <small>더 자세한 정보나 다른 궁금한 점이 있으시면 언제든 말씀해주세요!</small>
    `;
  } else {
    // 일반적인 응답
    const suggestions = behaviors.slice(0, 3).map(b => b.keyword).join(', ');
    return `
      죄송하지만 해당 행동에 대한 구체적인 정보를 찾을 수 없습니다. 
      <br><br>
      현재 해석 가능한 주요 행동들은 다음과 같습니다: <strong>${suggestions}</strong> 등이 있어요.
      <br><br>
      다시 구체적인 행동 키워드로 질문해주시면 더 정확한 답변을 드릴 수 있습니다!
      <br><br>
      예: "꼬리 흔들기 의미가 뭔가요?" 또는 "계속 핥는 행동이 뭘까요?"
    `;
  }
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
