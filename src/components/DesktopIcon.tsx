import React, { type ReactNode, type ComponentType } from "react";
import { Modal, TitleBar } from "@react95/core";
import { useWindowsStore } from "../store/windows";

const styles = {
  desktopIcon: {
    alignItems: "center",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    borderRadius: "8px",
    textAlign: "center",
    width: "80px",
    gap: "6px",
  },
  iconName: {
    color: "#ffffff",
    fontSize: "13px",
    margin: "0",
    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)",
    userSelect: "none",
  },
} as const;

interface DesktopIconProps {
  icon: ReactNode; 
  name: string;
  children: ReactNode;
  width?: number;
  height?: number;
}

const DesktopIcon = ({
  icon,
  name,
  children,
  width = 550,
  height,
}: DesktopIconProps) => {
  const { openWindow, closeWindow, isWindowOpen } = useWindowsStore();
  const isOpen = isWindowOpen(name);

  const handleOpen = () => {
    openWindow(name);
  };

  const handleClose = () => {
    closeWindow(name);
  };

  return (
    <>
      {/* Desktop Icon Launcher */}
      <div 
        style={styles.desktopIcon} 
        onClick={handleOpen}
        onDoubleClick={handleOpen}
      >
        <div style={{ width: 32, height: 32, display: "flex", justifyContent: "center", alignItems: "center" }}>
          {icon}
        </div>
        <p style={styles.iconName}>{name}</p>
      </div>

      {/* Fixed Window Container */}
      {isOpen && (
        <div style={{ position: "fixed", top: "40px", left: "120px", zIndex: 999, width: `${width}px`, maxWidth: "90vw" }}>
          <SafeModal
            id={name}
            icon={icon}
            title={name}
            closeModal={handleClose}
            style={{
              width: "100%",
              height: height ? `${height}px` : "auto",
              maxHeight: "80vh",
            }}
            titleBarOptions={[
              <TitleBar.Close
                style={{ marginBlock: "auto" }}
                key="close"
                onClick={handleClose}
              />,
            ]}
          >
            <div 
              style={{ 
                padding: "8px", 
                overflowY: "auto", 
                boxSizing: "border-box",
                width: "100%",
                maxHeight: "calc(80vh - 40px)",
              }}
            >
              {children}
            </div>
          </SafeModal>
        </div>
      )}
    </>
  );
};

export default DesktopIcon;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SafeModal = Modal as unknown as ComponentType<any>;
