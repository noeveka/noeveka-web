import { create } from "zustand";
import { readUserCookie, writeUserCookie, clearUserCookie } from "@/lib/user-cookie";

export interface UserIdentity {
  name: string;
  email: string;
}

interface UserIdentityState {
  /** Populated after the user submits the download form (or on mount if cookie exists). */
  identity: UserIdentity | null;
  /** Whether the store has been hydrated from the cookie yet. */
  hydrated: boolean;

  /**
   * Hydrate the store from the cookie.
   * Call once on app mount (or inside DownloadModal on first render).
   */
  hydrate: () => void;

  /**
   * Persist identity to Zustand store + write the 30-day cookie.
   * Call after a successful form submission.
   */
  setIdentity: (name: string, email: string) => void;

  /**
   * Clear identity from store and delete the cookie.
   * Called when the user clicks "Not you? Use a different email".
   */
  clearIdentity: () => void;
}

export const useUserIdentityStore = create<UserIdentityState>((set) => ({
  identity: null,
  hydrated: false,

  hydrate: () => {
    const cookie = readUserCookie();
    set({ identity: cookie ?? null, hydrated: true });
  },

  setIdentity: (name: string, email: string) => {
    writeUserCookie(name, email);
    set({ identity: { name, email } });
  },

  clearIdentity: () => {
    clearUserCookie();
    set({ identity: null });
  },
}));
