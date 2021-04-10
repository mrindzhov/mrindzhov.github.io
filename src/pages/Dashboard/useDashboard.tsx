import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { firebaseAuth, firebaseDatabase } from 'utils/firebase';
import { IProps, UserData } from 'models/user.models';
import { initialUserDataState } from 'utils/mockData';

type DashboardContextState = {
  drawerOpen: boolean;
  hasChanges: boolean;
  saveChanges: () => void;
  discardChanges: () => void;
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DashboardContext = createContext<DashboardContextState>({} as DashboardContextState);

export function DashboardProvider({ children }: IProps) {
  const [drawerOpen, setDrawerOpen] = useState(true);
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
        softSkills: userData?.softSkills?.filter((s) => s.name) || [],
        interests: userData?.interests?.filter((s) => s.name) || [],
      };

      await firebaseDatabase.ref('users/' + user.uid).set(newUserData);

      setInitialUserData(newUserData);
      setUserData(newUserData);
    }
  }, [user, userData]);

  const discardChanges = useCallback(async () => setUserData(initialUserData), [initialUserData]);

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

  const value = useMemo(() => {
    return { drawerOpen, setDrawerOpen, hasChanges, saveChanges, discardChanges, userData, setUserData };
  }, [discardChanges, drawerOpen, hasChanges, saveChanges, userData]);

  return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>;
}
export function useDashboard() {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
}
