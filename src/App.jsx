import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MobileNavbar from "./components/MobileNavbar";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import useLocationChange from "./hooks/useLocationChange";
import Channel from "./pages/Channel";
import History from "./pages/History";
import Home from "./pages/Home";
import Library from "./pages/Library";
import LikedVideos from "./pages/LikedVideos";
import MyVideos from "./pages/MyVideos";
import NotFound from "./pages/NotFound";
import SearchResults from "./pages/SearchResults";
import Subscriptions from "./pages/Subscriptions";
import Trending from "./pages/Trending";
import WatchVideo from "./pages/WatchVideo";
import Container from "./styles/Container";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  useLocationChange(handleCloseSidebar);

  function handleCloseSidebar() {
    setSidebarOpen(false);
  }

  function handleToggleSidebar() {
    setSidebarOpen(!isSidebarOpen);
  }
  return (
    <>
      {/* Navbar */}
      <Navbar handleToggleSidebar={handleToggleSidebar} />
      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} />
      {/* MobileNavbar */}
      <MobileNavbar />
      <Container>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch/:videoId" element={<WatchVideo />} />
          <Route path="/channel/:channelId" element={<Channel />} />
          <Route path="/results/:searchQuery" element={<SearchResults />} />
          <Route path="/feed/trending" element={<Trending />} />
          <Route path="/feed/subscriptions" element={<Subscriptions />} />
          <Route path="/feed/library" element={<Library />} />
          <Route path="/feed/history" element={<History />} />
          <Route path="/feed/my_videos" element={<MyVideos />} />
          <Route path="/feed/liked_videos" element={<LikedVideos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
