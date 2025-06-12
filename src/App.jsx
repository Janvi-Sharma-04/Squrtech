import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppSidebar from './component/AppSidebar';
import Home from './component/Home';
import Ask from './component/Ask';
import Notification from './component/Notification';
import Settings from './component/Settings';
import Document from './component/Document';
import './App.css';
// import MainContent from './component/MainContent';

function App() {
  return (
    <BrowserRouter>
      <div className="flex-1">
        <AppSidebar />
        <div className="flex-1 ml-20 p-8 bg-[#f4f3fb] ">
          <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<Home />} />
            <Route path="/ask" element={<Ask />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/settings" element={<Settings />} />
            <Route path='/document' element={<Document />} />
          </Routes>

        </div>
      </div>
    </BrowserRouter >
  );
}

export default App;
