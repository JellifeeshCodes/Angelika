import { create } from 'zustand';

interface AuthState {
  authenticated: boolean;
  login: () => void;
}

export const useAuth = create<AuthState>((set) => ({
  authenticated: false,
  login: () => set({ authenticated: true }),
}));
