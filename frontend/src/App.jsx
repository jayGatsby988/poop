import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

import Signup from './pages/signup';
import Login from './pages/login';
import Index from './pages/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />

          <Route path = "signedup/base" element = {<Index />} />
          <Route path="*" element={<Login  />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
