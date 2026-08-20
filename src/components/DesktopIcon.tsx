import React, { type ReactElement, type ReactNode, type ComponentType } from "react";
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
    width: "100px",
    gap: "10px",
  },
  iconName: {
    color: "#ffffff",
    fontSize: "14px",
    margin: "0",
    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)",
    userSelect: "none",
  },
} as const;

interface WindowProps {
  icon: ReactNode; 
  title: string;
  children: ReactNode;
  width?: number;
  height?: number;
  onClose: () => void;
}

const Window = ({ title, onClose, children, icon, width, height }: WindowProps) => {
  return (
    <SafeModal
      id={title}
      icon={icon}
      title={title}
      closeModal={onClose}
      width={width}
      height={height}
      titleBarOptions={[
        <TitleBar.Close
          style={{ marginBlock: "auto" }}
          key="close"
          onClick={onClose}
        />,
      ]}
    >
      <div style={{ padding: "8px", overflowY: "auto", maxHeight: "100%" }}>
        {children}
      </div>
    </SafeModal>
  );
};

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
  width,
  height,
}: DesktopIconProps) => {
  const { openWindow, closeWindow, isWindowOpen } = useWindowsStore();
  const isOpen = isWindowOpen(name);

  const handleOpen = () => {
    openWindow(name);
  };

  const handleCloseWindow = () => {
    closeWindow(name);
  };

  const renderIcon = (variantSize: string) => {
    if (!React.isValidElement(icon)) {
      return null; 
    }
    if (typeof icon.type === "string") {
      return icon; 
    }
    return React.cloneElement(icon as ReactElement, { variant: variantSize } as Record<string, unknown>);
  };

  return (
    <>
      <div 
        style={styles.desktopIcon} 
        onClick={handleOpen}
        onDoubleClick={handleOpen}
      >
        {renderIcon("32x32_4")}
        <p style={styles.iconName}>{name}</p>
      </div>
      {isOpen && (
        <Window
          width={width}
          height={height}
          icon={renderIcon("16x16_4")}
          title={name}
          onClose={handleCloseWindow}
        >
          {children}
        </Window>
      )}
    </>
  );
};

export default DesktopIcon;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SafeModal = Modal as unknown as ComponentType<any>;
