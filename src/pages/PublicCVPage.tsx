import { LinearProgress } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import React, { useState } from 'react';
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

export default function PublicCVPage() {
  const { userName } = useParams<{ userName: string }>();
  const [userData, setUser] = useState<{ user?: UserData; error: boolean }>({ user: undefined, error: false });
  const { user, error } = userData;

  React.useEffect(() => {
    (() => {
      firebaseDatabase
        .ref('/users/')
        .orderByChild('userName')
        .equalTo(userName)
        .once('value')

        .then((snapshot) => {
          const value = snapshot.val();
          if (value) {
            const l = Object.values(snapshot.val());
            console.log(l);
            const userData = l[0] as UserData;
            setUser((p) => ({ ...p, user: userData }));
          } else {
            setUser((p) => ({ ...p, error: true }));
          }
        });
    })();
  }, [userName]);

  if (error) {
    return <Redirect to='/' />;
  }

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
