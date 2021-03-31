import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Providers } from './Providers';
import { Routes } from './Routes';

function App() {
  return (
    <BrowserRouter>
      <Providers>
        <Routes />
      </Providers>
    </BrowserRouter>
  );
}

export default App;
