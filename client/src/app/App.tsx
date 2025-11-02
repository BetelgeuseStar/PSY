import { ConfigProvider } from "antd";
import { Router } from "./Router.tsx";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorWarning: "#ffd04d",
          colorError: "#ff191b",
          fontSize: 16,
          borderRadius: 16,
          boxShadow: "0px 4px 31.2px 10px rgba(59, 164, 169, 0.5);",
          wireframe: false,
          colorPrimary: "#3ba4a9",
          colorInfo: "#3ba4a9",
        },
      }}
    >
      <Router />
    </ConfigProvider>
  );
}

export default App;
