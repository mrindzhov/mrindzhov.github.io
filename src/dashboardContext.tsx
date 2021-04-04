import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { firebaseAuth, firebaseDatabase } from './App/firebase';
import { UserData } from './models';
import { initialUserDataState } from './pages/mockData';

type DrawerContextState = {
  open: boolean;
  hasChanges: boolean;
  saveChanges: () => void;
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
  setDrawerState: React.Dispatch<React.SetStateAction<boolean>>;
};

export const DashboardContext = createContext<DrawerContextState>({} as DrawerContextState);

export function DashboardProvider({ children }: any) {
  const [drawerState, setDrawerState] = useState(true);
  const [user] = useAuthState(firebaseAuth);
  const [initialUserData, setInitialUserData] = useState<UserData>(initialUserDataState);
  const [userData, setUserData] = useState<UserData>(initialUserDataState);

  const hasChanges = useMemo(() => {
    return JSON.stringify(initialUserData) !== JSON.stringify(userData);
  }, [userData, initialUserData]);

  const saveChanges = useCallback(async () => {
    if (user) {
      const newUserData: UserData = {
        ...initialUserDataState,
        ...userData,
        social: { ...initialUserDataState.social, ...userData.social },
        techSkills: userData?.techSkills?.filter((s) => s.name) || [],
      };

      await firebaseDatabase.ref('users/' + user.uid).set(newUserData);

      setInitialUserData(newUserData);
      setUserData(newUserData);
    }
  }, [user, userData]);

  useEffect(() => {
    if (user) {
      firebaseDatabase
        .ref('users/' + user.uid)
        .once('value')
        .then((a) => {
          setInitialUserData(a.val());
          setUserData(a.val());
        });
    }
  }, [user]);

  const value = useMemo(
    () => ({
      open: drawerState,
      setDrawerState,
      hasChanges,
      saveChanges,
      userData,
      setUserData,
    }),
    [drawerState, hasChanges, saveChanges, userData]
  );
  return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>;
}
export function useDashboard() {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
}
