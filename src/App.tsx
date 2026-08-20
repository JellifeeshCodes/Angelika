import React from 'react';
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
              gap: "20px", 
              zIndex: 1, 
              position: "relative" 
            }}
          >
            <DesktopIcon icon={<Amovie2 />} name="Video">
              <iframe 
                width="420" 
                height="315" 
                src="https://www.youtube.com/embed/v4yk_eXNbjo" 
                allowFullScreen 
                title="Video Player" 
              />
            </DesktopIcon>

            <DesktopIcon icon={<Inetcpl1313 />} name="Browser">
              <iframe 
                width={800} 
                height={500} 
                src="https://bing.com" 
                title="Browser" 
              />
            </DesktopIcon>

            <DesktopIcon width={650} icon={<Wordpad />} name="Resume">
              <Resume />
            </DesktopIcon>

            {/* Fixed: Replaced undefined Mspaint with imported Pbrush1 icon */}
            <DesktopIcon width={650} icon={<Pbrush1 />} name="Art Gallery">
              <ArtGallery />
            </DesktopIcon>

            <DesktopIcon width={400} height={400} icon={<Joy102 />} name="Game">
              <Game />
            </DesktopIcon>

            <DesktopIcon width={400} icon={<Mail />} name="Contact">
              <Contact />
            </DesktopIcon>
          </div>
          <WindowBar />
        </ClippyProvider>
      )}
    </div>
  );
}

export default App;
