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
  width = 500,
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

      {/* Render Modal Window when Open */}
      {isOpen && (
        <SafeModal
          id={name}
          icon={icon}
          title={name}
          closeModal={handleClose}
          defaultPosition={{ x: 120, y: 40 }}
          width={width}
          height={height}
          style={{
            maxWidth: "95vw",
            maxHeight: "90vh",
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
              padding: "6px", 
              overflowY: "auto", 
              boxSizing: "border-box",
              width: "100%",
              height: height ? "calc(100% - 32px)" : "auto", 
              maxHeight: height ? undefined : "calc(85vh - 40px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {children}
          </div>
        </SafeModal>
      )}
    </>
  );
};

export default DesktopIcon;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SafeModal = Modal as unknown as ComponentType<any>;
