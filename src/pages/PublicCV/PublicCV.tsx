import { LinearProgress } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { Copyright } from 'components/Copyright';
import { UserData } from 'models/user.models';
import React, { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router';
import { firebaseDatabase } from 'utils/firebase';
import AboutMe from './AboutMe';
import ConnectWithMeForm from './ConnectWithMeForm';
import { PublicUserDataState } from './models';
import MyHeader from './MyHeader';
import MyIntro from './MyIntro';
import MyProjects from './MyProjects';
import MySkills from './MySkills';
import MyStats from './MyStats';
import MyWorkExperience from './MyWorkExperience';

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
