(function() {
  'use strict';

  const config = {
    apiEndpoint: 'https://askminimo.com/api/chat',
    position: 'right',
    greeting: "Hey there, I'm MiniMo — your calm guide for all things real estate. No pressure, no sales pitch — just clarity. What's on your mind?",
    brandColor: '#6B8A7A',
    brandColorHover: '#5A7A69',
    brandColorLight: '#E8F0EC',
    ...window.MiniMoConfig
  };

  const styles = `
    #minimo-widget-container {
      --minimo-brand: ${config.brandColor};
      --minimo-brand-hover: ${config.brandColorHover};
      --minimo-brand-light: ${config.brandColorLight};
      --minimo-white: #FFFFFF;
      --minimo-ink: #1a1a1a;
      --minimo-ink-light: #6b7280;
      --minimo-border: #e5e7eb;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 16px;
      line-height: 1.5;
      box-sizing: border-box;
    }
    #minimo-widget-container *, #minimo-widget-container *::before, #minimo-widget-container *::after { box-sizing: border-box; }
    #minimo-toggle-btn {
      position: fixed;
      bottom: 24px;
      right: 24px;
      height: 48px;
      padding: 0 20px 0 16px;
      border-radius: 24px;
      background: var(--minimo-brand);
      border: none;
      cursor: pointer;
      box-shadow: 0 4px 20px rgba(107, 138, 122, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      transition: all 0.3s ease;
      z-index: 999998;
      color: var(--minimo-white);
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 15px;
      font-weight: 500;
    }
    #minimo-toggle-btn:hover {
      background: var(--minimo-brand-hover);
      transform: translateY(-2px);
      box-shadow: 0 6px 25px rgba(107, 138, 122, 0.5);
    }
    #minimo-toggle-btn svg { width: 20px; height: 20px; fill: var(--minimo-white); flex-shrink: 0; }
    #minimo-toggle-btn span { white-space: nowrap; }
    #minimo-chat-window {
      position: fixed;
      bottom: 100px;
      right: 24px;
      width: 380px;
      max-width: calc(100vw - 48px);
      height: 550px;
      max-height: calc(100vh - 140px);
      background: var(--minimo-white);
      border-radius: 20px;
      box-shadow: 0 10px 50px rgba(0, 0, 0, 0.15);
      display: none;
      flex-direction: column;
      overflow: hidden;
      z-index: 999999;
      animation: minimo-slide-up 0.3s ease;
    }
    #minimo-chat-window.open { display: flex; }
    @keyframes minimo-slide-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    #minimo-header {
      background: var(--minimo-brand);
      color: var(--minimo-white);
      padding: 16px 20px;
      display: flex;
      align-items: center;
      gap: 12px;
      flex-shrink: 0;
    }
    #minimo-avatar {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: var(--minimo-white);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      flex-shrink: 0;
    }
    #minimo-header-text { flex: 1; }
    #minimo-header-title { font-weight: 600; font-size: 17px; margin: 0; }
    #minimo-header-subtitle { font-size: 13px; opacity: 0.9; margin: 2px 0 0 0; }
    #minimo-close-btn {
      background: rgba(255,255,255,0.2);
      border: none;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s;
    }
    #minimo-close-btn:hover { background: rgba(255,255,255,0.3); }
    #minimo-close-btn svg { width: 18px; height: 18px; stroke: var(--minimo-white); }
    #minimo-messages {
      flex: 1;
      overflow-y: auto;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      background: #fafafa;
    }
    .minimo-message { max-width: 85%; animation: minimo-fade-in 0.3s ease; }
    @keyframes minimo-fade-in { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
    .minimo-message.user { align-self: flex-end; }
    .minimo-message.assistant { align-self: flex-start; }
    .minimo-message-content { padding: 12px 16px; border-radius: 18px; font-size: 15px; line-height: 1.5; }
    .minimo-message.user .minimo-message-content { background: var(--minimo-brand); color: var(--minimo-white); border-bottom-right-radius: 6px; }
    .minimo-message.assistant .minimo-message-content { background: var(--minimo-white); color: var(--minimo-ink); border: 1px solid var(--minimo-border); border-bottom-left-radius: 6px; }
    .minimo-typing { display: flex; gap: 4px; padding: 12px 16px; background: var(--minimo-white); border-radius: 18px; border: 1px solid var(--minimo-border); width: fit-content; }
    .minimo-typing-dot { width: 8px; height: 8px; background: var(--minimo-brand); border-radius: 50%; animation: minimo-bounce 1.4s infinite ease-in-out; }
    .minimo-typing-dot:nth-child(1) { animation-delay: -0.32s; }
    .minimo-typing-dot:nth-child(2) { animation-delay: -0.16s; }
    @keyframes minimo-bounce { 0%, 80%, 100% { transform: scale(0.6); opacity: 0.5; } 40% { transform: scale(1); opacity: 1; } }
    #minimo-input-area { padding: 16px 20px; background: var(--minimo-white); border-top: 1px solid var(--minimo-border); display: flex; gap: 10px; flex-shrink: 0; }
    #minimo-input { flex: 1; padding: 12px 16px; border: 1px solid var(--minimo-border); border-radius: 24px; font-size: 15px; outline: none; transition: border-color 0.2s, box-shadow 0.2s; font-family: inherit; }
    #minimo-input:focus { border-color: var(--minimo-brand); box-shadow: 0 0 0 3px var(--minimo-brand-light); }
    #minimo-input::placeholder { color: var(--minimo-ink-light); }
    #minimo-send-btn { width: 44px; height: 44px; border-radius: 50%; background: var(--minimo-brand); border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s; flex-shrink: 0; }
    #minimo-send-btn:hover:not(:disabled) { background: var(--minimo-brand-hover); transform: scale(1.05); }
    #minimo-send-btn:disabled { opacity: 0.5; cursor: not-allowed; }
    #minimo-send-btn svg { width: 20px; height: 20px; fill: var(--minimo-white); }
    #minimo-footer { padding: 10px 20px 14px; text-align: center; font-size: 11px; color: var(--minimo-ink-light); background: var(--minimo-white); }
    #minimo-footer a { color: var(--minimo-brand); text-decoration: none; }
    #minimo-footer a:hover { text-decoration: underline; }
    @media (max-width: 480px) {
      #minimo-chat-window { bottom: 0; right: 0; width: 100%; max-width: 100%; height: 100%; max-height: 100%; border-radius: 0; }
      #minimo-toggle-btn { bottom: 16px; right: 16px; height: 44px; padding: 0 16px 0 12px; font-size: 14px; }
    }
  `;

  const template = `
    <div id="minimo-widget-container">
      <button id="minimo-toggle-btn" aria-label="Open chat with MiniMo">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>
        <span>Ask MiniMo</span>
      </button>
      <div id="minimo-chat-window" role="dialog" aria-label="Chat with MiniMo">
        <div id="minimo-header">
          <div id="minimo-avatar">💚</div>
          <div id="minimo-header-text">
            <p id="minimo-header-title">MiniMo</p>
            <p id="minimo-header-subtitle">Real Estate Clarity Companion</p>
          </div>
          <button id="minimo-close-btn" aria-label="Close chat">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>
        <div id="minimo-messages" role="log" aria-live="polite"></div>
        <div id="minimo-input-area">
          <input type="text" id="minimo-input" placeholder="Ask about buying, selling, VA loans..." aria-label="Type your message"/>
          <button id="minimo-send-btn" aria-label="Send message">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
          </button>
        </div>
        <div id="minimo-footer">Powered by <a href="https://askminimo.com" target="_blank" rel="noopener">Ask MiniMo</a> • <a href="https://momentusrealestategroup.com" target="_blank" rel="noopener">Momentus Real Estate Group</a></div>
      </div>
    </div>
  `;

  let isOpen = false;
  let isLoading = false;
  let messages = [];

  function init() {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
    const container = document.createElement('div');
    container.innerHTML = template;
    document.body.appendChild(container.firstElementChild);
    const toggleBtn = document.getElementById('minimo-toggle-btn');
    const chatWindow = document.getElementById('minimo-chat-window');
    const closeBtn = document.getElementById('minimo-close-btn');
    const input = document.getElementById('minimo-input');
    const sendBtn = document.getElementById('minimo-send-btn');
    const messagesContainer = document.getElementById('minimo-messages');
    toggleBtn.addEventListener('click', () => {
      isOpen = !isOpen;
      chatWindow.classList.toggle('open', isOpen);
      toggleBtn.classList.toggle('open', isOpen);
      if (isOpen) { input.focus(); if (messages.length === 0) { addMessage('assistant', config.greeting); } }
    });
    closeBtn.addEventListener('click', () => { isOpen = false; chatWindow.classList.remove('open'); toggleBtn.classList.remove('open'); });
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); } });
    sendBtn.addEventListener('click', sendMessage);
    async function sendMessage() {
      const text = input.value.trim();
      if (!text || isLoading) return;
      addMessage('user', text);
      input.value = '';
      input.focus();
      isLoading = true;
      sendBtn.disabled = true;
      showTyping();
      try {
        const apiMessages = messages.map(m => ({ role: m.role, content: m.content }));
        const response = await fetch(config.apiEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ messages: apiMessages, isAgent: false }) });
        if (!response.ok) throw new Error('API request failed');
        const data = await response.json();
        hideTyping();
        addMessage('assistant', data.message || "I'm having a moment — please try again.");
      } catch (error) {
        console.error('MiniMo error:', error);
        hideTyping();
        addMessage('assistant', "I'm having trouble connecting right now. Please try again in a moment, or visit askminimo.com directly.");
      } finally { isLoading = false; sendBtn.disabled = false; }
    }
    function addMessage(role, content) {
      messages.push({ role, content });
      const messageDiv = document.createElement('div');
      messageDiv.className = 'minimo-message ' + role;
      const contentDiv = document.createElement('div');
      contentDiv.className = 'minimo-message-content';
      contentDiv.textContent = content;
      messageDiv.appendChild(contentDiv);
      messagesContainer.appendChild(messageDiv);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
    function showTyping() {
      const typingDiv = document.createElement('div');
      typingDiv.id = 'minimo-typing';
      typingDiv.className = 'minimo-message assistant';
      typingDiv.innerHTML = '<div class="minimo-typing"><div class="minimo-typing-dot"></div><div class="minimo-typing-dot"></div><div class="minimo-typing-dot"></div></div>';
      messagesContainer.appendChild(typingDiv);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
    function hideTyping() { const typing = document.getElementById('minimo-typing'); if (typing) typing.remove(); }
  }
  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', init); } else { init(); }
})();
