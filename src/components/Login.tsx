import { Button, Input, Modal, TitleBar } from "@react95/core";
import { Keys } from "@react95/icons";
import { type ComponentType } from "react";
import { useAuth } from "../store/auth";

function Login() {
  const login = useAuth((state) => state.login);

  return (
    <SafeModal
      dragOptions={{
        disabled: true,
      }}
      title="Welcome to Windows"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "430px",
      }}
      titleBarOptions={[
        <TitleBar.Help
          style={{ marginBlock: "auto" }}
          key="help"
          onClick={() => {
            alert("Type anything to log in!");
          }}
        />,
      ]}
    >
      <Modal.Content style={{ padding: "12px" }}>
        <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
          {/* Key Icon */}
          <Keys variant="32x32_4" style={{ marginTop: "4px" }} />

          {/* Input Fields */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ margin: 0 }}>
              Type a user name and password to log in to Windows.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "70px" }}>User name:</span>
                <Input defaultValue="admin" disabled style={{ flex: 1 }} />
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "70px" }}>Password:</span>
                <Input defaultValue="admin" type="password" disabled style={{ flex: 1 }} />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "75px" }}>
            <Button style={{ width: "100%" }} onClick={() => login()}>
              OK
            </Button>
            <Button style={{ width: "100%" }}>Cancel</Button>
          </div>
        </div>
      </Modal.Content>
    </SafeModal>
  );
}

export default Login;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SafeModal = Modal as unknown as ComponentType<any>;
