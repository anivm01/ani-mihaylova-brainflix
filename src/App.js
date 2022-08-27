import './App.scss';
import Header from './components/PageHeader/PageHeader';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import VideoPage from './pages/VideoPage';
import HomePage from './pages/HomePage';
import UploadPage from './pages/UploadPage';
import Loading from './components/Loading/Loading';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="video/:videoId" element={<VideoPage />} />
        <Route path="upload" element={<UploadPage />} />
        <Route path="loading" element={<Loading />} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>    
    </BrowserRouter>
  );
}

export default App;
