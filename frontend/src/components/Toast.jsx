import React, { useState, useCallback } from 'react';
import '../styles/Toast.module.css';

export const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'info', duration = 3000) => {
    const id = Date.now();
    const toast = {
      id,
      message,
      type, // 'success', 'error', 'info', 'warning'
      duration,
    };

    setToasts(prev => [...prev, toast]);

    if (duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }

    return id;
  }, []);

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const success = useCallback((message, duration = 3000) => 
    addToast(message, 'success', duration), [addToast]);
  
  const error = useCallback((message, duration = 3000) => 
    addToast(message, 'error', duration), [addToast]);
  
  const warning = useCallback((message, duration = 3000) => 
    addToast(message, 'warning', duration), [addToast]);
  
  const info = useCallback((message, duration = 3000) => 
    addToast(message, 'info', duration), [addToast]);

  return {
    toasts,
    addToast,
    removeToast,
    success,
    error,
    warning,
    info,
  };
};

const Toast = ({ id, message, type, onClose }) => {
  return (
    <div 
      className={`toast toast-${type}`}
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="toast-content">
        <span className="toast-icon" aria-hidden="true">
          {type === 'success' && '✓'}
          {type === 'error' && '✕'}
          {type === 'warning' && '⚠'}
          {type === 'info' && 'ℹ'}
        </span>
        <p className="toast-message">{message}</p>
      </div>
      <button 
        className="toast-close"
        onClick={() => onClose(id)}
        aria-label="Close notification"
      >
        ✕
      </button>
    </div>
  );
};

export const ToastContainer = ({ toasts, onClose }) => {
  return (
    <div className="toast-container" role="region" aria-label="Notifications">
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          {...toast}
          onClose={onClose}
        />
      ))}
    </div>
  );
};

export default Toast;
