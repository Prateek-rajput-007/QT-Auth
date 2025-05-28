import { toast } from 'react-toastify';

export function logout() {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
}

// Add this function for named export
export function isAuthenticated() {
  return !!localStorage.getItem('token');
}