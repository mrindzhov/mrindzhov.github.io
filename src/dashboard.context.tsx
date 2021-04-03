import { createContext, useContext, useState } from 'react';

type DrawerState = {
  open: boolean;
};

type DrawerContextState = {
  open: boolean;
  setDrawerState: React.Dispatch<React.SetStateAction<boolean>>;
};

export const DashboardContext = createContext<DrawerContextState>({} as DrawerContextState);

export function DashboardProvider({ children }: any) {
  const [drawerState, setDrawerState] = useState(true);

  const value = { open: drawerState, setDrawerState };

  return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>;
}
export function useDashboard() {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
}
