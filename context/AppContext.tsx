"use client";

import React, { createContext, useContext, useState, useCallback, useRef } from "react";

type Role = "parent" | "volunteer" | "admin" | null;
type Language = "English" | "Hindi" | "Marathi" | "Tamil" | "Telugu" | "Bengali";

interface ToastState {
  message: string;
  visible: boolean;
}

interface AppContextType {
  currentRole: Role;
  currentLanguage: Language;
  isAdminAuthenticated: boolean;
  toast: ToastState;
  setRole: (role: Role) => void;
  setLanguage: (lang: Language) => void;
  setAdminAuth: (auth: boolean) => void;
  showToast: (message: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [currentRole, setCurrentRole] = useState<Role>(null);
  const [currentLanguage, setCurrentLanguage] = useState<Language>("English");
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [toast, setToast] = useState<ToastState>({ message: "", visible: false });
  const toastTimer = useRef<NodeJS.Timeout | null>(null);

  const setRole = useCallback((role: Role) => {
    setCurrentRole(role);
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setCurrentLanguage(lang);
  }, []);

  const setAdminAuth = useCallback((auth: boolean) => {
    setIsAdminAuthenticated(auth);
  }, []);

  const showToast = useCallback((message: string) => {
    if (toastTimer.current) {
      clearTimeout(toastTimer.current);
    }
    setToast({ message, visible: true });
    toastTimer.current = setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 3000);
  }, []);

  return (
    <AppContext.Provider
      value={{
        currentRole,
        currentLanguage,
        isAdminAuthenticated,
        toast,
        setRole,
        setLanguage,
        setAdminAuth,
        showToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
