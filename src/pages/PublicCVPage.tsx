import Container from '@material-ui/core/Container';
import React, { useState } from 'react';
import { useParams } from 'react-router';
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
import { demoUserData } from './mockData';

export default function PublicCVPage() {
  const { userName } = useParams<{ userName: string }>();
  const [user] = useState(demoUserData);

  React.useEffect(() => {
    (() => {
      firebaseDatabase
        .ref('/users/')
        .orderByChild('userName')
        .equalTo(userName)
        .once('value')
        .then((snapshot) => {
          console.log('--', snapshot.val());

          const username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
          console.log(username);
        });
    })();
  }, [userName]);

  return (
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
