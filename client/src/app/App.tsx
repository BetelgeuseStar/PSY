import { ConfigProvider } from "antd";
import { Router } from "./Router";
import { AuthContextProvider } from "./AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as St from "./globalStyles.ts";

function App() {
  const queryClient = new QueryClient();

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
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <St.GlobalStyles />
          <Router />
        </AuthContextProvider>
      </QueryClientProvider>
    </ConfigProvider>
  );
}

export default App;
