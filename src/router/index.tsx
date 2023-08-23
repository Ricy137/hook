import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "@modules/Navbar";
import Plaza from "@pages/Plaza";
import Profile from "@pages/Profile";
import CreateProfile from "@pages/Profile/CreateProfile";
import ProfileDetail from "@pages/ProfileDetail";
import ExplorerProfile from "@pages/Explorer/profile";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <main className="relative top-80px flex flex-col w-full items-center">
        <div className="flex flex-col items-center w-full max-w-1440px">
          <Routes>
            <Route index path="/" element={<Plaza />} />
            <Route key="plaza" path="plaza" element={<Plaza />} />
            <Route key="profile" path="profile" element={<Profile />} />
            <Route
              key="profileId"
              path="profile/:profileId"
              element={<ProfileDetail />}
            />
            <Route
              key="profileCreate"
              path="profile/create"
              element={<CreateProfile />}
            />
            <Route
              key="explorerProfile"
              path="explorer/profile/:OwnerAddress"
              element={<ExplorerProfile />}
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
};

export default AppRouter;
