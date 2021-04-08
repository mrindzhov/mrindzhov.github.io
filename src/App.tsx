import { Providers } from 'providers/Providers';
import { Routes } from 'providers/Routes';
import { BrowserRouter } from 'react-router-dom';

export function App() {
  return (
    <BrowserRouter>
      <Providers>
        <Routes />
      </Providers>
    </BrowserRouter>
  );
}
