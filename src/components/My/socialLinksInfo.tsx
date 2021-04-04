import { Email, Facebook, GitHub, Instagram, Link, LinkedIn, YouTube } from '@material-ui/icons';
import { Social } from '../../models';

type SocialLink = {
  provider: keyof Social;
  baseUrl: string;
  component: JSX.Element;
};
export const socialLinksInfo: SocialLink[] = [
  { provider: 'facebook', baseUrl: 'http://facebook.com/', component: <Facebook color='primary' /> },
  { provider: 'youtube', baseUrl: 'https://youtube.com/', component: <YouTube color='error' /> },
  { provider: 'instagram', baseUrl: 'http://instagram.com/', component: <Instagram /> },
  { provider: 'linkedin', baseUrl: 'https://www.linkedin.com/in/', component: <LinkedIn color='primary' /> },
  { provider: 'github', baseUrl: 'http://github.com/', component: <GitHub color='inherit' /> },
  { provider: 'stack-overflow', baseUrl: 'https://stackoverflow.com/users', component: <Link color='primary' /> },
  { provider: 'email', baseUrl: '', component: <Email color='primary' /> },
];

export function createDefaultSocialLinks() {
  return socialLinksInfo.reduce((acc, l) => {
    acc[l.provider] = '';
    return acc;
  }, {} as Social);
}
