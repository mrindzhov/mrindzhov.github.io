import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { useAuthState } from './AuthContext';
import Layout from './Layout';
import { Providers } from './Providers';
import { PrivateRoutes, PublicRoutes } from './Routes';

function App() {
  const { isAuthenticated } = useAuthState();
  return (
    <BrowserRouter>
      <Providers>
        {isAuthenticated ? (
          <Layout>
            <PrivateRoutes />
          </Layout>
        ) : (
          <Layout noHeader>
            <PublicRoutes />
          </Layout>
        )}
      </Providers>
    </BrowserRouter>
  );
}

export default App;
