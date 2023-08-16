import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
// import Navbar from '@modules/Navbar';
import Landing from '@pages/Landing';

const AppRouter: React.FC = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <main className="flex flex-col w-full items-center">
        <div className="flex flex-col items-center w-full max-w-1920px">
          <Routes>
            <Route index path="/" element={<Landing />} />
            <Route key="landing" path="landing" element={<Landing />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
};

export default AppRouter;
