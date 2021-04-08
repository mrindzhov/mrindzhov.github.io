import { LinearProgress } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router';
import { firebaseDatabase } from '../App/firebase';
import { Copyright } from '../components/Copyright';
import AboutMe from '../components/My/AboutMe';
import ConnectWithMeForm from '../components/My/ConnectWithMeForm';
import MyHeader from '../components/My/MyHeader';
import MyIntro from '../components/My/MyIntro';
import MyProjects from '../components/My/MyProjects';
import MySkills from '../components/My/MySkills';
import MyStats from '../components/My/MyStats';
import MyWorkExperience from '../components/My/MyWorkExperience';
import { UserData } from '../models';

export type PublicUserData = UserData & { _id: string };
export type PublicUserDataState = { hasError: false; user?: PublicUserData } | { hasError: true; errorMessage: string };

const defaultUserData: PublicUserDataState = { user: undefined, hasError: false };

export default function PublicCVPage() {
  const { userName } = useParams<{ userName: string }>();
  const [userData, setUser] = useState<PublicUserDataState>(defaultUserData);

  useEffect(() => {
    firebaseDatabase
      .ref('/users/')
      .orderByChild('userName')
      .equalTo(userName)
      .once('value')
      .then((snapshot) => {
        const value = snapshot.val();
        if (value) {
          const [_id, userData] = Object.entries(value)[0] as [string, UserData];
          setUser({ hasError: false, user: { ...userData, _id } });
        } else {
          setUser({ hasError: true, errorMessage: 'Not found' });
        }
      });
  }, [userName]);

  if (userData.hasError) {
    return <Redirect to='/' />;
  }
  const { user } = userData;
  return !user ? (
    <LinearProgress />
  ) : (
    <div>
      <MyHeader /*{...user}*/ />
      <Container>
        <MyIntro {...user} />
        <AboutMe {...user} />
        <hr className='num' />
        <MyStats /*{...user}*/ />
        <MyProjects {...user} />
        <MySkills {...user} />
        <MyWorkExperience {...user} />

        <ConnectWithMeForm {...user} />
      </Container>
      <Copyright />
    </div>
  );
}
