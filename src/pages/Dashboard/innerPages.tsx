import { Book, Comment, Flag, Inbox, Person, Work } from '@material-ui/icons';
import LayersIcon from '@material-ui/icons/Layers';
import { BasicsSetup } from './tabs/BasicsSetup';
import { ExperiencesSetupContainer } from './tabs/ExperienceSetup';
import { PortfolioSetupContainer } from './tabs/PortfolioSetup';
import { AllSkillsSetup } from './tabs/SkillsSetup';
import { UserInbox } from './tabs/UserInbox';

export type RouteElement = {
  to: string;
  text: string;
  icon: JSX.Element;
  component: JSX.Element | null;
  visibleIndex?: number;
};

export const dashboardPages: RouteElement[] = [
  { to: '/', text: 'Basic', icon: <Person />, component: <BasicsSetup /> },
  { to: '/experience', text: 'Experience', icon: <Work />, component: <ExperiencesSetupContainer /> },
  { to: '/skills', text: 'Skills', icon: <Flag />, component: <AllSkillsSetup /> },
  { to: '/portfolio', text: 'Portfolio', icon: <LayersIcon />, component: <PortfolioSetupContainer /> },
  { to: '/education', text: 'Education', icon: <Book />, component: null },
  { to: '/testimonials', text: 'Testimontials', icon: <Comment />, component: null },
  { to: '/inbox', text: 'Inbox', icon: <Inbox />, component: <UserInbox />, visibleIndex: -1 },
];
