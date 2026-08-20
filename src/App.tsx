import React, { Component, ReactNode } from 'react';
import { AGENTS, ClippyProvider } from "@react95/clippy";
import { Amovie2, Inetcpl1313, Joy102, Wordpad, Mail, Pbrush1 } from "@react95/icons";

import Login from "./components/Login";
import WindowBar from "./components/WindowBar";
import DesktopIcon from "./components/DesktopIcon";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Game from "./components/Game";
import ArtGallery from "./components/ArtGallery";
import { useAuth } from "./store/auth";

import winLogo from './assets/logo.png';

class WindowErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean; error: string }> {
  state = { hasError: false, error: '' };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error: error.toString() };
  }

  componentDidCatch(error: Error, info: any) {
    console.error("Window Error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '16px', color: 'red', backgroundColor: '#fff', border: '2px solid red', width: '300px' }}>
          <h4 style={{ margin: '0 0 8px 0' }}>Window Error</h4>
          <pre style={{ fontSize: '11px', whiteSpace: 'pre-wrap', margin: 0 }}>{this.state.error}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  const authenticated = useAuth((state) => state.authenticated);

  return (
    <div 
      style={{ 
        width: "100vw", 
        height: "100vh", 
        backgroundColor: "#098684", 
        position: "relative", 
        overflow: "hidden" 
      }}
    >
      <img 
        src={winLogo} 
        alt="Windows 95 Logo" 
        width={400} 
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -70%)",
          zIndex: 0,
          pointerEvents: "none"
        }}
      />

      {!authenticated ? (
        <Login />
      ) : (
        <ClippyProvider agentName={AGENTS.MERLIN}>
          <div 
            style={{ 
              padding: "20px", 
              display: "flex", 
              flexDirection: "column", 
              alignItems: "flex-start",
              gap: "16px", 
              zIndex: 1, 
              position: "relative" 
            }}
          >
            <WindowErrorBoundary>
              <DesktopIcon icon={<Amovie2 />} name="Video">
                <iframe 
                  width="1920" 
                  height="1080" 
                  src="https://www.youtube.com/embed/ZW5xq6K4Gz4" 
                  allowFullScreen 
                  title="Video Player" 
                />
              </DesktopIcon>
            </WindowErrorBoundary>

            <WindowErrorBoundary>
              <DesktopIcon icon={<Inetcpl1313 />} name="Browser">
                <iframe 
                  src={`https://render-server-1-rtai.onrender.com/proxy?url=${encodeURIComponent('https://html.duckduckgo.com/html/')}`} 
                  title="Browser" 
                  width="100%" 
                  height="450px" 
                  style={{ border: "none" }}
                />
              </DesktopIcon>
            </WindowErrorBoundary>

            <WindowErrorBoundary>
              <DesktopIcon width={650} icon={<Wordpad />} name="Resume">
                <Resume />
              </DesktopIcon>
            </WindowErrorBoundary>

            <WindowErrorBoundary>
              <DesktopIcon width={750} icon={<Pbrush1 />} name="Art Gallery">
  <ArtGallery />
</DesktopIcon>
            </WindowErrorBoundary>

            <WindowErrorBoundary>
  <DesktopIcon width={460} height={510} icon={<Joy102 />} name="Game">
    <Game />
  </DesktopIcon>
</WindowErrorBoundary>

            <WindowErrorBoundary>
              <DesktopIcon width={400} icon={<Mail />} name="Contact">
                <Contact />
              </DesktopIcon>
            </WindowErrorBoundary>
          </div>

          <WindowBar />
        </ClippyProvider>
      )}
    </div>
  );
}

export default App;
