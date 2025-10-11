import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type {
  AuthCredentials,
  AuthResponse,
  SignupPayload,
  UpdateProfilePayload,
  UserProfile,
} from '../types/api';
import { apiFetch } from '../api/client';

const AUTH_TOKEN_KEY = 'hbio-auth-token';

interface AuthState {
  user: UserProfile | null;
  token: string | null;
  expiresAt: string | null;
  loading: boolean;
  error: string | null;
  signup: (payload: SignupPayload) => Promise<void>;
  login: (credentials: AuthCredentials) => Promise<void>;
  logout: () => Promise<void>;
  fetchProfile: () => Promise<void>;
  updateProfile: (payload: UpdateProfilePayload) => Promise<void>;
  clearError: () => void;
}

const handleAuthResponse = (state: AuthState, data: AuthResponse) => {
  return {
    ...state,
    user: data.user,
    token: data.token,
    expiresAt: data.expires_at,
    loading: false,
    error: null,
  };
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      expiresAt: null,
      loading: false,
      error: null,

      clearError: () => set({ error: null }),

      signup: async (payload) => {
        set({ loading: true, error: null });
        try {
          const data = await apiFetch<AuthResponse>('/auth/signup', {
            method: 'POST',
            body: payload,
          });
          set((state) => handleAuthResponse(state, data));
        } catch (error) {
          set({ loading: false, error: error instanceof Error ? error.message : 'Signup failed' });
          throw error;
        }
      },

      login: async (credentials) => {
        set({ loading: true, error: null });
        try {
          const data = await apiFetch<AuthResponse>('/auth/login', {
            method: 'POST',
            body: credentials,
          });
          set((state) => handleAuthResponse(state, data));
        } catch (error) {
          set({ loading: false, error: error instanceof Error ? error.message : 'Login failed' });
          throw error;
        }
      },

      logout: async () => {
        const token = get().token;
        if (token) {
          try {
            await apiFetch('/auth/logout', {
              method: 'POST',
              authToken: token,
            });
          } catch (error) {
            console.error('Logout request failed', error);
          }
        }
        set({ user: null, token: null, expiresAt: null, error: null, loading: false });
      },

      fetchProfile: async () => {
        const token = get().token;
        if (!token) return;
        set({ loading: true });
        try {
          const user = await apiFetch<UserProfile>('/auth/profile', {
            method: 'GET',
            authToken: token,
          });
          set({ user, loading: false });
        } catch (error) {
          console.error('Failed to fetch profile', error);
          set({ loading: false });
        }
      },

      updateProfile: async (payload) => {
        const token = get().token;
        if (!token) throw new Error('Authentication required');
        set({ loading: true, error: null });
        try {
          const response = await apiFetch<{ user: UserProfile; session?: AuthResponse }>(
            '/auth/profile',
            {
              method: 'PUT',
              authToken: token,
              body: payload,
            }
          );

          set((state) => ({
            ...state,
            user: response.user,
            token: response.session?.token ?? state.token,
            expiresAt: response.session?.expires_at ?? state.expiresAt,
            loading: false,
            error: null,
          }));
        } catch (error) {
          set({ loading: false, error: error instanceof Error ? error.message : 'Update failed' });
          throw error;
        }
      },
    }),
    {
      name: AUTH_TOKEN_KEY,
      storage: createJSONStorage(() => localStorage),
      partialize: ({ user, token, expiresAt }) => ({ user, token, expiresAt }),
      onRehydrateStorage: () => (state) => {
        if (!state) return;
        const { expiresAt } = state.getState();
        if (expiresAt && new Date(expiresAt) < new Date()) {
          state.setState({ user: null, token: null, expiresAt: null });
        }
      },
    }
  )
);
