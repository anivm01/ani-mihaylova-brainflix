import './App.scss';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VideoPage from './pages/VideoPage';
import HomePage from './pages/HomePage';



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="video/:videoId" element={<VideoPage />} />
        
      </Routes>    
    </BrowserRouter>

  );
}

export default App;
