import { useState } from 'react';
import { STATUS } from '../config';
import './ChatInput.css';

const PLACEHOLDERS = {
  [STATUS.ACCESS_GRANTED]: "You're in. Enjoy the room.",
  [STATUS.TURNS_EXHAUSTED]: 'The queue has moved on without you.',
  [STATUS.EJECTED]: 'Marcus is not listening any more.',
};

const MAX_CHARS = 500;

export function ChatInput({ onSend, isLoading, disabled, status }) {
  const [message, setMessage] = useState('');
  const locked = disabled || isLoading;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!message.trim() || locked) return;
    onSend(message.trim());
    setMessage('');
  };

  return (
    <form className="chat-input-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="chat-input"
        value={message}
        maxLength={MAX_CHARS}
        onChange={(event) => setMessage(event.target.value)}
        placeholder={PLACEHOLDERS[status] ?? 'What do you say to the doorman?'}
        disabled={locked}
        autoComplete="off"
        autoFocus
        aria-label="What do you say to the doorman?"
      />
      <button
        type="submit"
        className="send-button"
        disabled={locked || !message.trim()}
        aria-label="Say it"
      >
        {isLoading ? (
          <span className="loading-dots" aria-hidden="true">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </span>
        ) : (
          <span className="send-icon" aria-hidden="true">
            &#10148;
          </span>
        )}
      </button>
    </form>
  );
}
