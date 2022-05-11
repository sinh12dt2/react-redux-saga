import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from 'react';
const Home = lazy(() => import('./pages/Home'));
const SinglePost = lazy(() => import('./pages/SinglePost'));
const App = () => {
  console.log('App render');
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/single" element={<SinglePost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App; 
