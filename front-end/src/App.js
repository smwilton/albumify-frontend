
import './App.css';

import Home from './pages'
import SigninPage from './pages/signin'
import SignOutPage from './pages/signout'
import TopAlbumsPage from './pages/topAlbums'
import RegisterPage from './pages/register'
import AlbumInformationPage from './pages/albumInfo'
import AdminPage from './pages/adminPage'
import TopAlbumsFrontPage from './pages/topAlbumsFrontPage'
import MyPagePage from './pages/myPage'
import TopCards from './components/TopCards';
import SearchPage from './pages/search'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router style={{backgroundColor: '#3993b4'}}>
       <Routes>
     
        <Route path='/' element={<Home/>} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signout" element={<SignOutPage />} />
        <Route path="/top-albums" element={<TopAlbumsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/album-info/:id" element={<AlbumInformationPage />} />
        <Route path="/top-albums-main" element={<TopAlbumsFrontPage />} />
        <Route path="/my-page" element={<MyPagePage />} />
        <Route path="/top-cards" element={<TopCards />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/admin" element={<AdminPage />} />

       </Routes>

      
        </Router>
  );
}

export default App;
