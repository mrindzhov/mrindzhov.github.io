import { useParams } from 'react-router';

export default function PublicCVPage() {
  const { userName } = useParams<{ userName: string }>();
  /* TODO: <Route render={() => <Redirect to='/' />} /> */

  return <div> {userName} CV goes here</div>;
}
