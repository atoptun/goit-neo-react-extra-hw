export const debugUser = import.meta.env.DEV
  ? {
      name: import.meta.env.VITE_DEBUG_NAME || '',
      email: import.meta.env.VITE_DEBUG_EMAIL || '',
      password: import.meta.env.VITE_DEBUG_PASSWORD || '',
    }
  : null;
