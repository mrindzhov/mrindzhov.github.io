import { IProps, Project } from 'models/user.models';
import { createContext, useCallback, useContext, useState } from 'react';
import { getNewId } from 'utils';
import { useDashboard } from '../../useDashboard';

const defaultProject: Project = {
  id: 0,
  title: '',
  description: '',
  imageUrl: '',
  projectUrl: '',
};

type PortfolioContextState = {
  open: boolean;
  project: Project;
  openProjectDialog: (selectedProject: Project | null) => () => void;
  handleClose: () => void;
  saveProject: () => void;
  deleteProject: (projectId: number) => () => void;
  handleFieldChange: ({ target: { value, name } }: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
};

const PortfolioContext = createContext<PortfolioContextState>({} as PortfolioContextState);

export function PortfolioProvider({ children }: IProps) {
  const [open, setOpen] = useState(false);
  const { setUserData } = useDashboard();
  const [project, setProject] = useState<Project>(defaultProject);

  const handleFieldChange = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setProject((prevState) => ({ ...prevState, [name]: value }));
  };

  const openProjectDialog = useCallback((selectedProject: Project | null) => {
    return () => {
      setProject(selectedProject ?? defaultProject);
      setOpen(true);
    };
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
    setProject(defaultProject);
  }, []);

  const saveProject = useCallback(() => {
    setUserData((prevState) => {
      const newPortfolio = prevState?.portfolio || [];

      const portfolio: Project[] =
        project.id > 0
          ? newPortfolio.map((p) => (p.id === project.id ? project : p)) // edit
          : [...newPortfolio, { ...project, id: getNewId(newPortfolio) }]; // add
      return { ...prevState, portfolio };
    });
    handleClose();
  }, [handleClose, project, setUserData]);

  const deleteProject = useCallback(
    (projectId: number) => () => {
      setUserData((prevState) => ({
        ...prevState,
        portfolio: prevState.portfolio?.filter((pr) => pr.id !== projectId) || [],
      }));
    },
    [setUserData]
  );

  return (
    <PortfolioContext.Provider
      value={{ open, openProjectDialog, handleClose, project, saveProject, deleteProject, handleFieldChange }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
}
