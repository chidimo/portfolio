import { toast } from 'react-toastify';

export default {
  // Keep the signature of the original toast object
  // Doing so you can pass additionnal options
  success: (msg, options = {}) => {
    return toast.success(msg, {
      ...options,
      className: 'toast-success-container',
      progressClassName: 'progress__background',
    });
  },

  error: (msg, options = {}) => {
    return toast.error(msg, {
      ...options,
      className: 'toast-error-container',
      progressClassName: 'progress__background',
    });
  },

  warn: (msg, options = {}) => {
    return toast.warn(msg, {
      ...options,
      className: 'toast-warn-container',
      progressClassName: 'progress__background',
    });
  },

  info: (msg, options = {}) => {
    return toast.info(msg, {
      ...options,
      className: 'toast-info-container',
      progressClassName: 'progress__background',
    });
  },
};
